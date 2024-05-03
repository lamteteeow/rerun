// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/blueprint/archetypes/visual_bounds.fbs".

#pragma once

#include "../../collection.hpp"
#include "../../compiler_utils.hpp"
#include "../../components/range2d.hpp"
#include "../../data_cell.hpp"
#include "../../indicator_component.hpp"
#include "../../result.hpp"

#include <cstdint>
#include <optional>
#include <utility>
#include <vector>

namespace rerun::blueprint::archetypes {
    /// **Archetype**: Controls the visual bounds of a 2D space view.
    struct VisualBounds {
        /// The visible parts of a 2D space view, in the coordinate space of the scene.
        ///
        /// Everything within these bounds are guaranteed to be visible.
        /// Somethings outside of these bounds may also be visible due to letterboxing.
        std::optional<rerun::components::Range2D> range2d;

      public:
        static constexpr const char IndicatorComponentName[] =
            "rerun.blueprint.components.VisualBoundsIndicator";

        /// Indicator component, used to identify the archetype when converting to a list of components.
        using IndicatorComponent = rerun::components::IndicatorComponent<IndicatorComponentName>;

      public:
        VisualBounds() = default;
        VisualBounds(VisualBounds&& other) = default;

        /// The visible parts of a 2D space view, in the coordinate space of the scene.
        ///
        /// Everything within these bounds are guaranteed to be visible.
        /// Somethings outside of these bounds may also be visible due to letterboxing.
        VisualBounds with_range2d(rerun::components::Range2D _range2d) && {
            range2d = std::move(_range2d);
            // See: https://github.com/rerun-io/rerun/issues/4027
            RR_WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }
    };

} // namespace rerun::blueprint::archetypes

namespace rerun {
    /// \private
    template <typename T>
    struct AsComponents;

    /// \private
    template <>
    struct AsComponents<blueprint::archetypes::VisualBounds> {
        /// Serialize all set component batches.
        static Result<std::vector<DataCell>> serialize(
            const blueprint::archetypes::VisualBounds& archetype
        );
    };
} // namespace rerun