// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/store/re_types/definitions/rerun/testing/components/fuzzy.fbs".

#pragma once

#include "../datatypes/affix_fuzzer4.hpp"

#include <cstdint>
#include <memory>
#include <optional>
#include <rerun/collection.hpp>
#include <rerun/component_descriptor.hpp>
#include <rerun/result.hpp>
#include <utility>

namespace arrow {
    class Array;
    class DataType;
    class ListBuilder;
} // namespace arrow

namespace rerun::components {
    struct AffixFuzzer18 {
        std::optional<rerun::Collection<rerun::datatypes::AffixFuzzer4>> many_optional_unions;

      public:
        AffixFuzzer18() = default;

        AffixFuzzer18(
            std::optional<rerun::Collection<rerun::datatypes::AffixFuzzer4>> many_optional_unions_
        )
            : many_optional_unions(std::move(many_optional_unions_)) {}

        AffixFuzzer18& operator=(
            std::optional<rerun::Collection<rerun::datatypes::AffixFuzzer4>> many_optional_unions_
        ) {
            many_optional_unions = std::move(many_optional_unions_);
            return *this;
        }
    };
} // namespace rerun::components

namespace rerun {
    template <typename T>
    struct Loggable;

    /// \private
    template <>
    struct Loggable<components::AffixFuzzer18> {
        static constexpr ComponentDescriptor Descriptor = "rerun.testing.components.AffixFuzzer18";

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype();

        /// Serializes an array of `rerun::components::AffixFuzzer18` into an arrow array.
        static Result<std::shared_ptr<arrow::Array>> to_arrow(
            const components::AffixFuzzer18* instances, size_t num_instances
        );

        /// Fills an arrow array builder with an array of this type.
        static rerun::Error fill_arrow_array_builder(
            arrow::ListBuilder* builder, const components::AffixFuzzer18* elements,
            size_t num_elements
        );
    };
} // namespace rerun