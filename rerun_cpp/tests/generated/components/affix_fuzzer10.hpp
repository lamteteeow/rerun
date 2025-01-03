// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/store/re_types/definitions/rerun/testing/components/fuzzy.fbs".

#pragma once

#include <cstdint>
#include <memory>
#include <optional>
#include <rerun/component_descriptor.hpp>
#include <rerun/result.hpp>
#include <string>
#include <utility>

namespace arrow {
    class Array;
    class DataType;
    class StringBuilder;
} // namespace arrow

namespace rerun::components {
    struct AffixFuzzer10 {
        std::optional<std::string> single_string_optional;

      public:
        AffixFuzzer10() = default;

        AffixFuzzer10(std::optional<std::string> single_string_optional_)
            : single_string_optional(std::move(single_string_optional_)) {}

        AffixFuzzer10& operator=(std::optional<std::string> single_string_optional_) {
            single_string_optional = std::move(single_string_optional_);
            return *this;
        }
    };
} // namespace rerun::components

namespace rerun {
    template <typename T>
    struct Loggable;

    /// \private
    template <>
    struct Loggable<components::AffixFuzzer10> {
        static constexpr ComponentDescriptor Descriptor = "rerun.testing.components.AffixFuzzer10";

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype();

        /// Serializes an array of `rerun::components::AffixFuzzer10` into an arrow array.
        static Result<std::shared_ptr<arrow::Array>> to_arrow(
            const components::AffixFuzzer10* instances, size_t num_instances
        );

        /// Fills an arrow array builder with an array of this type.
        static rerun::Error fill_arrow_array_builder(
            arrow::StringBuilder* builder, const components::AffixFuzzer10* elements,
            size_t num_elements
        );
    };
} // namespace rerun