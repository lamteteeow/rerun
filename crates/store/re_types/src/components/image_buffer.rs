// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/rust/api.rs
// Based on "crates/store/re_types/definitions/rerun/components/image_buffer.fbs".

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

/// **Component**: A buffer that is known to store image data.
///
/// To interpret the contents of this buffer, see, [`components::ImageFormat`][crate::components::ImageFormat].
#[derive(Clone, Debug, PartialEq, Eq)]
#[repr(transparent)]
pub struct ImageBuffer(pub crate::datatypes::Blob);

impl ::re_types_core::Component for ImageBuffer {
    #[inline]
    fn descriptor() -> ComponentDescriptor {
        ComponentDescriptor::new("rerun.components.ImageBuffer")
    }
}

::re_types_core::macros::impl_into_cow!(ImageBuffer);

impl ::re_types_core::Loggable for ImageBuffer {
    #[inline]
    fn arrow_datatype() -> arrow::datatypes::DataType {
        crate::datatypes::Blob::arrow_datatype()
    }

    fn to_arrow_opt<'a>(
        data: impl IntoIterator<Item = Option<impl Into<::std::borrow::Cow<'a, Self>>>>,
    ) -> SerializationResult<arrow::array::ArrayRef>
    where
        Self: Clone + 'a,
    {
        crate::datatypes::Blob::to_arrow_opt(data.into_iter().map(|datum| {
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
        crate::datatypes::Blob::from_arrow_opt(arrow_data)
            .map(|v| v.into_iter().map(|v| v.map(Self)).collect())
    }
}

impl<T: Into<crate::datatypes::Blob>> From<T> for ImageBuffer {
    fn from(v: T) -> Self {
        Self(v.into())
    }
}

impl std::borrow::Borrow<crate::datatypes::Blob> for ImageBuffer {
    #[inline]
    fn borrow(&self) -> &crate::datatypes::Blob {
        &self.0
    }
}

impl std::ops::Deref for ImageBuffer {
    type Target = crate::datatypes::Blob;

    #[inline]
    fn deref(&self) -> &crate::datatypes::Blob {
        &self.0
    }
}

impl std::ops::DerefMut for ImageBuffer {
    #[inline]
    fn deref_mut(&mut self) -> &mut crate::datatypes::Blob {
        &mut self.0
    }
}

impl ::re_types_core::SizeBytes for ImageBuffer {
    #[inline]
    fn heap_size_bytes(&self) -> u64 {
        self.0.heap_size_bytes()
    }

    #[inline]
    fn is_pod() -> bool {
        <crate::datatypes::Blob>::is_pod()
    }
}
