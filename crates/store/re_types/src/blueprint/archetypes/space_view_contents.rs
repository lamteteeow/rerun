// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/rust/api.rs
// Based on "crates/store/re_types/definitions/rerun/blueprint/archetypes/space_view_contents.fbs".

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
use ::re_types_core::{ComponentBatch, MaybeOwnedComponentBatch};
use ::re_types_core::{ComponentDescriptor, ComponentName};
use ::re_types_core::{DeserializationError, DeserializationResult};

/// **Archetype**: The contents of a `SpaceView`.
///
/// The contents are found by combining a collection of `QueryExpression`s.
///
/// ```diff
/// + /world/**           # add everything…
/// - /world/roads/**     # …but remove all roads…
/// + /world/roads/main   # …but show main road
/// ```
///
/// If there is multiple matching rules, the most specific rule wins.
/// If there are multiple rules of the same specificity, the last one wins.
/// If no rules match, the path is excluded.
///
/// Specifying a path without a `+` or `-` prefix is equivalent to `+`:
/// ```diff
/// /world/**           # add everything…
/// - /world/roads/**   # …but remove all roads…
/// /world/roads/main   # …but show main road
/// ```
///
/// The `/**` suffix matches the whole subtree, i.e. self and any child, recursively
/// (`/world/**` matches both `/world` and `/world/car/driver`).
/// Other uses of `*` are not (yet) supported.
///
/// Internally, `EntityPathFilter` sorts the rule by entity path, with recursive coming before non-recursive.
/// This means the last matching rule is also the most specific one. For instance:
/// ```diff
/// + /world/**
/// - /world
/// - /world/car/**
/// + /world/car/driver
/// ```
///
/// The last rule matching `/world/car/driver` is `+ /world/car/driver`, so it is included.
/// The last rule matching `/world/car/hood` is `- /world/car/**`, so it is excluded.
/// The last rule matching `/world` is `- /world`, so it is excluded.
/// The last rule matching `/world/house` is `+ /world/**`, so it is included.
#[derive(Clone, Debug, Default)]
pub struct SpaceViewContents {
    /// The `QueryExpression` that populates the contents for the `SpaceView`.
    ///
    /// They determine which entities are part of the spaceview.
    pub query: Vec<crate::blueprint::components::QueryExpression>,
}

impl ::re_types_core::SizeBytes for SpaceViewContents {
    #[inline]
    fn heap_size_bytes(&self) -> u64 {
        self.query.heap_size_bytes()
    }

    #[inline]
    fn is_pod() -> bool {
        <Vec<crate::blueprint::components::QueryExpression>>::is_pod()
    }
}

static REQUIRED_COMPONENTS: once_cell::sync::Lazy<[ComponentName; 0usize]> =
    once_cell::sync::Lazy::new(|| []);

static RECOMMENDED_COMPONENTS: once_cell::sync::Lazy<[ComponentName; 1usize]> =
    once_cell::sync::Lazy::new(|| ["rerun.blueprint.components.SpaceViewContentsIndicator".into()]);

static OPTIONAL_COMPONENTS: once_cell::sync::Lazy<[ComponentName; 1usize]> =
    once_cell::sync::Lazy::new(|| ["rerun.blueprint.components.QueryExpression".into()]);

static ALL_COMPONENTS: once_cell::sync::Lazy<[ComponentName; 2usize]> =
    once_cell::sync::Lazy::new(|| {
        [
            "rerun.blueprint.components.SpaceViewContentsIndicator".into(),
            "rerun.blueprint.components.QueryExpression".into(),
        ]
    });

static REQUIRED_COMPONENT_DESCRIPTORS: once_cell::sync::Lazy<[ComponentDescriptor; 0usize]> =
    once_cell::sync::Lazy::new(|| []);

static RECOMMENDED_COMPONENT_DESCRIPTORS: once_cell::sync::Lazy<[ComponentDescriptor; 0usize]> =
    once_cell::sync::Lazy::new(|| []);

static OPTIONAL_COMPONENT_DESCRIPTORS: once_cell::sync::Lazy<[ComponentDescriptor; 1usize]> =
    once_cell::sync::Lazy::new(|| {
        [ComponentDescriptor {
            archetype_name: Some("SpaceViewContents".into()),
            component_name: "rerun.blueprint.components.QueryExpression".into(),
            archetype_field_name: Some("query".into()),
        }]
    });

static ALL_COMPONENT_DESCRIPTORS: once_cell::sync::Lazy<[ComponentDescriptor; 1usize]> =
    once_cell::sync::Lazy::new(|| {
        [ComponentDescriptor {
            archetype_name: Some("SpaceViewContents".into()),
            component_name: "rerun.blueprint.components.QueryExpression".into(),
            archetype_field_name: Some("query".into()),
        }]
    });

