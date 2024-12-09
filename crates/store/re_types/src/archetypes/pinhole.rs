// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/rust/api.rs
// Based on "crates/store/re_types/definitions/rerun/archetypes/pinhole.fbs".

#![allow(unused_imports)]
#![allow(unused_parens)]
#![allow(clippy::clone_on_copy)]
#![allow(clippy::cloned_instead_of_copied)]
#![allow(clippy::map_flatten)]
#![allow(clippy::needless_question_mark)]
#![allow(clippy::new_without_default)]
#![allow(clippy::redundant_closure)]
#![allow(clippy::too_many_arguments)]
#![allow(clippy::too_many_lines)]

use ::re_types_core::external::arrow;
use ::re_types_core::SerializationResult;
use ::re_types_core::{ComponentBatch, ComponentBatchCowWithDescriptor};
use ::re_types_core::{ComponentDescriptor, ComponentName};
use ::re_types_core::{DeserializationError, DeserializationResult};

/// **Archetype**: Camera perspective projection (a.k.a. intrinsics).
///
/// ## Examples
///
/// ### Simple pinhole camera
/// ```ignore
/// use ndarray::{Array, ShapeBuilder};
///
/// fn main() -> Result<(), Box<dyn std::error::Error>> {
///     let rec = rerun::RecordingStreamBuilder::new("rerun_example_pinhole").spawn()?;
///
///     let mut image = Array::<u8, _>::default((3, 3, 3).f());
///     image.map_inplace(|x| *x = rand::random());
///
///     rec.log(
///         "world/image",
///         &rerun::Pinhole::from_focal_length_and_resolution([3., 3.], [3., 3.]),
///     )?;
///     rec.log(
///         "world/image",
///         &rerun::Image::from_color_model_and_tensor(rerun::ColorModel::RGB, image)?,
///     )?;
///
///     Ok(())
/// }
/// ```
/// <center>
/// <picture>
///   <source media="(max-width: 480px)" srcset="https://static.rerun.io/pinhole_simple/9af9441a94bcd9fd54e1fea44fb0c59ff381a7f2/480w.png">
///   <source media="(max-width: 768px)" srcset="https://static.rerun.io/pinhole_simple/9af9441a94bcd9fd54e1fea44fb0c59ff381a7f2/768w.png">
///   <source media="(max-width: 1024px)" srcset="https://static.rerun.io/pinhole_simple/9af9441a94bcd9fd54e1fea44fb0c59ff381a7f2/1024w.png">
///   <source media="(max-width: 1200px)" srcset="https://static.rerun.io/pinhole_simple/9af9441a94bcd9fd54e1fea44fb0c59ff381a7f2/1200w.png">
///   <img src="https://static.rerun.io/pinhole_simple/9af9441a94bcd9fd54e1fea44fb0c59ff381a7f2/full.png" width="640">
/// </picture>
/// </center>
///
/// ### Perspective pinhole camera
/// ```ignore
/// fn main() -> Result<(), Box<dyn std::error::Error>> {
///     let rec = rerun::RecordingStreamBuilder::new("rerun_example_pinhole_perspective").spawn()?;
///
///     let fov_y = std::f32::consts::FRAC_PI_4;
///     let aspect_ratio = 1.7777778;
///     rec.log(
///         "world/cam",
///         &rerun::Pinhole::from_fov_and_aspect_ratio(fov_y, aspect_ratio)
///             .with_camera_xyz(rerun::components::ViewCoordinates::RUB)
///             .with_image_plane_distance(0.1),
///     )?;
///
///     rec.log(
///         "world/points",
///         &rerun::Points3D::new([(0.0, 0.0, -0.5), (0.1, 0.1, -0.5), (-0.1, -0.1, -0.5)])
///             .with_radii([0.025]),
///     )?;
///
///     Ok(())
/// }
/// ```
/// <center>
/// <picture>
///   <source media="(max-width: 480px)" srcset="https://static.rerun.io/pinhole_perspective/317e2de6d212b238dcdad5b67037e9e2a2afafa0/480w.png">
///   <source media="(max-width: 768px)" srcset="https://static.rerun.io/pinhole_perspective/317e2de6d212b238dcdad5b67037e9e2a2afafa0/768w.png">
///   <source media="(max-width: 1024px)" srcset="https://static.rerun.io/pinhole_perspective/317e2de6d212b238dcdad5b67037e9e2a2afafa0/1024w.png">
///   <source media="(max-width: 1200px)" srcset="https://static.rerun.io/pinhole_perspective/317e2de6d212b238dcdad5b67037e9e2a2afafa0/1200w.png">
///   <img src="https://static.rerun.io/pinhole_perspective/317e2de6d212b238dcdad5b67037e9e2a2afafa0/full.png" width="640">
/// </picture>
/// </center>
#[derive(Clone, Debug, PartialEq)]
pub struct Pinhole {
    /// Camera projection, from image coordinates to view coordinates.
    pub image_from_camera: crate::components::PinholeProjection,

