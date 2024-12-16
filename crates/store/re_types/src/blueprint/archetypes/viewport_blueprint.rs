// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/rust/api.rs
// Based on "crates/store/re_types/definitions/rerun/blueprint/archetypes/viewport_blueprint.fbs".

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

use ::re_types_core::external::arrow2;
use ::re_types_core::SerializationResult;
use ::re_types_core::{ComponentBatch, ComponentBatchCowWithDescriptor};
use ::re_types_core::{ComponentDescriptor, ComponentName};
use ::re_types_core::{DeserializationError, DeserializationResult};

/// **Archetype**: The top-level description of the viewport.
#[derive(Clone, Debug, Default)]
pub struct ViewportBlueprint {
    /// The layout of the views
    pub root_container: Option<crate::blueprint::components::RootContainer>,

    /// Show one tab as maximized?
    pub maximized: Option<crate::blueprint::components::ViewMaximized>,

    /// Whether the viewport layout is determined automatically.
    ///
    /// If `true`, the container layout will be reset whenever a new view is added or removed.
    /// This defaults to `false` and is automatically set to `false` when there is user determined layout.
    pub auto_layout: Option<crate::blueprint::components::AutoLayout>,

    /// Whether or not views should be created automatically.
    ///
    /// If `true`, the viewer will only add views that it hasn't considered previously (as identified by `past_viewer_recommendations`)
    /// and which aren't deemed redundant to existing views.
    /// This defaults to `false` and is automatically set to `false` when the user adds views manually in the viewer.
    pub auto_views: Option<crate::blueprint::components::AutoViews>,

    /// Hashes of all recommended views the viewer has already added and that should not be added again.
    ///
    /// This is an internal field and should not be set usually.
    /// If you want the viewer from stopping to add views, you should set `auto_views` to `false`.
    ///
    /// The viewer uses this to determine whether it should keep adding views.
    pub past_viewer_recommendations:
        Option<Vec<crate::blueprint::components::ViewerRecommendationHash>>,
}

static REQUIRED_COMPONENTS: once_cell::sync::Lazy<[ComponentDescriptor; 0usize]> =
    once_cell::sync::Lazy::new(|| []);

static RECOMMENDED_COMPONENTS: once_cell::sync::Lazy<[ComponentDescriptor; 1usize]> =
    once_cell::sync::Lazy::new(|| {
        [ComponentDescriptor {
            archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
            component_name: "rerun.blueprint.components.ViewportBlueprintIndicator".into(),
            archetype_field_name: None,
        }]
    });

