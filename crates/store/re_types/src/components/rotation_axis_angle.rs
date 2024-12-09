// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/rust/api.rs
// Based on "crates/store/re_types/definitions/rerun/components/rotation_axis_angle.fbs".

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

/// **Component**: 3D rotation represented by a rotation around a given axis.
///
/// If normalization of the rotation axis fails the rotation is treated as an invalid transform.
#[derive(Clone, Debug, Default, Copy, PartialEq)]
#[repr(transparent)]
pub struct RotationAxisAngle(pub crate::datatypes::RotationAxisAngle);

impl ::re_types_core::Component for RotationAxisAngle {
    #[inline]
    fn descriptor() -> ComponentDescriptor {
        ComponentDescriptor::new("rerun.components.RotationAxisAngle")
    }
}

::re_types_core::macros::impl_into_cow!(RotationAxisAngle);

impl ::re_types_core::Loggable for RotationAxisAngle {
    #[inline]
    fn arrow_datatype() -> arrow::datatypes::DataType {
        crate::datatypes::RotationAxisAngle::arrow_datatype()
    }

    fn to_arrow_opt<'a>(
        data: impl IntoIterator<Item = Option<impl Into<::std::borrow::Cow<'a, Self>>>>,
    ) -> SerializationResult<arrow::array::ArrayRef>
    where
        Self: Clone + 'a,
    {
        crate::datatypes::RotationAxisAngle::to_arrow_opt(data.into_iter().map(|datum| {
            datum.map(|datum| match datum.into() {
                ::std::borrow::Cow::Borrowed(datum) => ::std::borrow::Cow::Borrowed(&datum.0),
                ::std::borrow::Cow::Owned(datum) => ::std::borrow::Cow::Owned(datum.0),
            })
        }))
    }

    fn from_arrow_opt(
        arrow_data: &dyn arrow::array::Array,
    ) -> DeserializationResult<Vec<Option<Self>>>
    where
        Self: Sized,
    {
        crate::datatypes::RotationAxisAngle::from_arrow_opt(arrow_data)
            .map(|v| v.into_iter().map(|v| v.map(Self)).collect())
    }
}

impl<T: Into<crate::datatypes::RotationAxisAngle>> From<T> for RotationAxisAngle {
    fn from(v: T) -> Self {
        Self(v.into())
    }
}

impl std::borrow::Borrow<crate::datatypes::RotationAxisAngle> for RotationAxisAngle {
    #[inline]
    fn borrow(&self) -> &crate::datatypes::RotationAxisAngle {
        &self.0
    }
}

impl std::ops::Deref for RotationAxisAngle {
    type Target = crate::datatypes::RotationAxisAngle;

    #[inline]
    fn deref(&self) -> &crate::datatypes::RotationAxisAngle {
        &self.0
    }
}

impl std::ops::DerefMut for RotationAxisAngle {
    #[inline]
    fn deref_mut(&mut self) -> &mut crate::datatypes::RotationAxisAngle {
        &mut self.0
    }
}

impl ::re_types_core::SizeBytes for RotationAxisAngle {
    #[inline]
    fn heap_size_bytes(&self) -> u64 {
        self.0.heap_size_bytes()
    }

    #[inline]
    fn is_pod() -> bool {
        <crate::datatypes::RotationAxisAngle>::is_pod()
    }
}
