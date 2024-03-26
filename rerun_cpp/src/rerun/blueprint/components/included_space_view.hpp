// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/blueprint/components/included_space_view.fbs".

#pragma once

#include "../../datatypes/uuid.hpp"
#include "../../result.hpp"

#include <array>
#include <cstdint>
#include <memory>

namespace rerun::blueprint::components {
    /// **Component**: The unique id of a space view, used to refer to views in containers.
    struct IncludedSpaceView {
        rerun::datatypes::Uuid space_view_id;

      public:
        IncludedSpaceView() = default;

        IncludedSpaceView(rerun::datatypes::Uuid space_view_id_) : space_view_id(space_view_id_) {}

        IncludedSpaceView& operator=(rerun::datatypes::Uuid space_view_id_) {
            space_view_id = space_view_id_;
            return *this;
        }

        IncludedSpaceView(std::array<uint8_t, 16> bytes_) : space_view_id(bytes_) {}

        IncludedSpaceView& operator=(std::array<uint8_t, 16> bytes_) {
            space_view_id = bytes_;
            return *this;
        }

        /// Cast to the underlying Uuid datatype
        operator rerun::datatypes::Uuid() const {
            return space_view_id;
        }
    };
} // namespace rerun::blueprint::components

namespace rerun {
    static_assert(
        sizeof(rerun::datatypes::Uuid) == sizeof(blueprint::components::IncludedSpaceView)
    );

    /// \private
    template <>
    struct Loggable<blueprint::components::IncludedSpaceView> {
        static constexpr const char Name[] = "rerun.blueprint.components.IncludedSpaceView";

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype() {
            return Loggable<rerun::datatypes::Uuid>::arrow_datatype();
        }

        /// Serializes an array of `rerun::blueprint:: components::IncludedSpaceView` into an arrow array.
        static Result<std::shared_ptr<arrow::Array>> to_arrow(
            const blueprint::components::IncludedSpaceView* instances, size_t num_instances
        ) {
            return Loggable<rerun::datatypes::Uuid>::to_arrow(
                &instances->space_view_id,
                num_instances
            );
        }
    };
} // namespace rerun