static OPTIONAL_COMPONENTS: once_cell::sync::Lazy<[ComponentDescriptor; 5usize]> =
    once_cell::sync::Lazy::new(|| {
        [
            ComponentDescriptor {
                archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                component_name: "rerun.blueprint.components.RootContainer".into(),
                archetype_field_name: Some("root_container".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                component_name: "rerun.blueprint.components.ViewMaximized".into(),
                archetype_field_name: Some("maximized".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                component_name: "rerun.blueprint.components.AutoLayout".into(),
                archetype_field_name: Some("auto_layout".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                component_name: "rerun.blueprint.components.AutoViews".into(),
                archetype_field_name: Some("auto_views".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                component_name: "rerun.blueprint.components.ViewerRecommendationHash".into(),
                archetype_field_name: Some("past_viewer_recommendations".into()),
            },
        ]
    });

static ALL_COMPONENTS: once_cell::sync::Lazy<[ComponentDescriptor; 6usize]> =
    once_cell::sync::Lazy::new(|| {
        [
            ComponentDescriptor {
                archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                component_name: "rerun.blueprint.components.ViewportBlueprintIndicator".into(),
                archetype_field_name: None,
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                component_name: "rerun.blueprint.components.RootContainer".into(),
                archetype_field_name: Some("root_container".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                component_name: "rerun.blueprint.components.ViewMaximized".into(),
                archetype_field_name: Some("maximized".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                component_name: "rerun.blueprint.components.AutoLayout".into(),
                archetype_field_name: Some("auto_layout".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                component_name: "rerun.blueprint.components.AutoViews".into(),
                archetype_field_name: Some("auto_views".into()),
            },
            ComponentDescriptor {
                archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                component_name: "rerun.blueprint.components.ViewerRecommendationHash".into(),
                archetype_field_name: Some("past_viewer_recommendations".into()),
            },
        ]
    });

impl ViewportBlueprint {
    /// The total number of components in the archetype: 0 required, 1 recommended, 5 optional
    pub const NUM_COMPONENTS: usize = 6usize;
}

/// Indicator component for the [`ViewportBlueprint`] [`::re_types_core::Archetype`]
pub type ViewportBlueprintIndicator = ::re_types_core::GenericIndicatorComponent<ViewportBlueprint>;

impl ::re_types_core::Archetype for ViewportBlueprint {
    type Indicator = ViewportBlueprintIndicator;

    #[inline]
    fn name() -> ::re_types_core::ArchetypeName {
        "rerun.blueprint.archetypes.ViewportBlueprint".into()
    }

    #[inline]
    fn display_name() -> &'static str {
        "Viewport blueprint"
    }

    #[inline]
    fn indicator() -> ComponentBatchCowWithDescriptor<'static> {
        static INDICATOR: ViewportBlueprintIndicator = ViewportBlueprintIndicator::DEFAULT;
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
    fn from_arrow2_components(
        arrow_data: impl IntoIterator<Item = (ComponentName, Box<dyn arrow2::array::Array>)>,
    ) -> DeserializationResult<Self> {
        re_tracing::profile_function!();
        use ::re_types_core::{Loggable as _, ResultExt as _};
        let arrays_by_name: ::std::collections::HashMap<_, _> = arrow_data
            .into_iter()
            .map(|(name, array)| (name.full_name(), array))
            .collect();
        let root_container =
            if let Some(array) = arrays_by_name.get("rerun.blueprint.components.RootContainer") {
                <crate::blueprint::components::RootContainer>::from_arrow2_opt(&**array)
                    .with_context("rerun.blueprint.archetypes.ViewportBlueprint#root_container")?
                    .into_iter()
                    .next()
                    .flatten()
            } else {
                None
            };
        let maximized =
            if let Some(array) = arrays_by_name.get("rerun.blueprint.components.ViewMaximized") {
                <crate::blueprint::components::ViewMaximized>::from_arrow2_opt(&**array)
                    .with_context("rerun.blueprint.archetypes.ViewportBlueprint#maximized")?
                    .into_iter()
                    .next()
                    .flatten()
            } else {
                None
            };
        let auto_layout =
            if let Some(array) = arrays_by_name.get("rerun.blueprint.components.AutoLayout") {
                <crate::blueprint::components::AutoLayout>::from_arrow2_opt(&**array)
                    .with_context("rerun.blueprint.archetypes.ViewportBlueprint#auto_layout")?
                    .into_iter()
                    .next()
                    .flatten()
            } else {
                None
            };
        let auto_views =
            if let Some(array) = arrays_by_name.get("rerun.blueprint.components.AutoViews") {
                <crate::blueprint::components::AutoViews>::from_arrow2_opt(&**array)
                    .with_context("rerun.blueprint.archetypes.ViewportBlueprint#auto_views")?
                    .into_iter()
                    .next()
                    .flatten()
            } else {
                None
            };
        let past_viewer_recommendations = if let Some(array) =
            arrays_by_name.get("rerun.blueprint.components.ViewerRecommendationHash")
        {
            Some({
                <crate::blueprint::components::ViewerRecommendationHash>::from_arrow2_opt(&**array)
                    .with_context(
                        "rerun.blueprint.archetypes.ViewportBlueprint#past_viewer_recommendations",
                    )?
                    .into_iter()
                    .map(|v| v.ok_or_else(DeserializationError::missing_data))
                    .collect::<DeserializationResult<Vec<_>>>()
                    .with_context(
                        "rerun.blueprint.archetypes.ViewportBlueprint#past_viewer_recommendations",
                    )?
            })
        } else {
            None
        };
        Ok(Self {
            root_container,
            maximized,
            auto_layout,
            auto_views,
            past_viewer_recommendations,
        })
    }
}

impl ::re_types_core::AsComponents for ViewportBlueprint {
    fn as_component_batches(&self) -> Vec<ComponentBatchCowWithDescriptor<'_>> {
        re_tracing::profile_function!();
        use ::re_types_core::Archetype as _;
        [
            Some(Self::indicator()),
            (self
                .root_container
                .as_ref()
                .map(|comp| (comp as &dyn ComponentBatch)))
            .map(|batch| ::re_types_core::ComponentBatchCowWithDescriptor {
                batch: batch.into(),
                descriptor_override: Some(ComponentDescriptor {
                    archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                    archetype_field_name: Some(("root_container").into()),
                    component_name: ("rerun.blueprint.components.RootContainer").into(),
                }),
            }),
            (self
                .maximized
                .as_ref()
                .map(|comp| (comp as &dyn ComponentBatch)))
            .map(|batch| ::re_types_core::ComponentBatchCowWithDescriptor {
                batch: batch.into(),
                descriptor_override: Some(ComponentDescriptor {
                    archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                    archetype_field_name: Some(("maximized").into()),
                    component_name: ("rerun.blueprint.components.ViewMaximized").into(),
                }),
            }),
            (self
                .auto_layout
                .as_ref()
                .map(|comp| (comp as &dyn ComponentBatch)))
            .map(|batch| ::re_types_core::ComponentBatchCowWithDescriptor {
                batch: batch.into(),
                descriptor_override: Some(ComponentDescriptor {
                    archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                    archetype_field_name: Some(("auto_layout").into()),
                    component_name: ("rerun.blueprint.components.AutoLayout").into(),
                }),
            }),
            (self
                .auto_views
                .as_ref()
                .map(|comp| (comp as &dyn ComponentBatch)))
            .map(|batch| ::re_types_core::ComponentBatchCowWithDescriptor {
                batch: batch.into(),
                descriptor_override: Some(ComponentDescriptor {
                    archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                    archetype_field_name: Some(("auto_views").into()),
                    component_name: ("rerun.blueprint.components.AutoViews").into(),
                }),
            }),
            (self
                .past_viewer_recommendations
                .as_ref()
                .map(|comp_batch| (comp_batch as &dyn ComponentBatch)))
            .map(|batch| ::re_types_core::ComponentBatchCowWithDescriptor {
                batch: batch.into(),
                descriptor_override: Some(ComponentDescriptor {
                    archetype_name: Some("rerun.blueprint.archetypes.ViewportBlueprint".into()),
                    archetype_field_name: Some(("past_viewer_recommendations").into()),
                    component_name: ("rerun.blueprint.components.ViewerRecommendationHash").into(),
                }),
            }),
        ]
        .into_iter()
        .flatten()
        .collect()
    }
}

impl ::re_types_core::ArchetypeReflectionMarker for ViewportBlueprint {}

impl ViewportBlueprint {
    /// Create a new `ViewportBlueprint`.
    #[inline]
    pub fn new() -> Self {
        Self {
            root_container: None,
            maximized: None,
            auto_layout: None,
            auto_views: None,
            past_viewer_recommendations: None,
        }
    }

    /// Create an empty `ViewportBlueprint`.
    #[inline]
    pub fn update() -> Self {
        Self {
            root_container: None,
            maximized: None,
            auto_layout: None,
            auto_views: None,
            past_viewer_recommendations: None,
        }
    }

    /// The layout of the views
    #[inline]
    pub fn with_root_container(
        mut self,
        root_container: impl Into<crate::blueprint::components::RootContainer>,
    ) -> Self {
        self.root_container = Some(root_container.into());
        self
    }

    /// Show one tab as maximized?
    #[inline]
    pub fn with_maximized(
        mut self,
        maximized: impl Into<crate::blueprint::components::ViewMaximized>,
    ) -> Self {
        self.maximized = Some(maximized.into());
        self
    }

    /// Whether the viewport layout is determined automatically.
    ///
    /// If `true`, the container layout will be reset whenever a new view is added or removed.
    /// This defaults to `false` and is automatically set to `false` when there is user determined layout.
    #[inline]
    pub fn with_auto_layout(
        mut self,
        auto_layout: impl Into<crate::blueprint::components::AutoLayout>,
    ) -> Self {
        self.auto_layout = Some(auto_layout.into());
        self
    }

    /// Whether or not views should be created automatically.
    ///
    /// If `true`, the viewer will only add views that it hasn't considered previously (as identified by `past_viewer_recommendations`)
    /// and which aren't deemed redundant to existing views.
    /// This defaults to `false` and is automatically set to `false` when the user adds views manually in the viewer.
    #[inline]
    pub fn with_auto_views(
        mut self,
        auto_views: impl Into<crate::blueprint::components::AutoViews>,
    ) -> Self {
        self.auto_views = Some(auto_views.into());
        self
    }

    /// Hashes of all recommended views the viewer has already added and that should not be added again.
    ///
    /// This is an internal field and should not be set usually.
    /// If you want the viewer from stopping to add views, you should set `auto_views` to `false`.
    ///
    /// The viewer uses this to determine whether it should keep adding views.
    #[inline]
    pub fn with_past_viewer_recommendations(
        mut self,
        past_viewer_recommendations: impl IntoIterator<
            Item = impl Into<crate::blueprint::components::ViewerRecommendationHash>,
        >,
    ) -> Self {
        self.past_viewer_recommendations = Some(
            past_viewer_recommendations
                .into_iter()
                .map(Into::into)
                .collect(),
        );
        self
    }
}

impl ::re_types_core::SizeBytes for ViewportBlueprint {
    #[inline]
    fn heap_size_bytes(&self) -> u64 {
        self.root_container.heap_size_bytes()
            + self.maximized.heap_size_bytes()
            + self.auto_layout.heap_size_bytes()
            + self.auto_views.heap_size_bytes()
            + self.past_viewer_recommendations.heap_size_bytes()
    }

    #[inline]
    fn is_pod() -> bool {
        <Option<crate::blueprint::components::RootContainer>>::is_pod()
            && <Option<crate::blueprint::components::ViewMaximized>>::is_pod()
            && <Option<crate::blueprint::components::AutoLayout>>::is_pod()
            && <Option<crate::blueprint::components::AutoViews>>::is_pod()
            && <Option<Vec<crate::blueprint::components::ViewerRecommendationHash>>>::is_pod()
    }
}
