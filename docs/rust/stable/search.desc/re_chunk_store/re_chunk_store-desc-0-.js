searchState.loadedDescShard("re_chunk_store", 0, "The Rerun chunk store, implemented on top of Apache Arrow …\nReports which <code>Chunk</code>s were merged into a new <code>Chunk</code> during a …\nA complete chunk store: covers all timelines, all …\nStats about a collection of chunks.\nDescribes an atomic change in the Rerun <code>ChunkStore</code>: a …\nIs it an addition or a deletion?\nThe atomic unit of change in the Rerun <code>ChunkStore</code>.\nIncremented on each edit.\nA ref-counted, inner-mutable handle to a <code>ChunkStore</code>.\nA <code>ChunkStoreSubscriber</code> subscribes to atomic changes from …\nDescribes a column selection to return as part of a query.\nDescribes a data/component column, such as <code>Position3D</code>.\nSelect a component based on its <code>EntityPath</code> and …\nTry to drop <em>at least</em> the given fraction.\nContains the error value\nGC Everything that isn’t protected.\nFill null values using global-scope latest-at semantics.\nNo sparse filling. Nulls stay nulls.\nContains the success value\nError when parsing configuration from environment.\nA <code>ChunkStoreSubscriber</code> that is instantiated for each …\nDescribes a complete query for Rerun’s dataframe API.\nSpecifies how null values should be filled in the returned …\nDescribes a time column, such as <code>log_time</code>.\nSelect a time column.\nThe view contents specify which subset of the database …\nOptional name of the field within <code>Archetype</code> associated …\nOptional name of the <code>Archetype</code> associated with this data.\nWorkaround for downcasting support, simply return <code>self</code>:\nWorkaround for downcasting support, simply return <code>self</code>:\nThe chunk that was added or removed.\nAll <code>ChunkId</code>s currently in the store, indexed by the …\nWhat is the threshold, in bytes, after which a <code>Chunk</code> …\nWhat is the threshold, in rows, after which a <code>Chunk</code> cannot …\nWhat is the threshold, in rows, after which a <code>Chunk</code> cannot …\nReports which <code>Chunk</code>s were merged into a new <code>Chunk</code> during a …\nSemantic name associated with this data.\nSemantic name associated with this data.\nThe configuration of the chunk store (e.g. compaction …\nAll the APIs used specifically for <code>re_dataframe</code>.\nThe Arrow datatype of the column.\nWhat actually changed?\nIf <code>true</code> (the default), the store will emit events when its …\nThe path of the entity.\nThe path of the entity.\nMonotonically increasing ID of the event.\nMonotonically increasing ID for store events.\nThe index used to filter out <em>rows</em> from the view contents.\nThe range of index values used to filter out <em>rows</em> from the …\nThe specific index values used to filter out <em>rows</em> from the …\nThe component column used to filter out <em>rows</em> from the view …\nReturns the argument unchanged.\nMonotonically increasing ID for GCs.\nWhether the <code>view_contents</code> should ignore columns …\nWhether the <code>view_contents</code> should ignore semantically empty …\nWhether the <code>view_contents</code> should ignore columns …\nMonotonically increasing ID for insertions.\nCalls <code>U::from(self)</code>.\nWhether this column represents an indicator component.\nWhether this column represents an indicator component.\nWhether this column contains either no data or only …\nWhether this column contains either no data or only …\nWhether this column represents static data.\nWhether this column represents static data.\nWhether this column represents a <code>Clear</code>-related components.\nWhether this column represents a <code>Clear</code>-related component.\nAddition or deletion?\nArbitrary name for the subscriber.\nArbitrary name for the subscriber.\nThe new chunk that was created as the result of the …\nThe number of chunks this is the stats for.\nHow many <em>component batches</em> (“cells”).\nNumber of rows.\nThe core of this trait: get notified of changes happening …\nGet notified of changes happening in a <code>ChunkStore</code>, see …\nHow many component revisions to preserve on each timeline.\nDo not remove any data within these time ranges.\nMonotonically increasing ID for queries.\nThe specific <em>columns</em> to sample from the final view …\nSpecifies how null values should be filled in the returned …\nThe chunks that were merged into a new chunk.\nStatic data. Never garbage collected.\nAccumulated size statitistics for all static <code>Chunk</code>s …\nThe Arrow datatype of the stored column.\nWhat was the store’s generation when it sent that event?\nWhich <code>ChunkStore</code> sent this event?\nWhat target threshold should the GC try to meet.\nAll temporal <code>ChunkId</code>s for all entities on all timelines, …\nAll temporal <code>ChunkId</code>s for all entities on all timelines, …\nAccumulated size statitistics for all temporal <code>Chunk</code>s …\nHow long the garbage collection in allowed to run for.\nThe timeline this column is associated with.\nThe name of the timeline.\nIncludes everything: arrow payloads, timelines, rowids, …\nKeeps track of the <em>latest</em> datatype information for all …\nThe specific index values used to sample <em>rows</em> from the …\nThe subset of the database that the query will run on: a …\nDescribes a column selection to return as part of a query.\nDescribes a data/component column, such as <code>Position3D</code>.\nSelect a component based on its <code>EntityPath</code> and …\nFill null values using global-scope latest-at semantics.\nNo sparse filling. Nulls stay nulls.\nDescribes a complete query for Rerun’s dataframe API.\nSpecifies how null values should be filled in the returned …\nDescribes a time column, such as <code>log_time</code>.\nSelect a time column.\nThe view contents specify which subset of the database …\nOptional name of the field within <code>Archetype</code> associated …\nOptional name of the <code>Archetype</code> associated with this data.\nSemantic name associated with this data.\nSemantic name associated with this data.\nThe Arrow datatype of the column.\nThe path of the entity.\nThe path of the entity.\nThe index used to filter out <em>rows</em> from the view contents.\nThe range of index values used to filter out <em>rows</em> from the …\nThe specific index values used to filter out <em>rows</em> from the …\nThe component column used to filter out <em>rows</em> from the view …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nWhether the <code>view_contents</code> should ignore columns …\nWhether the <code>view_contents</code> should ignore semantically empty …\nWhether the <code>view_contents</code> should ignore columns …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether this column represents an indicator component.\nWhether this column contains either no data or only …\nWhether this column represents static data.\nWhether this column represents a <code>Clear</code>-related components.\nSelect a component of a given type, based on its  …\nSelect a component based on its <code>EntityPath</code> and …\nThe specific <em>columns</em> to sample from the final view …\nSpecifies how null values should be filled in the returned …\nThe Arrow datatype of the stored column.\nThe timeline this column is associated with.\nThe name of the timeline.\nThe specific index values used to sample <em>rows</em> from the …\nThe subset of the database that the query will run on: a …\nReports which <code>Chunk</code>s were merged into a new <code>Chunk</code> during a …\nDescribes an atomic change in the Rerun <code>ChunkStore</code>: a …\nIs it an addition or a deletion?\nThe atomic unit of change in the Rerun <code>ChunkStore</code>.\nThe chunk that was added or removed.\nReports which <code>Chunk</code>s were merged into a new <code>Chunk</code> during a …\n<code>-1</code> for deletions, <code>+1</code> for additions.\nWhat actually changed?\nMonotonically increasing ID of the event.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAddition or deletion?\nThe new chunk that was created as the result of the …\nThe chunks that were merged into a new chunk.\nWhat was the store’s generation when it sent that event?\nWhich <code>ChunkStore</code> sent this event?\nTry to drop <em>at least</em> the given fraction.\nGC Everything that isn’t protected.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf true, we cannot remove this chunk.\nHow many component revisions to preserve on each timeline.\nDo not remove any data within these time ranges.\nWhat target threshold should the GC try to meet.\nHow long the garbage collection in allowed to run for.\nStats about a collection of chunks.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe number of chunks this is the stats for.\nHow many <em>component batches</em> (“cells”).\nNumber of rows.\nIncludes everything: arrow payloads, timelines, rowids, …\nAll features disabled.\n<code>Self::DEFAULT</code>, but with changelog disabled.\n<code>Self::DEFAULT</code>, but with compaction entirely disabled.\nA complete chunk store: covers all timelines, all …\nIncremented on each edit.\nA ref-counted, inner-mutable handle to a <code>ChunkStore</code>.\nInternal state that needs to be maintained in order to …\nDefault configuration, applicable to most use cases, …\nEnvironment variable to configure <code>Self::chunk_max_bytes</code>.\nEnvironment variable to configure <code>Self::chunk_max_rows</code>.\nEnvironment variable to configure …\nEnvironment variable to configure <code>Self::enable_changelog</code>.\nRetrieve all <code>ComponentName</code>s in the store.\nRetrieve all the <code>ComponentName</code>s that have been written to …\nRetrieve all the <code>ComponentName</code>s that have been written to …\nRetrieve all the <code>ComponentName</code>s that have been written to …\nRetrieve all the <code>ComponentName</code>s that have been written to …\nRetrieve all <code>ComponentName</code>s in the store.\nRetrieve all <code>EntityPath</code>s in the store.\nRetrieve all <code>EntityPath</code>s in the store.\nRetrieve all <code>Timeline</code>s in the store.\nRetrieve all <code>Timeline</code>s in the store.\nReturns a copy of <code>self</code>, overriding existing fields with …\nGet a chunk based on its ID.\nAll <code>ChunkId</code>s currently in the store, indexed by the …\nWhat is the threshold, in bytes, after which a <code>Chunk</code> …\nWhat is the threshold, in rows, after which a <code>Chunk</code> cannot …\nWhat is the threshold, in rows, after which a <code>Chunk</code> cannot …\nSee <code>ChunkStoreConfig</code> for more information about …\nThe configuration of the chunk store (e.g. compaction …\nUnconditionally drops all the data for a given <code>entity_path</code>.\nDrop all events that are in the given range on the given …\nIf <code>true</code> (the default), the store will emit events when its …\nCheck whether an entity has a static component or a …\nCheck whether an entity has a static component or a …\nCheck whether an entity has any static data or any …\nCheck whether an entity has any data on a specific …\nCheck whether an entity has a specific static component.\nCheck whether an entity has any static data.\nCheck whether an entity has a temporal component on any …\nCheck whether an entity has a temporal component on a …\nCheck whether an entity has any temporal data.\nCheck whether an entity has any temporal data.\nFind the earliest time at which something was logged for a …\nStats about all the chunks that has data for an entity on …\nStats about all chunks with static data for an entity.\nReturns the min and max times at which data was logged for …\nMonotonically increasing ID for store events.\nFor each <code>EntityPath</code>, <code>Timeline</code>, <code>Component</code> find the N latest …\nFinds the most appropriate candidate for compaction.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new <code>ChunkStoreConfig</code> using the default values, …\nInstantiate a new <code>ChunkStore</code> with the given …\nInstantiate a new <code>ChunkStore</code> with the given …\nTriggers a garbage collection according to the desired …\nMonotonically increasing ID for GCs.\nReturn the current <code>ChunkStoreGeneration</code>. This can be used …\nInstantiate a new <code>ChunkStore</code> with the given …\nInserts a <code>Chunk</code> in the store.\nMonotonically increasing ID for insertions.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether this column represents an indicator component.\nWhether this column contains either no data or only …\nWhether this column contains either no data or only …\nWhether this column represents static data.\nWhether this column represents a <code>Clear</code>-related component.\nIterate over all chunks in the store, in ascending <code>ChunkId</code> …\nReturns the most-relevant chunk(s) for the given …\nReturns the most-relevant <em>temporal</em> chunk(s) for the given …\nLookup the <code>ColumnMetadata</code> for a specific <code>EntityPath</code> and …\nLookup the <em>latest</em> arrow <code>Arrow2DataType</code> used by a specific …\nKeeps track of the longest interval being currently stored …\nInstantiate a new empty <code>ChunkStore</code> with the given …\nInstantiate a new empty <code>ChunkStore</code> with the given …\nGet the number of chunks.\nReturns the number of static events logged for an entity …\nReturns the number of temporal events logged for an entity …\nReturns the number of temporal events logged for an entity …\nCalled by <code>ChunkStore</code>’s mutating methods to notify …\n<code>ChunkId</code>s organized by their <em>most specific</em> end time.\n<code>ChunkId</code>s organized by their <em>most specific</em> start time.\nMonotonically increasing ID for queries.\nReturns the most-relevant chunk(s) for the given <code>RangeQuery</code>…\nReturns the most-relevant <em>temporal</em> chunk(s) for the given …\nRegisters a <code>PerStoreChunkSubscriber</code> type so it gets …\nRegisters a <code>ChunkStoreSubscriber</code> so it gets automatically …\nSurgically removes a <em>temporal</em> <code>ChunkId</code> from all indices.\nSurgically removes a set of <em>temporal</em> <code>ChunkId</code>s from all …\nGiven a <code>ComponentColumnSelector</code>, returns the corresponding …\nGiven a set of <code>ColumnSelector</code>s, returns the corresponding …\nGiven a <code>TimeColumnSelector</code>, returns the corresponding …\nReturns the full schema of the store.\nReturns the filtered schema for the given <code>QueryExpression</code>.\nStatic data. Never garbage collected.\nAccumulated size statitistics for all static <code>Chunk</code>s …\nAll temporal <code>ChunkId</code>s for all entities on all timelines, …\nAll temporal <code>ChunkId</code>s for all entities on all timelines, …\nAccumulated size statitistics for all temporal <code>Chunk</code>s …\nReturns the min and max times at which data was logged on …\nKeeps track of the <em>latest</em> datatype information for all …\nPasses a reference to the downcasted per-store subscriber …\nPasses a mutable reference to the downcasted per-store …\nPasses a reference to the downcasted per-store subscriber …\nPasses a reference to the downcasted subscriber to the …\nPasses a mutable reference to the downcasted subscriber to …\nPasses a reference to the downcasted subscriber to the …\nA <code>ChunkStoreSubscriber</code> subscribes to atomic changes from …\nA <code>ChunkStoreSubscriber</code> that is instantiated for each …\nUtility that makes a <code>PerStoreChunkSubscriber</code> a …\nAll registered <code>ChunkStoreSubscriber</code>s.\nWorkaround for downcasting support, simply return <code>self</code>:\nWorkaround for downcasting support, simply return <code>self</code>:\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nArbitrary name for the subscriber.\nArbitrary name for the subscriber.\nThe core of this trait: get notified of changes happening …\nGet notified of changes happening in a <code>ChunkStore</code>, see …")