    /// Pixel resolution (usually integers) of child image space. Width and height.
    ///
    /// Example:
    /// ```text
    /// [1920.0, 1440.0]
    /// ```
    ///
    /// `image_from_camera` project onto the space spanned by `(0,0)` and `resolution - 1`.
    pub resolution: Option<crate::components::Resolution>,

    /// Sets the view coordinates for the camera.
    ///
    /// All common values are available as constants on the [`components::ViewCoordinates`][crate::components::ViewCoordinates] class.
    ///
    /// The default is `ViewCoordinates::RDF`, i.e. X=Right, Y=Down, Z=Forward, and this is also the recommended setting.
    /// This means that the camera frustum will point along the positive Z axis of the parent space,
    /// and the cameras "up" direction will be along the negative Y axis of the parent space.
    ///
    /// The camera frustum will point whichever axis is set to `F` (or the opposite of `B`).
    /// When logging a depth image under this entity, this is the direction the point cloud will be projected.
    /// With `RDF`, the default forward is +Z.
    ///
    /// The frustum's "up" direction will be whichever axis is set to `U` (or the opposite of `D`).
    /// This will match the negative Y direction of pixel space (all images are assumed to have xyz=RDF).
    /// With `RDF`, the default is up is -Y.
    ///
    /// The frustum's "right" direction will be whichever axis is set to `R` (or the opposite of `L`).
    /// This will match the positive X direction of pixel space (all images are assumed to have xyz=RDF).
    /// With `RDF`, the default right is +x.
    ///
    /// Other common formats are `RUB` (X=Right, Y=Up, Z=Back) and `FLU` (X=Forward, Y=Left, Z=Up).
    ///
    /// NOTE: setting this to something else than `RDF` (the default) will change the orientation of the camera frustum,
    /// and make the pinhole matrix not match up with the coordinate system of the pinhole entity.
    ///
    /// The pinhole matrix (the `image_from_camera` argument) always project along the third (Z) axis,
    /// but will be re-oriented to project along the forward axis of the `camera_xyz` argument.
    pub camera_xyz: Option<crate::components::ViewCoordinates>,

    /// The distance from the camera origin to the image plane when the projection is shown in a 3D viewer.
    ///
    /// This is only used for visualization purposes, and does not affect the projection itself.
    pub image_plane_distance: Option<crate::components::ImagePlaneDistance>,
}

static REQUIRED_COMPONENTS: once_cell::sync::Lazy<[ComponentDescriptor; 1usize]> =
    once_cell::sync::Lazy::new(|| {
        [ComponentDescriptor {
            archetype_name: Some("rerun.archetypes.Pinhole".into()),
            component_name: "rerun.components.PinholeProjection".into(),
            archetype_field_name: Some("image_from_camera".into()),
        }]
    });

