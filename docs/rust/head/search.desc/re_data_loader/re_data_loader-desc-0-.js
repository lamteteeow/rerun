searchState.loadedDescShard("re_data_loader", 0, "Handles loading of Rerun data from file using data loader …\nLoads data from any supported file or in-memory contents …\nKeeps track of all builtin <code>DataLoader</code>s.\nKeeps track of all custom <code>DataLoader</code>s.\nA <code>DataLoader</code> loads data from a file path and/or a file’s …\nErrors that might happen when loading data through a …\nRecommended settings for the <code>DataLoader</code>.\nRecursively oads entire directories, using the appropriate …\nWhen an external <code>crate::DataLoader</code> is asked to load some …\nTo register a new external data loader, simply add an …\nA <code>crate::DataLoader</code> that forwards the path to load to all …\nWhat <code>DataLoader</code>s load.\nLoads data from any <code>rrd</code> file or in-memory contents.\nExperimental video support!\nThe recommended <code>re_log_types::ApplicationId</code> to log the …\nReturns the name of the <code>DataLoader</code> that generated this …\nWhat should the logged entity paths be prefixed with?\nEmpty string if no extension.\nWhether <code>SetStoreInfo</code>s should be sent, regardless of the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPack the data into a <code>LogMsg</code>.\nIs this a supported file extension by any of our builtin …\nIterator over all registered external <code>crate::DataLoader</code>s.\nIterator over all registered <code>DataLoader</code>s.\nLoads the given <code>contents</code> using all <code>crate::DataLoader</code>s …\nLoads data from in-memory file contents and sends it to <code>tx</code>.\nLoads the given <code>path</code> using all <code>crate::DataLoader</code>s …\nLoads data from a file on the local filesystem and sends …\nName of the <code>DataLoader</code>.\nThe <code>re_log_types::ApplicationId</code> that is currently opened …\nThe <code>re_log_types::StoreId</code> that is currently opened in the …\nRegister a custom <code>DataLoader</code>.\nThe recommended <code>re_log_types::StoreId</code> to log the data to, …\nAll file extension supported by our builtin <code>DataLoader</code>s.\nAt what time(s) should the data be logged to?\nGenerates CLI flags from these settings, for external data …\nLoads the data at <code>path</code> using all available …\nLoads the given <code>contents</code> using all <code>crate::DataLoader</code>s …\nLoads the given <code>path</code> using all <code>crate::DataLoader</code>s …\nPrepares an adequate <code>re_log_types::StoreInfo</code> <code>LogMsg</code> given …\nForwards the data in <code>rx_loader</code> to <code>tx</code>, taking care of …\nLoads data from any supported file or in-memory contents …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRecursively oads entire directories, using the appropriate …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nWhen an external <code>crate::DataLoader</code> is asked to load some …\nTo register a new external data loader, simply add an …\nKeeps track of the paths all external executable …\nA <code>crate::DataLoader</code> that forwards the path to load to all …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nIterator over all registered external <code>crate::DataLoader</code>s.\nLoads data from any <code>rrd</code> file or in-memory contents.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")