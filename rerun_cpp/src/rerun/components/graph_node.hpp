// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/store/re_types/definitions/rerun/components/graph_node.fbs".

#pragma once

#include "../component_descriptor.hpp"
#include "../datatypes/utf8.hpp"
#include "../result.hpp"

#include <cstdint>
#include <memory>
#include <string>
#include <utility>

namespace rerun::components {
    /// **Component**: A string-based ID representing a node in a graph.
    struct GraphNode {
        rerun::datatypes::Utf8 id;

      public: // START of extensions from graph_node_ext.cpp:
        /// Create a new graph edge from a c string.
        GraphNode(const char* value_) : id(value_) {}

        // END of extensions from graph_node_ext.cpp, start of generated code:

      public:
        GraphNode() = default;

        GraphNode(rerun::datatypes::Utf8 id_) : id(std::move(id_)) {}

        GraphNode& operator=(rerun::datatypes::Utf8 id_) {
            id = std::move(id_);
            return *this;
        }

        GraphNode(std::string value_) : id(std::move(value_)) {}

        GraphNode& operator=(std::string value_) {
            id = std::move(value_);
            return *this;
        }

        /// Cast to the underlying Utf8 datatype
        operator rerun::datatypes::Utf8() const {
            return id;
        }
    };
} // namespace rerun::components

namespace rerun {
    static_assert(sizeof(rerun::datatypes::Utf8) == sizeof(components::GraphNode));

    /// \private
    template <>
    struct Loggable<components::GraphNode> {
        static constexpr ComponentDescriptor Descriptor = "rerun.components.GraphNode";

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype() {
            return Loggable<rerun::datatypes::Utf8>::arrow_datatype();
        }

        /// Serializes an array of `rerun::components::GraphNode` into an arrow array.
        static Result<std::shared_ptr<arrow::Array>> to_arrow(
            const components::GraphNode* instances, size_t num_instances
        ) {
            if (num_instances == 0) {
                return Loggable<rerun::datatypes::Utf8>::to_arrow(nullptr, 0);
            } else if (instances == nullptr) {
                return rerun::Error(
                    ErrorCode::UnexpectedNullArgument,
                    "Passed array instances is null when num_elements> 0."
                );
            } else {
                return Loggable<rerun::datatypes::Utf8>::to_arrow(&instances->id, num_instances);
            }
        }
    };
} // namespace rerun