static RECOMMENDED_COMPONENTS: once_cell::sync::Lazy<[ComponentDescriptor; 2usize]> =
    once_cell::sync::Lazy::new(|| {
        [
            ComponentDescriptor {
                archetype_name: Some("rerun.archetypes.Pinhole".into()),
                component_name: "rerun.components.Resolution".into(),
                archetype_field_name: Some("resolution".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.archetypes.Pinhole".into()),
                component_name: "rerun.components.PinholeIndicator".into(),
                archetype_field_name: None,
            },
        ]
    });

static OPTIONAL_COMPONENTS: once_cell::sync::Lazy<[ComponentDescriptor; 2usize]> =
    once_cell::sync::Lazy::new(|| {
        [
            ComponentDescriptor {
                archetype_name: Some("rerun.archetypes.Pinhole".into()),
                component_name: "rerun.components.ViewCoordinates".into(),
                archetype_field_name: Some("camera_xyz".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.archetypes.Pinhole".into()),
                component_name: "rerun.components.ImagePlaneDistance".into(),
                archetype_field_name: Some("image_plane_distance".into()),
            },
        ]
    });

static ALL_COMPONENTS: once_cell::sync::Lazy<[ComponentDescriptor; 5usize]> =
    once_cell::sync::Lazy::new(|| {
        [
            ComponentDescriptor {
                archetype_name: Some("rerun.archetypes.Pinhole".into()),
                component_name: "rerun.components.PinholeProjection".into(),
                archetype_field_name: Some("image_from_camera".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.archetypes.Pinhole".into()),
                component_name: "rerun.components.Resolution".into(),
                archetype_field_name: Some("resolution".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.archetypes.Pinhole".into()),
                component_name: "rerun.components.PinholeIndicator".into(),
                archetype_field_name: None,
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.archetypes.Pinhole".into()),
                component_name: "rerun.components.ViewCoordinates".into(),
                archetype_field_name: Some("camera_xyz".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.archetypes.Pinhole".into()),
                component_name: "rerun.components.ImagePlaneDistance".into(),
                archetype_field_name: Some("image_plane_distance".into()),
            },
        ]
    });

impl Pinhole {
    /// The total number of components in the archetype: 1 required, 2 recommended, 2 optional
    pub const NUM_COMPONENTS: usize = 5usize;
}

/// Indicator component for the [`Pinhole`] [`::re_types_core::Archetype`]
pub type PinholeIndicator = ::re_types_core::GenericIndicatorComponent<Pinhole>;

impl ::re_types_core::Archetype for Pinhole {
    type Indicator = PinholeIndicator;

    #[inline]
    fn name() -> ::re_types_core::ArchetypeName {
        "rerun.archetypes.Pinhole".into()
    }

    #[inline]
    fn display_name() -> &'static str {
        "Pinhole"
    }

    #[inline]
    fn indicator() -> ComponentBatchCowWithDescriptor<'static> {
        static INDICATOR: PinholeIndicator = PinholeIndicator::DEFAULT;
        ComponentBatchCowWithDescriptor::new(&INDICATOR as &dyn ::re_types_core::ComponentBatch)
    }

    #[inline]
    fn required_components() -> ::std::borrow::Cow<'static, [ComponentDescriptor]> {
        REQUIRED_COMPONENTS.as_slice().into()
    }

    #[inline]
    fn recommended_components() -> ::std::borrow::Cow<'static, [ComponentDescriptor]> {
        RECOMMENDED_COMPONENTS.as_slice().into()
    }

    #[inline]
    fn optional_components() -> ::std::borrow::Cow<'static, [ComponentDescriptor]> {
        OPTIONAL_COMPONENTS.as_slice().into()
    }

    #[inline]
    fn all_components() -> ::std::borrow::Cow<'static, [ComponentDescriptor]> {
        ALL_COMPONENTS.as_slice().into()
    }

    #[inline]
    fn from_arrow_components(
        arrow_data: impl IntoIterator<Item = (ComponentName, arrow::array::ArrayRef)>,
    ) -> DeserializationResult<Self> {
        re_tracing::profile_function!();
        use ::re_types_core::{Loggable as _, ResultExt as _};
        let arrays_by_name: ::std::collections::HashMap<_, _> = arrow_data
            .into_iter()
            .map(|(name, array)| (name.full_name(), array))
            .collect();
        let image_from_camera = {
            let array = arrays_by_name
                .get("rerun.components.PinholeProjection")
                .ok_or_else(DeserializationError::missing_data)
                .with_context("rerun.archetypes.Pinhole#image_from_camera")?;
            <crate::components::PinholeProjection>::from_arrow_opt(&**array)
                .with_context("rerun.archetypes.Pinhole#image_from_camera")?
                .into_iter()
                .next()
                .flatten()
                .ok_or_else(DeserializationError::missing_data)
                .with_context("rerun.archetypes.Pinhole#image_from_camera")?
        };
        let resolution = if let Some(array) = arrays_by_name.get("rerun.components.Resolution") {
            <crate::components::Resolution>::from_arrow_opt(&**array)
                .with_context("rerun.archetypes.Pinhole#resolution")?
                .into_iter()
                .next()
                .flatten()
        } else {
            None
        };
        let camera_xyz = if let Some(array) = arrays_by_name.get("rerun.components.ViewCoordinates")
        {
            <crate::components::ViewCoordinates>::from_arrow_opt(&**array)
                .with_context("rerun.archetypes.Pinhole#camera_xyz")?
                .into_iter()
                .next()
                .flatten()
        } else {
            None
        };
        let image_plane_distance =
            if let Some(array) = arrays_by_name.get("rerun.components.ImagePlaneDistance") {
                <crate::components::ImagePlaneDistance>::from_arrow_opt(&**array)
                    .with_context("rerun.archetypes.Pinhole#image_plane_distance")?
                    .into_iter()
                    .next()
                    .flatten()
            } else {
                None
            };
        Ok(Self {
            image_from_camera,
            resolution,
            camera_xyz,
            image_plane_distance,
        })
    }
}

