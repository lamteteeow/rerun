// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/store/re_types/definitions/rerun/blueprint/archetypes/tensor_scalar_mapping.fbs".

#pragma once

#include "../../collection.hpp"
#include "../../compiler_utils.hpp"
#include "../../component_batch.hpp"
#include "../../component_descriptor.hpp"
#include "../../components/colormap.hpp"
#include "../../components/gamma_correction.hpp"
#include "../../components/magnification_filter.hpp"
#include "../../indicator_component.hpp"
#include "../../result.hpp"

#include <cstdint>
#include <optional>
#include <utility>
#include <vector>

namespace rerun::blueprint::archetypes {
    /// **Archetype**: Configures how tensor scalars are mapped to color.
    struct TensorScalarMapping {
        /// Filter used when zooming in on the tensor.
        ///
        /// Note that the filter is applied to the scalar values *before* they are mapped to color.
        std::optional<rerun::components::MagnificationFilter> mag_filter;

        /// How scalar values map to colors.
        std::optional<rerun::components::Colormap> colormap;

        /// Gamma exponent applied to normalized values before mapping to color.
        ///
        /// Raises the normalized values to the power of this value before mapping to color.
        /// Acts like an inverse brightness. Defaults to 1.0.
        ///
        /// The final value for display is set as:
        /// `colormap( ((value - data_display_range.min) / (data_display_range.max - data_display_range.min)) ** gamma )`
        std::optional<rerun::components::GammaCorrection> gamma;

      public:
        static constexpr const char IndicatorComponentName[] =
            "rerun.blueprint.components.TensorScalarMappingIndicator";

        /// Indicator component, used to identify the archetype when converting to a list of components.
        using IndicatorComponent = rerun::components::IndicatorComponent<IndicatorComponentName>;

      public:
        TensorScalarMapping() = default;
        TensorScalarMapping(TensorScalarMapping&& other) = default;

        /// Filter used when zooming in on the tensor.
        ///
        /// Note that the filter is applied to the scalar values *before* they are mapped to color.
        TensorScalarMapping with_mag_filter(rerun::components::MagnificationFilter _mag_filter) && {
            mag_filter = std::move(_mag_filter);
            // See: https://github.com/rerun-io/rerun/issues/4027
            RR_WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }

        /// How scalar values map to colors.
        TensorScalarMapping with_colormap(rerun::components::Colormap _colormap) && {
            colormap = std::move(_colormap);
            // See: https://github.com/rerun-io/rerun/issues/4027
            RR_WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }

        /// Gamma exponent applied to normalized values before mapping to color.
        ///
        /// Raises the normalized values to the power of this value before mapping to color.
        /// Acts like an inverse brightness. Defaults to 1.0.
        ///
        /// The final value for display is set as:
        /// `colormap( ((value - data_display_range.min) / (data_display_range.max - data_display_range.min)) ** gamma )`
        TensorScalarMapping with_gamma(rerun::components::GammaCorrection _gamma) && {
            gamma = std::move(_gamma);
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
    struct AsComponents<blueprint::archetypes::TensorScalarMapping> {
        /// Serialize all set component batches.
        static Result<std::vector<ComponentBatch>> serialize(
            const blueprint::archetypes::TensorScalarMapping& archetype
        );
    };
} // namespace rerun
