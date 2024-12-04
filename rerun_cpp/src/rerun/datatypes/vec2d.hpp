// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/store/re_types/definitions/rerun/datatypes/vec2d.fbs".

#pragma once

#include "../component_descriptor.hpp"
#include "../result.hpp"

#include <array>
#include <cstdint>
#include <memory>

namespace arrow {
    class Array;
    class DataType;
    class FixedSizeListBuilder;
} // namespace arrow

namespace rerun::datatypes {
    /// **Datatype**: A vector in 2D space.
    struct Vec2D {
        std::array<float, 2> xy;

      public: // START of extensions from vec2d_ext.cpp:
        /// Construct Vec2D from x/y values.
        Vec2D(float x, float y) : xy{x, y} {}

        /// Construct Vec2D from x/y float pointer.
        explicit Vec2D(const float* xy_) : xy{xy_[0], xy_[1]} {}

        float x() const {
            return xy[0];
        }

        float y() const {
            return xy[1];
        }

        // END of extensions from vec2d_ext.cpp, start of generated code:

      public:
        Vec2D() = default;

        Vec2D(std::array<float, 2> xy_) : xy(xy_) {}

        Vec2D& operator=(std::array<float, 2> xy_) {
            xy = xy_;
            return *this;
        }
    };
} // namespace rerun::datatypes

namespace rerun {
    template <typename T>
    struct Loggable;

    /// \private
    template <>
    struct Loggable<datatypes::Vec2D> {
        static constexpr ComponentDescriptor Descriptor = "rerun.datatypes.Vec2D";

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype();

        /// Serializes an array of `rerun::datatypes::Vec2D` into an arrow array.
        static Result<std::shared_ptr<arrow::Array>> to_arrow(
            const datatypes::Vec2D* instances, size_t num_instances
        );

        /// Fills an arrow array builder with an array of this type.
        static rerun::Error fill_arrow_array_builder(
            arrow::FixedSizeListBuilder* builder, const datatypes::Vec2D* elements,
            size_t num_elements
        );
    };
} // namespace rerun