impl ::re_types_core::AsComponents for Pinhole {
    fn as_component_batches(&self) -> Vec<ComponentBatchCowWithDescriptor<'_>> {
        re_tracing::profile_function!();
        use ::re_types_core::Archetype as _;
        [
            Some(Self::indicator()),
            (Some(&self.image_from_camera as &dyn ComponentBatch)).map(|batch| {
                ::re_types_core::ComponentBatchCowWithDescriptor {
                    batch: batch.into(),
                    descriptor_override: Some(ComponentDescriptor {
                        archetype_name: Some("rerun.archetypes.Pinhole".into()),
                        archetype_field_name: Some(("image_from_camera").into()),
                        component_name: ("rerun.components.PinholeProjection").into(),
                    }),
                }
            }),
            (self
                .resolution
                .as_ref()
                .map(|comp| (comp as &dyn ComponentBatch)))
            .map(|batch| ::re_types_core::ComponentBatchCowWithDescriptor {
                batch: batch.into(),
                descriptor_override: Some(ComponentDescriptor {
                    archetype_name: Some("rerun.archetypes.Pinhole".into()),
                    archetype_field_name: Some(("resolution").into()),
                    component_name: ("rerun.components.Resolution").into(),
                }),
            }),
            (self
                .camera_xyz
                .as_ref()
                .map(|comp| (comp as &dyn ComponentBatch)))
            .map(|batch| ::re_types_core::ComponentBatchCowWithDescriptor {
                batch: batch.into(),
                descriptor_override: Some(ComponentDescriptor {
                    archetype_name: Some("rerun.archetypes.Pinhole".into()),
                    archetype_field_name: Some(("camera_xyz").into()),
                    component_name: ("rerun.components.ViewCoordinates").into(),
                }),
            }),
            (self
                .image_plane_distance
                .as_ref()
                .map(|comp| (comp as &dyn ComponentBatch)))
            .map(|batch| ::re_types_core::ComponentBatchCowWithDescriptor {
                batch: batch.into(),
                descriptor_override: Some(ComponentDescriptor {
                    archetype_name: Some("rerun.archetypes.Pinhole".into()),
                    archetype_field_name: Some(("image_plane_distance").into()),
                    component_name: ("rerun.components.ImagePlaneDistance").into(),
                }),
            }),
        ]
        .into_iter()
        .flatten()
        .collect()
    }
}

