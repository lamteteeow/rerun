// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/store/re_types/definitions/rerun/testing/archetypes/fuzzy.fbs".

#include "affix_fuzzer3.hpp"

#include <rerun/collection_adapter_builtins.hpp>

namespace rerun::archetypes {}

namespace rerun {

    Result<std::vector<ComponentBatch>> AsComponents<archetypes::AffixFuzzer3>::serialize(
        const archetypes::AffixFuzzer3& archetype
    ) {
        using namespace archetypes;
        std::vector<ComponentBatch> cells;
        cells.reserve(19);

        if (archetype.fuzz2001.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2001.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2001",
                    "rerun.testing.components.AffixFuzzer1"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2002.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2002.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2002",
                    "rerun.testing.components.AffixFuzzer2"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2003.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2003.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2003",
                    "rerun.testing.components.AffixFuzzer3"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2004.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2004.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2004",
                    "rerun.testing.components.AffixFuzzer4"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2005.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2005.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2005",
                    "rerun.testing.components.AffixFuzzer5"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2006.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2006.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2006",
                    "rerun.testing.components.AffixFuzzer6"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2007.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2007.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2007",
                    "rerun.testing.components.AffixFuzzer7"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2008.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2008.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2008",
                    "rerun.testing.components.AffixFuzzer8"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2009.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2009.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2009",
                    "rerun.testing.components.AffixFuzzer9"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2010.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2010.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2010",
                    "rerun.testing.components.AffixFuzzer10"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2011.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2011.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2011",
                    "rerun.testing.components.AffixFuzzer11"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2012.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2012.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2012",
                    "rerun.testing.components.AffixFuzzer12"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2013.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2013.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2013",
                    "rerun.testing.components.AffixFuzzer13"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2014.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2014.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2014",
                    "rerun.testing.components.AffixFuzzer14"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2015.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2015.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2015",
                    "rerun.testing.components.AffixFuzzer15"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2016.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2016.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2016",
                    "rerun.testing.components.AffixFuzzer16"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2017.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2017.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2017",
                    "rerun.testing.components.AffixFuzzer17"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        if (archetype.fuzz2018.has_value()) {
            auto result = ComponentBatch::from_loggable(
                archetype.fuzz2018.value(),
                ComponentDescriptor(
                    "rerun.testing.archetypes.AffixFuzzer3",
                    "fuzz2018",
                    "rerun.testing.components.AffixFuzzer18"
                )
            );
            RR_RETURN_NOT_OK(result.error);
            cells.push_back(std::move(result.value));
        }
        {
            auto indicator = AffixFuzzer3::IndicatorComponent();
            auto result = ComponentBatch::from_loggable(indicator);
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }

        return cells;
    }
} // namespace rerun