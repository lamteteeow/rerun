// DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/store/re_types/definitions/rerun/archetypes/text_log.fbs".

#pragma once

#include "../collection.hpp"
#include "../compiler_utils.hpp"
#include "../component_batch.hpp"
#include "../component_descriptor.hpp"
#include "../components/color.hpp"
#include "../components/text.hpp"
#include "../components/text_log_level.hpp"
#include "../indicator_component.hpp"
#include "../result.hpp"

#include <cstdint>
#include <optional>
#include <utility>
#include <vector>

namespace rerun::archetypes {
    /// **Archetype**: A log entry in a text log, comprised of a text body and its log level.
    ///
    /// ## Example
    ///
    /// ### text_log_integration:
    /// ![image](https://static.rerun.io/text_log_integration/9737d0c986325802a9885499d6fcc773b1736488/full.png)
    ///
    /// ```cpp
    /// #include <loguru.hpp>
    /// #include <rerun.hpp>
    ///
    /// void loguru_to_rerun(void* user_data, const loguru::Message& message) {
    ///     // NOTE: `rerun::RecordingStream` is thread-safe.
    ///     const rerun::RecordingStream* rec = reinterpret_cast<const rerun::RecordingStream*>(user_data);
    ///
    ///     rerun::TextLogLevel level;
    ///     if (message.verbosity == loguru::Verbosity_FATAL) {
    ///         level = rerun::TextLogLevel::Critical;
    ///     } else if (message.verbosity == loguru::Verbosity_ERROR) {
    ///         level = rerun::TextLogLevel::Error;
    ///     } else if (message.verbosity == loguru::Verbosity_WARNING) {
    ///         level = rerun::TextLogLevel::Warning;
    ///     } else if (message.verbosity == loguru::Verbosity_INFO) {
    ///         level = rerun::TextLogLevel::Info;
    ///     } else if (message.verbosity == loguru::Verbosity_1) {
    ///         level = rerun::TextLogLevel::Debug;
    ///     } else if (message.verbosity == loguru::Verbosity_2) {
    ///         level = rerun::TextLogLevel::Trace;
    ///     } else {
    ///         level = rerun::TextLogLevel(std::to_string(message.verbosity));
    ///     }
    ///
    ///     rec->log(
    ///         "logs/handler/text_log_integration",
    ///         rerun::TextLog(message.message).with_level(level)
    ///     );
    /// }
    ///
    /// int main() {
    ///     const auto rec = rerun::RecordingStream("rerun_example_text_log_integration");
    ///     rec.spawn().exit_on_failure();
    ///
    ///     // Log a text entry directly:
    ///     rec.log(
    ///         "logs",
    ///         rerun::TextLog("this entry has loglevel TRACE").with_level(rerun::TextLogLevel::Trace)
    ///     );
    ///
    ///     loguru::add_callback(
    ///         "rerun",
    ///         loguru_to_rerun,
    ///         const_cast<void*>(reinterpret_cast<const void*>(&rec)),
    ///         loguru::Verbosity_INFO
    ///     );
    ///
    ///     LOG_F(INFO, "This INFO log got added through the standard logging interface");
    ///
    ///     loguru::remove_callback("rerun"); // we need to do this before `rec` goes out of scope
    /// }
    /// ```
    struct TextLog {
        /// The body of the message.
        rerun::components::Text text;

        /// The verbosity level of the message.
        ///
        /// This can be used to filter the log messages in the Rerun Viewer.
        std::optional<rerun::components::TextLogLevel> level;

        /// Optional color to use for the log line in the Rerun Viewer.
        std::optional<rerun::components::Color> color;

      public:
        static constexpr const char IndicatorComponentName[] = "rerun.components.TextLogIndicator";

        /// Indicator component, used to identify the archetype when converting to a list of components.
        using IndicatorComponent = rerun::components::IndicatorComponent<IndicatorComponentName>;

      public:
        TextLog() = default;
        TextLog(TextLog&& other) = default;

        explicit TextLog(rerun::components::Text _text) : text(std::move(_text)) {}

        /// The verbosity level of the message.
        ///
        /// This can be used to filter the log messages in the Rerun Viewer.
        TextLog with_level(rerun::components::TextLogLevel _level) && {
            level = std::move(_level);
            // See: https://github.com/rerun-io/rerun/issues/4027
            RR_WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }

        /// Optional color to use for the log line in the Rerun Viewer.
        TextLog with_color(rerun::components::Color _color) && {
            color = std::move(_color);
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
    struct AsComponents<archetypes::TextLog> {
        /// Serialize all set component batches.
        static Result<std::vector<ComponentBatch>> serialize(const archetypes::TextLog& archetype);
    };
} // namespace rerun
