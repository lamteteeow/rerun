impl crate::DataUi for re_log_types::StoreId {
    fn data_ui(
        &self,
        ctx: &re_viewer_context::ViewerContext<'_>,
        ui: &mut egui::Ui,
        verbosity: re_viewer_context::UiVerbosity,
        query: &re_data_store::LatestAtQuery,
        store: &re_data_store::DataStore,
    ) {
        if let Some(entity_db) = ctx.store_context.bundle.get(self) {
            entity_db.data_ui(ctx, ui, verbosity, query, store);
        } else {
            ui.label(format!("{} ID {} (not found)", self.kind, self.id));
        }
    }
}
