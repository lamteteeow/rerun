var sourcesIndex = JSON.parse('{\
"annotation_context_connections":["",[],["annotation_context_connections.rs"]],\
"annotation_context_rects":["",[],["annotation_context_rects.rs"]],\
"annotation_context_segmentation":["",[],["annotation_context_segmentation.rs"]],\
"arrow3d_simple":["",[],["arrow3d_simple.rs"]],\
"asset3d_out_of_tree":["",[],["asset3d_out_of_tree.rs"]],\
"asset3d_simple":["",[],["asset3d_simple.rs"]],\
"bar_chart":["",[],["bar_chart.rs"]],\
"box2d_simple":["",[],["box2d_simple.rs"]],\
"box3d_batch":["",[],["box3d_batch.rs"]],\
"box3d_simple":["",[],["box3d_simple.rs"]],\
"build_re_types":["",[],["build_re_types.rs"]],\
"clear_recursive":["",[],["clear_recursive.rs"]],\
"clear_simple":["",[],["clear_simple.rs"]],\
"clock":["",[],["main.rs"]],\
"custom_data":["",[],["custom_data.rs"]],\
"custom_space_view":["",[],["color_coordinates_space_view.rs","color_coordinates_view_part_system.rs","main.rs"]],\
"depth_image_3d":["",[],["depth_image_3d.rs"]],\
"depth_image_simple":["",[],["depth_image_simple.rs"]],\
"disconnected_space":["",[],["disconnected_space.rs"]],\
"dna":["",[],["main.rs"]],\
"extend_viewer_ui":["",[],["main.rs"]],\
"image_simple":["",[],["image_simple.rs"]],\
"line_segments2d_simple":["",[],["line_segments2d_simple.rs"]],\
"line_segments3d_simple":["",[],["line_segments3d_simple.rs"]],\
"line_strip2d_batch":["",[],["line_strip2d_batch.rs"]],\
"line_strip2d_simple":["",[],["line_strip2d_simple.rs"]],\
"line_strip3d_batch":["",[],["line_strip3d_batch.rs"]],\
"line_strip3d_simple":["",[],["line_strip3d_simple.rs"]],\
"manual_indicator":["",[],["manual_indicator.rs"]],\
"mesh3d_indexed":["",[],["mesh3d_indexed.rs"]],\
"mesh3d_partial_updates":["",[],["mesh3d_partial_updates.rs"]],\
"mesh3d_simple":["",[],["mesh3d_simple.rs"]],\
"minimal":["",[],["main.rs"]],\
"minimal_options":["",[],["main.rs"]],\
"minimal_serve":["",[],["main.rs"]],\
"objectron":["",[],["main.rs","objectron.rs"]],\
"pinhole_simple":["",[],["pinhole_simple.rs"]],\
"point2d_random":["",[],["point2d_random.rs"]],\
"point2d_simple":["",[],["point2d_simple.rs"]],\
"point3d_random":["",[],["point3d_random.rs"]],\
"point3d_simple":["",[],["point3d_simple.rs"]],\
"raw_mesh":["",[],["main.rs"]],\
"re_analytics":["",[["native",[],["config.rs","mod.rs","pipeline.rs","sink.rs"]]],["cli.rs","event.rs","lib.rs"]],\
"re_arrow_store":["",[],["arrow_util.rs","lib.rs","polars_util.rs","store.rs","store_arrow.rs","store_dump.rs","store_format.rs","store_gc.rs","store_helpers.rs","store_polars.rs","store_read.rs","store_sanity.rs","store_stats.rs","store_write.rs","test_util.rs"]],\
"re_build_info":["",[],["build_info.rs","crate_version.rs","lib.rs"]],\
"re_build_tools":["",[],["hashing.rs","lib.rs","rebuild_detector.rs"]],\
"re_build_web_viewer":["",[],["lib.rs"]],\
"re_crash_handler":["",[],["lib.rs"]],\
"re_data_source":["",[],["data_source.rs","lib.rs","load_file_contents.rs","load_file_path.rs","web_sockets.rs"]],\
"re_data_store":["",[],["editable_auto_value.rs","entity_properties.rs","entity_tree.rs","instance_path.rs","lib.rs","store_db.rs","versioned_instance_path.rs"]],\
"re_data_ui":["",[],["annotation_context.rs","component.rs","component_path.rs","component_ui_registry.rs","data.rs","entity_path.rs","image.rs","image_meaning.rs","instance_path.rs","item.rs","item_ui.rs","lib.rs","log_msg.rs","pinhole.rs","rotation3d.rs","transform3d.rs"]],\
"re_error":["",[],["lib.rs"]],\
"re_format":["",[],["arrow.rs","lib.rs","time.rs"]],\
"re_int_histogram":["",[],["lib.rs","tree.rs"]],\
"re_log":["",[],["channel_logger.rs","lib.rs","multi_logger.rs","result_extensions.rs","setup.rs"]],\
"re_log_encoding":["",[["decoder",[],["stream.rs"]]],["decoder.rs","encoder.rs","file_sink.rs","lib.rs","stream_rrd_from_http.rs"]],\
"re_log_types":["",[["path",[],["component_path.rs","data_path.rs","entity_path.rs","entity_path_impl.rs","mod.rs","parse_path.rs"]],["time_point",[],["mod.rs","time_int.rs","timeline.rs"]]],["arrow_msg.rs","data_cell.rs","data_row.rs","data_table.rs","data_table_batcher.rs","example_components.rs","hash.rs","index.rs","lib.rs","load_file.rs","serde_field.rs","time.rs","time_range.rs","time_real.rs"]],\
"re_memory":["",[],["accounting_allocator.rs","allocation_tracker.rs","backtrace_native.rs","lib.rs","memory_history.rs","memory_limit.rs","memory_use.rs","ram_warner.rs","util.rs"]],\
"re_query":["",[],["archetype_view.rs","dataframe_util.rs","lib.rs","query.rs","range.rs","util.rs"]],\
"re_renderer":["",[["allocator",[],["cpu_write_gpu_read_belt.rs","gpu_readback_belt.rs","mod.rs","uniform_buffer_fill.rs"]],["draw_phases",[],["mod.rs","outlines.rs","picking_layer.rs","screenshot.rs"]],["importer",[],["gltf.rs","mod.rs","obj.rs"]],["renderer",[],["compositor.rs","debug_overlay.rs","depth_cloud.rs","generic_skybox.rs","lines.rs","mesh_renderer.rs","mod.rs","point_cloud.rs","rectangles.rs","test_triangle.rs"]],["resource_managers",[],["mesh_manager.rs","mod.rs","resource_manager.rs","texture_manager.rs"]],["wgpu_resources",[],["bind_group_layout_pool.rs","bind_group_pool.rs","buffer_pool.rs","dynamic_resource_pool.rs","mod.rs","pipeline_layout_pool.rs","render_pipeline_pool.rs","resource.rs","sampler_pool.rs","shader_module_pool.rs","static_resource_pool.rs","texture_pool.rs"]]],["color.rs","colormap.rs","config.rs","context.rs","debug_label.rs","depth_offset.rs","error_tracker.rs","file_resolver.rs","file_server.rs","file_system.rs","global_bindings.rs","lib.rs","line_strip_builder.rs","mesh.rs","point_cloud_builder.rs","queuable_draw_data.rs","rect.rs","size.rs","texture_info.rs","transform.rs","view_builder.rs","wgpu_buffer_types.rs"]],\
"re_sdk":["",[],["demo_util.rs","global.rs","lib.rs","log_integration.rs","log_sink.rs","recording_stream.rs","web_viewer.rs"]],\
"re_sdk_comms":["",[],["buffered_client.rs","lib.rs","server.rs","tcp_client.rs"]],\
"re_smart_channel":["",[],["lib.rs","receive_set.rs","receiver.rs","sender.rs"]],\
"re_space_view":["",[],["controls.rs","lib.rs","screenshot.rs","space_view_contents.rs","unreachable_transform_reason.rs"]],\
"re_space_view_bar_chart":["",[],["lib.rs","space_view_class.rs","view_part_system.rs"]],\
"re_space_view_spatial":["",[["contexts",[],["annotation_context.rs","depth_offsets.rs","mod.rs","non_interactive_entities.rs","shared_render_builders.rs","transform_context.rs"]],["parts",[],["arrows3d.rs","assets3d.rs","boxes2d.rs","boxes3d.rs","cameras.rs","entity_iterator.rs","images.rs","lines2d.rs","lines3d.rs","meshes.rs","mod.rs","points2d.rs","points3d.rs","spatial_view_part.rs","transform3d_arrows.rs"]]],["eye.rs","heuristics.rs","instance_hash_conversions.rs","lib.rs","mesh_cache.rs","mesh_loader.rs","picking.rs","space_camera_3d.rs","space_view_2d.rs","space_view_3d.rs","ui.rs","ui_2d.rs","ui_3d.rs"]],\
"re_space_view_tensor":["",[],["lib.rs","space_view_class.rs","tensor_dimension_mapper.rs","tensor_slice_to_gpu.rs","view_part_system.rs"]],\
"re_space_view_text_document":["",[],["lib.rs","space_view_class.rs","view_part_system.rs"]],\
"re_space_view_text_log":["",[],["lib.rs","space_view_class.rs","view_part_system.rs"]],\
"re_space_view_time_series":["",[],["lib.rs","space_view_class.rs","view_part_system.rs"]],\
"re_string_interner":["",[],["lib.rs"]],\
"re_tensor_ops":["",[],["dimension_mapping.rs","lib.rs"]],\
"re_time_panel":["",[],["data_density_graph.rs","lib.rs","paint_ticks.rs","time_axis.rs","time_control_ui.rs","time_ranges_ui.rs","time_selection_ui.rs"]],\
"re_tracing":["",[],["lib.rs","server.rs"]],\
"re_tuid":["",[],["lib.rs"]],\
"re_types":["",[["archetypes",[],["annotation_context.rs","arrows3d.rs","arrows3d_ext.rs","asset3d.rs","asset3d_ext.rs","bar_chart.rs","boxes2d.rs","boxes2d_ext.rs","boxes3d.rs","boxes3d_ext.rs","clear.rs","clear_ext.rs","depth_image.rs","depth_image_ext.rs","disconnected_space.rs","image.rs","image_ext.rs","line_strips2d.rs","line_strips3d.rs","mesh3d.rs","mesh3d_ext.rs","mod.rs","pinhole.rs","pinhole_ext.rs","points2d.rs","points3d.rs","segmentation_image.rs","segmentation_image_ext.rs","tensor.rs","tensor_ext.rs","text_document.rs","text_log.rs","time_series_scalar.rs","transform3d.rs","transform3d_ext.rs","view_coordinates.rs","view_coordinates_ext.rs"]],["components",[],["annotation_context.rs","blob.rs","blob_ext.rs","class_id.rs","class_id_ext.rs","clear_is_recursive.rs","color.rs","color_ext.rs","depth_meter.rs","depth_meter_ext.rs","disconnected_space.rs","disconnected_space_ext.rs","draw_order.rs","draw_order_ext.rs","half_sizes2d.rs","half_sizes2d_ext.rs","half_sizes3d.rs","half_sizes3d_ext.rs","instance_key.rs","instance_key_ext.rs","keypoint_id.rs","keypoint_id_ext.rs","line_strip2d.rs","line_strip2d_ext.rs","line_strip3d.rs","line_strip3d_ext.rs","material.rs","material_ext.rs","media_type.rs","media_type_ext.rs","mesh_properties.rs","mesh_properties_ext.rs","mod.rs","out_of_tree_transform3d.rs","pinhole_projection.rs","pinhole_projection_ext.rs","position2d.rs","position2d_ext.rs","position3d.rs","position3d_ext.rs","radius.rs","radius_ext.rs","resolution.rs","rotation3d.rs","rotation3d_ext.rs","scalar.rs","scalar_ext.rs","scalar_scattering.rs","tensor_data.rs","text.rs","text_ext.rs","text_log_level.rs","text_log_level_ext.rs","transform3d.rs","transform3d_ext.rs","vector3d.rs","vector3d_ext.rs","view_coordinates.rs","view_coordinates_ext.rs"]],["datatypes",[],["angle.rs","angle_ext.rs","annotation_info.rs","annotation_info_ext.rs","class_description.rs","class_description_ext.rs","class_description_map_elem.rs","class_description_map_elem_ext.rs","class_id.rs","class_id_ext.rs","float32.rs","keypoint_id.rs","keypoint_id_ext.rs","keypoint_pair.rs","keypoint_pair_ext.rs","mat3x3.rs","mat3x3_ext.rs","mat4x4.rs","material.rs","material_ext.rs","mesh_properties.rs","mesh_properties_ext.rs","mod.rs","quaternion.rs","quaternion_ext.rs","rgba32.rs","rgba32_ext.rs","rotation3d.rs","rotation3d_ext.rs","rotation_axis_angle.rs","rotation_axis_angle_ext.rs","scale3d.rs","scale3d_ext.rs","tensor_buffer.rs","tensor_buffer_ext.rs","tensor_data.rs","tensor_data_ext.rs","tensor_dimension.rs","tensor_dimension_ext.rs","transform3d.rs","transform3d_ext.rs","translation_and_mat3x3.rs","translation_and_mat3x3_ext.rs","translation_rotation_scale3d.rs","translation_rotation_scale3d_ext.rs","utf8.rs","utf8_ext.rs","uvec2d.rs","uvec2d_ext.rs","uvec3d.rs","uvec3d_ext.rs","uvec4d.rs","uvec4d_ext.rs","vec2d.rs","vec2d_ext.rs","vec3d.rs","vec3d_ext.rs","vec4d.rs","vec4d_ext.rs"]],["testing",[["archetypes",[],["affix_fuzzer1.rs","affix_fuzzer2.rs","affix_fuzzer3.rs","affix_fuzzer4.rs","mod.rs"]],["components",[],["affix_fuzzer1.rs","affix_fuzzer10.rs","affix_fuzzer11.rs","affix_fuzzer12.rs","affix_fuzzer13.rs","affix_fuzzer14.rs","affix_fuzzer15.rs","affix_fuzzer16.rs","affix_fuzzer17.rs","affix_fuzzer18.rs","affix_fuzzer19.rs","affix_fuzzer2.rs","affix_fuzzer20.rs","affix_fuzzer21.rs","affix_fuzzer3.rs","affix_fuzzer4.rs","affix_fuzzer5.rs","affix_fuzzer6.rs","affix_fuzzer7.rs","affix_fuzzer8.rs","affix_fuzzer9.rs","mod.rs"]],["datatypes",[],["affix_fuzzer1.rs","affix_fuzzer2.rs","affix_fuzzer20.rs","affix_fuzzer21.rs","affix_fuzzer3.rs","affix_fuzzer3_ext.rs","affix_fuzzer4.rs","affix_fuzzer4_ext.rs","affix_fuzzer5.rs","flattened_scalar.rs","mod.rs","primitive_component.rs","string_component.rs"]]],["mod.rs"]]],["archetype.rs","arrow_buffer.rs","arrow_string.rs","datagen.rs","image.rs","lib.rs","loggable.rs","loggable_batch.rs","result.rs","size_bytes.rs","tensor_data.rs","view_coordinates.rs"]],\
"re_types_builder":["",[["codegen",[["cpp",[],["array_builder.rs","forward_decl.rs","includes.rs","method.rs","mod.rs"]],["docs",[],["mod.rs"]],["rust",[],["api.rs","arrow.rs","deserializer.rs","mod.rs","serializer.rs","util.rs"]]],["common.rs","mod.rs","python.rs"]]],["arrow_registry.rs","lib.rs","objects.rs","reflection.rs","report.rs"]],\
"re_ui":["",[],["command.rs","command_palette.rs","design_tokens.rs","egui_helpers.rs","icons.rs","layout_job_builder.rs","lib.rs","list_item.rs","toasts.rs","toggle_switch.rs"]],\
"re_viewer":["",[["blueprint_components",[],["mod.rs","panel.rs"]],["ui",[["welcome_screen",[],["example_page.rs","mod.rs","welcome_page.rs"]]],["blueprint_panel.rs","memory_panel.rs","mobile_warning_ui.rs","mod.rs","recordings_panel.rs","rerun_menu.rs","selection_history_ui.rs","selection_panel.rs","top_panel.rs"]]],["app.rs","app_blueprint.rs","app_state.rs","background_tasks.rs","env_vars.rs","lib.rs","loading.rs","native.rs","saving.rs","screenshotter.rs","store_hub.rs","viewer_analytics.rs"]],\
"re_viewer_context":["",[["gpu_bridge",[],["colormap.rs","mod.rs","re_renderer_callback.rs","tensor_to_gpu.rs"]],["space_view",[],["auto_spawn_heuristic.rs","dyn_space_view_class.rs","highlights.rs","mod.rs","named_system.rs","space_view_class.rs","space_view_class_placeholder.rs","space_view_class_registry.rs","view_context_system.rs","view_part_system.rs","view_query.rs"]],["tensor",[],["mod.rs","tensor_decode_cache.rs","tensor_stats.rs","tensor_stats_cache.rs"]],["utils",[],["color.rs","mod.rs","text.rs"]]],["annotations.rs","app_options.rs","caches.rs","clipboard.rs","command_sender.rs","component_ui_registry.rs","item.rs","lib.rs","selection_history.rs","selection_state.rs","store_context.rs","time_control.rs","viewer_context.rs"]],\
"re_viewport":["",[["blueprint_components",[],["mod.rs","space_view.rs","viewport.rs"]]],["auto_layout.rs","lib.rs","space_info.rs","space_view.rs","space_view_entity_picker.rs","space_view_heuristics.rs","space_view_highlights.rs","viewport.rs","viewport_blueprint.rs","viewport_blueprint_ui.rs"]],\
"re_web_viewer_server":["",[],["lib.rs"]],\
"re_ws_comms":["",[],["client.rs","lib.rs","server.rs"]],\
"rerun":["",[],["clap.rs","lib.rs","native_viewer.rs","run.rs"]],\
"rerun_bindings":["",[],["arrow.rs","lib.rs","python_bridge.rs"]],\
"rerun_c":["",[],["error.rs","lib.rs","ptr.rs"]],\
"roundtrip_annotation_context":["",[],["main.rs"]],\
"roundtrip_arrows3d":["",[],["main.rs"]],\
"roundtrip_boxes2d":["",[],["main.rs"]],\
"roundtrip_boxes3d":["",[],["main.rs"]],\
"roundtrip_depth_image":["",[],["main.rs"]],\
"roundtrip_disconnected_space":["",[],["main.rs"]],\
"roundtrip_image":["",[],["main.rs"]],\
"roundtrip_line_strips2d":["",[],["main.rs"]],\
"roundtrip_line_strips3d":["",[],["main.rs"]],\
"roundtrip_pinhole":["",[],["main.rs"]],\
"roundtrip_points2d":["",[],["main.rs"]],\
"roundtrip_points3d":["",[],["main.rs"]],\
"roundtrip_segmentation_image":["",[],["main.rs"]],\
"roundtrip_tensor":["",[],["main.rs"]],\
"roundtrip_text_document":["",[],["main.rs"]],\
"roundtrip_text_log":["",[],["main.rs"]],\
"roundtrip_transform3d":["",[],["main.rs"]],\
"roundtrip_view_coordinates":["",[],["main.rs"]],\
"run_wasm":["",[],["main.rs"]],\
"scalar_multiple_plots":["",[],["scalar_multiple_plots.rs"]],\
"scalar_simple":["",[],["scalar_simple.rs"]],\
"segmentation_image_simple":["",[],["segmentation_image_simple.rs"]],\
"template":["",[],["main.rs"]],\
"tensor_one_dim":["",[],["tensor_one_dim.rs"]],\
"tensor_simple":["",[],["tensor_simple.rs"]],\
"test_api":["",[],["main.rs"]],\
"test_image_memory":["",[],["main.rs"]],\
"text_document":["",[],["text_document.rs"]],\
"text_log":["",[],["text_log.rs"]],\
"text_log_integration":["",[],["text_log_integration.rs"]],\
"transform3d_simple":["",[],["transform3d_simple.rs"]],\
"view_coordinates_simple":["",[],["view_coordinates_simple.rs"]]\
}');
createSourceSidebar();