impl SpaceViewContents {
    /// The total number of components in the archetype: 0 required, 1 recommended, 1 optional
    pub const NUM_COMPONENTS: usize = 2usize;
}

/// Indicator component for the [`SpaceViewContents`] [`::re_types_core::Archetype`]
pub type SpaceViewContentsIndicator = ::re_types_core::GenericIndicatorComponent<SpaceViewContents>;

impl ::re_types_core::Archetype for SpaceViewContents {
    type Indicator = SpaceViewContentsIndicator;

    #[inline]
    fn name() -> ::re_types_core::ArchetypeName {
        "rerun.blueprint.archetypes.SpaceViewContents".into()
    }

    #[inline]
    fn display_name() -> &'static str {
        "Space view contents"
    }

    #[inline]
    fn indicator() -> MaybeOwnedComponentBatch<'static> {
        static INDICATOR: SpaceViewContentsIndicator = SpaceViewContentsIndicator::DEFAULT;
        MaybeOwnedComponentBatch::Ref(&INDICATOR)
    }

    #[inline]
    fn required_components() -> ::std::borrow::Cow<'static, [ComponentName]> {
        REQUIRED_COMPONENTS.as_slice().into()
    }

    #[inline]
    fn recommended_components() -> ::std::borrow::Cow<'static, [ComponentName]> {
        RECOMMENDED_COMPONENTS.as_slice().into()
    }

    #[inline]
    fn optional_components() -> ::std::borrow::Cow<'static, [ComponentName]> {
        OPTIONAL_COMPONENTS.as_slice().into()
    }

    #[inline]
    fn all_components() -> ::std::borrow::Cow<'static, [ComponentName]> {
        ALL_COMPONENTS.as_slice().into()
    }

    #[inline]
    fn required_component_descriptors() -> ::std::borrow::Cow<'static, [ComponentDescriptor]> {
        REQUIRED_COMPONENT_DESCRIPTORS.as_slice().into()
    }

    #[inline]
    fn recommended_component_descriptors() -> ::std::borrow::Cow<'static, [ComponentDescriptor]> {
        RECOMMENDED_COMPONENT_DESCRIPTORS.as_slice().into()
    }

    #[inline]
    fn optional_component_descriptors() -> ::std::borrow::Cow<'static, [ComponentDescriptor]> {
        OPTIONAL_COMPONENT_DESCRIPTORS.as_slice().into()
    }

    #[inline]
    fn all_component_descriptors() -> ::std::borrow::Cow<'static, [ComponentDescriptor]> {
        ALL_COMPONENT_DESCRIPTORS.as_slice().into()
    }

    #[inline]
    fn from_arrow_components(
        arrow_data: impl IntoIterator<Item = (ComponentName, Box<dyn arrow2::array::Array>)>,
    ) -> DeserializationResult<Self> {
        re_tracing::profile_function!();
        use ::re_types_core::{Loggable as _, ResultExt as _};
        let arrays_by_name: ::std::collections::HashMap<_, _> = arrow_data
            .into_iter()
            .map(|(name, array)| (name.full_name(), array))
            .collect();
        let query = {
            let array = arrays_by_name
                .get("rerun.blueprint.components.QueryExpression")
                .ok_or_else(DeserializationError::missing_data)
                .with_context("rerun.blueprint.archetypes.SpaceViewContents#query")?;
            <crate::blueprint::components::QueryExpression>::from_arrow_opt(&**array)
                .with_context("rerun.blueprint.archetypes.SpaceViewContents#query")?
                .into_iter()
                .map(|v| v.ok_or_else(DeserializationError::missing_data))
                .collect::<DeserializationResult<Vec<_>>>()
                .with_context("rerun.blueprint.archetypes.SpaceViewContents#query")?
        };
        Ok(Self { query })
    }
}

impl ::re_types_core::AsComponents for SpaceViewContents {
    fn as_component_batches(&self) -> Vec<MaybeOwnedComponentBatch<'_>> {
        re_tracing::profile_function!();
        use ::re_types_core::Archetype as _;
        [
            Some(Self::indicator()),
            Some((&self.query as &dyn ComponentBatch).into()),
        ]
        .into_iter()
        .flatten()
        .collect()
    }
}

impl ::re_types_core::ArchetypeReflectionMarker for SpaceViewContents {}

impl SpaceViewContents {
    /// Create a new `SpaceViewContents`.
    #[inline]
    pub fn new(
        query: impl IntoIterator<Item = impl Into<crate::blueprint::components::QueryExpression>>,
    ) -> Self {
        Self {
            query: query.into_iter().map(Into::into).collect(),
        }
    }
}