impl ::re_types_core::ArchetypeReflectionMarker for Pinhole {}

impl Pinhole {
    /// Create a new `Pinhole`.
    #[inline]
    pub fn new(image_from_camera: impl Into<crate::components::PinholeProjection>) -> Self {
        Self {
            image_from_camera: image_from_camera.into(),
            resolution: None,
            camera_xyz: None,
            image_plane_distance: None,
        }
    }

    /// Pixel resolution (usually integers) of child image space. Width and height.
    ///
    /// Example:
    /// ```text
    /// [1920.0, 1440.0]
    /// ```
    ///
    /// `image_from_camera` project onto the space spanned by `(0,0)` and `resolution - 1`.
    #[inline]
    pub fn with_resolution(mut self, resolution: impl Into<crate::components::Resolution>) -> Self {
        self.resolution = Some(resolution.into());
        self
    }

    /// Sets the view coordinates for the camera.
    ///
    /// All common values are available as constants on the [`components::ViewCoordinates`][crate::components::ViewCoordinates] class.
    ///
    /// The default is `ViewCoordinates::RDF`, i.e. X=Right, Y=Down, Z=Forward, and this is also the recommended setting.
    /// This means that the camera frustum will point along the positive Z axis of the parent space,
    /// and the cameras "up" direction will be along the negative Y axis of the parent space.
    ///
    /// The camera frustum will point whichever axis is set to `F` (or the opposite of `B`).
    /// When logging a depth image under this entity, this is the direction the point cloud will be projected.
    /// With `RDF`, the default forward is +Z.
    ///
    /// The frustum's "up" direction will be whichever axis is set to `U` (or the opposite of `D`).
    /// This will match the negative Y direction of pixel space (all images are assumed to have xyz=RDF).
    /// With `RDF`, the default is up is -Y.
    ///
    /// The frustum's "right" direction will be whichever axis is set to `R` (or the opposite of `L`).
    /// This will match the positive X direction of pixel space (all images are assumed to have xyz=RDF).
    /// With `RDF`, the default right is +x.
    ///
    /// Other common formats are `RUB` (X=Right, Y=Up, Z=Back) and `FLU` (X=Forward, Y=Left, Z=Up).
    ///
    /// NOTE: setting this to something else than `RDF` (the default) will change the orientation of the camera frustum,
    /// and make the pinhole matrix not match up with the coordinate system of the pinhole entity.
    ///
    /// The pinhole matrix (the `image_from_camera` argument) always project along the third (Z) axis,
    /// but will be re-oriented to project along the forward axis of the `camera_xyz` argument.
    #[inline]
    pub fn with_camera_xyz(
        mut self,
        camera_xyz: impl Into<crate::components::ViewCoordinates>,
    ) -> Self {
        self.camera_xyz = Some(camera_xyz.into());
        self
    }

    /// The distance from the camera origin to the image plane when the projection is shown in a 3D viewer.
    ///
    /// This is only used for visualization purposes, and does not affect the projection itself.
    #[inline]
    pub fn with_image_plane_distance(
        mut self,
        image_plane_distance: impl Into<crate::components::ImagePlaneDistance>,
    ) -> Self {
        self.image_plane_distance = Some(image_plane_distance.into());
        self
    }
}

impl ::re_types_core::SizeBytes for Pinhole {
    #[inline]
    fn heap_size_bytes(&self) -> u64 {
        self.image_from_camera.heap_size_bytes()
            + self.resolution.heap_size_bytes()
            + self.camera_xyz.heap_size_bytes()
            + self.image_plane_distance.heap_size_bytes()
    }

    #[inline]
    fn is_pod() -> bool {
        <crate::components::PinholeProjection>::is_pod()
            && <Option<crate::components::Resolution>>::is_pod()
            && <Option<crate::components::ViewCoordinates>>::is_pod()
            && <Option<crate::components::ImagePlaneDistance>>::is_pod()
    }
}
