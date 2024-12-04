// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/store/re_types/definitions/rerun/archetypes/encoded_image.fbs".

#pragma once

#include "../collection.hpp"
#include "../compiler_utils.hpp"
#include "../component_batch.hpp"
#include "../component_descriptor.hpp"
#include "../components/blob.hpp"
#include "../components/draw_order.hpp"
#include "../components/media_type.hpp"
#include "../components/opacity.hpp"
#include "../indicator_component.hpp"
#include "../result.hpp"

#include <cstdint>
#include <filesystem>
#include <optional>
#include <utility>
#include <vector>

namespace rerun::archetypes {
    /// **Archetype**: An image encoded as e.g. a JPEG or PNG.
    ///
    /// Rerun also supports uncompressed images with the `archetypes::Image`.
    /// For images that refer to video frames see `archetypes::VideoFrameReference`.
    ///
    /// ## Example
    ///
    /// ### encoded_image:
    /// ```cpp
    /// #include <rerun.hpp>
    ///
    /// #include <filesystem>
    /// #include <fstream>
    /// #include <iostream>
    /// #include <vector>
    ///
    /// namespace fs = std::filesystem;
    ///
    /// int main() {
    ///     const auto rec = rerun::RecordingStream("rerun_example_encoded_image");
    ///     rec.spawn().exit_on_failure();
    ///
    ///     fs::path image_filepath = fs::path(__FILE__).parent_path() / "ferris.png";
    ///
    ///     rec.log("image", rerun::EncodedImage::from_file(image_filepath).value_or_throw());
    /// }
    /// ```
    struct EncodedImage {
        /// The encoded content of some image file, e.g. a PNG or JPEG.
        rerun::components::Blob blob;

        /// The Media Type of the asset.
        ///
        /// Supported values:
        /// * `image/jpeg`
        /// * `image/png`
        ///
        /// If omitted, the viewer will try to guess from the data blob.
        /// If it cannot guess, it won't be able to render the asset.
        std::optional<rerun::components::MediaType> media_type;

        /// Opacity of the image, useful for layering several images.
        ///
        /// Defaults to 1.0 (fully opaque).
        std::optional<rerun::components::Opacity> opacity;

        /// An optional floating point value that specifies the 2D drawing order.
        ///
        /// Objects with higher values are drawn on top of those with lower values.
        std::optional<rerun::components::DrawOrder> draw_order;

      public:
        static constexpr const char IndicatorComponentName[] =
            "rerun.components.EncodedImageIndicator";

        /// Indicator component, used to identify the archetype when converting to a list of components.
        using IndicatorComponent = rerun::components::IndicatorComponent<IndicatorComponentName>;

      public: // START of extensions from encoded_image_ext.cpp:
        /// Create a new `EncodedImage` from the contents of a file on disk, e.g. a PNG or JPEG.
        static Result<EncodedImage> from_file(const std::filesystem::path& filepath);

        /// Create a new `EncodedImage` from the contents of an image file, like a PNG or JPEG.
        ///
        /// If no `MediaType` is specified, the Rerun Viewer will try to guess one from the data
        /// at render-time. If it can't, rendering will fail with an error.
        static EncodedImage from_bytes(
            rerun::Collection<uint8_t> image_contents,
            std::optional<rerun::components::MediaType> media_type = {}
        ) {
            EncodedImage image;
            image.blob = image_contents;
            image.media_type = media_type;
            return image;
        }

        // END of extensions from encoded_image_ext.cpp, start of generated code:

      public:
        EncodedImage() = default;
        EncodedImage(EncodedImage&& other) = default;

        /// The Media Type of the asset.
        ///
        /// Supported values:
        /// * `image/jpeg`
        /// * `image/png`
        ///
        /// If omitted, the viewer will try to guess from the data blob.
        /// If it cannot guess, it won't be able to render the asset.
        EncodedImage with_media_type(rerun::components::MediaType _media_type) && {
            media_type = std::move(_media_type);
            // See: https://github.com/rerun-io/rerun/issues/4027
            RR_WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }

        /// Opacity of the image, useful for layering several images.
        ///
        /// Defaults to 1.0 (fully opaque).
        EncodedImage with_opacity(rerun::components::Opacity _opacity) && {
            opacity = std::move(_opacity);
            // See: https://github.com/rerun-io/rerun/issues/4027
            RR_WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }

        /// An optional floating point value that specifies the 2D drawing order.
        ///
        /// Objects with higher values are drawn on top of those with lower values.
        EncodedImage with_draw_order(rerun::components::DrawOrder _draw_order) && {
            draw_order = std::move(_draw_order);
            // See: https://github.com/rerun-io/rerun/issues/4027
            RR_WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }
    };

} // namespace rerun::archetypes

namespace rerun {
    /// \private
    template <typename T>
    struct AsComponents;

    /// \private
    template <>
    struct AsComponents<archetypes::EncodedImage> {
        /// Serialize all set component batches.
        static Result<std::vector<ComponentBatch>> serialize(
            const archetypes::EncodedImage& archetype
        );
    };
} // namespace rerun
