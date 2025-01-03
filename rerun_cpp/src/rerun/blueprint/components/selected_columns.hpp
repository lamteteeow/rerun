// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/store/re_types/definitions/rerun/blueprint/components/selected_columns.fbs".

#pragma once

#include "../../blueprint/datatypes/selected_columns.hpp"
#include "../../component_descriptor.hpp"
#include "../../result.hpp"

#include <cstdint>
#include <memory>
#include <utility>

namespace rerun::blueprint::components {
    /// **Component**: Describe a component column to be selected in the dataframe view.
    struct SelectedColumns {
        rerun::blueprint::datatypes::SelectedColumns selected_columns;

      public:
        SelectedColumns() = default;

        SelectedColumns(rerun::blueprint::datatypes::SelectedColumns selected_columns_)
            : selected_columns(std::move(selected_columns_)) {}

        SelectedColumns& operator=(rerun::blueprint::datatypes::SelectedColumns selected_columns_) {
            selected_columns = std::move(selected_columns_);
            return *this;
        }

        /// Cast to the underlying SelectedColumns datatype
        operator rerun::blueprint::datatypes::SelectedColumns() const {
            return selected_columns;
        }
    };
} // namespace rerun::blueprint::components

namespace rerun {
    static_assert(
        sizeof(rerun::blueprint::datatypes::SelectedColumns) ==
        sizeof(blueprint::components::SelectedColumns)
    );

    /// \private
    template <>
    struct Loggable<blueprint::components::SelectedColumns> {
        static constexpr ComponentDescriptor Descriptor =
            "rerun.blueprint.components.SelectedColumns";

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype() {
            return Loggable<rerun::blueprint::datatypes::SelectedColumns>::arrow_datatype();
        }

        /// Serializes an array of `rerun::blueprint:: components::SelectedColumns` into an arrow array.
        static Result<std::shared_ptr<arrow::Array>> to_arrow(
            const blueprint::components::SelectedColumns* instances, size_t num_instances
        ) {
            if (num_instances == 0) {
                return Loggable<rerun::blueprint::datatypes::SelectedColumns>::to_arrow(nullptr, 0);
            } else if (instances == nullptr) {
                return rerun::Error(
                    ErrorCode::UnexpectedNullArgument,
                    "Passed array instances is null when num_elements> 0."
                );
            } else {
                return Loggable<rerun::blueprint::datatypes::SelectedColumns>::to_arrow(
                    &instances->selected_columns,
                    num_instances
                );
            }
        }
    };
} // namespace rerun