// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/store/re_types/definitions/rerun/blueprint/archetypes/scalar_axis.fbs".

#include "scalar_axis.hpp"

#include "../../collection_adapter_builtins.hpp"

namespace rerun::blueprint::archetypes {}

namespace rerun {

    Result<std::vector<ComponentBatch>> AsComponents<blueprint::archetypes::ScalarAxis>::serialize(
        const blueprint::archetypes::ScalarAxis& archetype
    ) {
        using namespace blueprint::archetypes;
        std::vector<ComponentBatch> cells;
        cells.reserve(3);

        if (archetype.range.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.range.value(),
                ComponentDescriptor(
                    "rerun.blueprint.archetypes.ScalarAxis",
                    "range",
                    "rerun.components.Range1D"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.zoom_lock.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.zoom_lock.value(),
                ComponentDescriptor(
                    "rerun.blueprint.archetypes.ScalarAxis",
                    "zoom_lock",
                    "rerun.blueprint.components.LockRangeDuringZoom"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        {
            auto indicator = ScalarAxis::IndicatorComponent();
            auto result = ComponentBatch::from_loggable(indicator);
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }

        return cells;
    }
} // namespace rerun
