// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/store/re_types/definitions/rerun/archetypes/scalar.fbs".

#include "scalar.hpp"

#include "../collection_adapter_builtins.hpp"

namespace rerun::archetypes {}

namespace rerun {

    Result<std::vector<ComponentBatch>> AsComponents<archetypes::Scalar>::serialize(
        const archetypes::Scalar& archetype
    ) {
        using namespace archetypes;
        std::vector<ComponentBatch> cells;
        cells.reserve(2);

        {
            auto result = ComponentBatch::from_loggable(
                archetype.scalar,
                ComponentDescriptor("rerun.archetypes.Scalar", "scalar", "rerun.components.Scalar")
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        {
            auto indicator = Scalar::IndicatorComponent();
            auto result = ComponentBatch::from_loggable(indicator);
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }

        return cells;
    }
} // namespace rerun
