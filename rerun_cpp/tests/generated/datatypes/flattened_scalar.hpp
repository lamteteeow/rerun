// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/store/re_types/definitions/rerun/testing/datatypes/fuzzy.fbs".

#pragma once

#include <cstdint>
#include <memory>
#include <rerun/component_descriptor.hpp>
#include <rerun/result.hpp>

namespace arrow {
    class Array;
    class DataType;
    class StructBuilder;
} // namespace arrow

namespace rerun::datatypes {
    struct FlattenedScalar {
        float value;

      public:
        FlattenedScalar() = default;

        FlattenedScalar(float value_) : value(value_) {}

        FlattenedScalar& operator=(float value_) {
            value = value_;
            return *this;
        }
    };
} // namespace rerun::datatypes

namespace rerun {
    template <typename T>
    struct Loggable;

    /// \private
    template <>
    struct Loggable<datatypes::FlattenedScalar> {
        static constexpr ComponentDescriptor Descriptor = "rerun.testing.datatypes.FlattenedScalar";

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype();

        /// Serializes an array of `rerun::datatypes::FlattenedScalar` into an arrow array.
        static Result<std::shared_ptr<arrow::Array>> to_arrow(
            const datatypes::FlattenedScalar* instances, size_t num_instances
        );

        /// Fills an arrow array builder with an array of this type.
        static rerun::Error fill_arrow_array_builder(
            arrow::StructBuilder* builder, const datatypes::FlattenedScalar* elements,
            size_t num_elements
        );
    };
} // namespace rerun