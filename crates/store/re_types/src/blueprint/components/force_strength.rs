// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/rust/api.rs
// Based on "crates/store/re_types/definitions/rerun/blueprint/components/force_strength.fbs".

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

/// **Component**: The strength of a given force.
///
/// Allows to assign different weights to the individual forces, prioritizing one over the other.
#[derive(Clone, Debug, Default, Copy, PartialEq)]
#[repr(transparent)]
pub struct ForceStrength(pub crate::datatypes::Float64);

impl ::re_types_core::Component for ForceStrength {
    #[inline]
    fn descriptor() -> ComponentDescriptor {
        ComponentDescriptor::new("rerun.blueprint.components.ForceStrength")
    }
}

::re_types_core::macros::impl_into_cow!(ForceStrength);

impl ::re_types_core::Loggable for ForceStrength {
    #[inline]
    fn arrow_datatype() -> arrow::datatypes::DataType {
        crate::datatypes::Float64::arrow_datatype()
    }

    fn to_arrow_opt<'a>(
        data: impl IntoIterator<Item = Option<impl Into<::std::borrow::Cow<'a, Self>>>>,
    ) -> SerializationResult<arrow::array::ArrayRef>
    where
        Self: Clone + 'a,
    {
        crate::datatypes::Float64::to_arrow_opt(data.into_iter().map(|datum| {
            datum.map(|datum| match datum.into() {
                ::std::borrow::Cow::Borrowed(datum) => ::std::borrow::Cow::Borrowed(&datum.0),
                ::std::borrow::Cow::Owned(datum) => ::std::borrow::Cow::Owned(datum.0),
            })
        }))
    }

    fn from_arrow2_opt(
        arrow_data: &dyn arrow2::array::Array,
    ) -> DeserializationResult<Vec<Option<Self>>>
    where
        Self: Sized,
    {
        crate::datatypes::Float64::from_arrow2_opt(arrow_data)
            .map(|v| v.into_iter().map(|v| v.map(Self)).collect())
    }

    #[inline]
    fn from_arrow2(arrow_data: &dyn arrow2::array::Array) -> DeserializationResult<Vec<Self>>
    where
        Self: Sized,
    {
        crate::datatypes::Float64::from_arrow2(arrow_data)
            .map(|v| v.into_iter().map(Self).collect())
    }
}

impl<T: Into<crate::datatypes::Float64>> From<T> for ForceStrength {
    fn from(v: T) -> Self {
        Self(v.into())
    }
}

impl std::borrow::Borrow<crate::datatypes::Float64> for ForceStrength {
    #[inline]
    fn borrow(&self) -> &crate::datatypes::Float64 {
        &self.0
    }
}

impl std::ops::Deref for ForceStrength {
    type Target = crate::datatypes::Float64;

    #[inline]
    fn deref(&self) -> &crate::datatypes::Float64 {
        &self.0
    }
}

impl std::ops::DerefMut for ForceStrength {
    #[inline]
    fn deref_mut(&mut self) -> &mut crate::datatypes::Float64 {
        &mut self.0
    }
}

impl ::re_byte_size::SizeBytes for ForceStrength {
    #[inline]
    fn heap_size_bytes(&self) -> u64 {
        self.0.heap_size_bytes()
    }

    #[inline]
    fn is_pod() -> bool {
        <crate::datatypes::Float64>::is_pod()
    }
}