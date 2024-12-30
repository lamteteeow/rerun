(function() {var type_impls = {
"re_types_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GenericIndicatorComponent%3CA%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#243\">source</a><a href=\"#impl-Clone-for-GenericIndicatorComponent%3CA%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"re_types_core/archetype/trait.Archetype.html\" title=\"trait re_types_core::archetype::Archetype\">Archetype</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"re_types_core/archetype/struct.GenericIndicatorComponent.html\" title=\"struct re_types_core::archetype::GenericIndicatorComponent\">GenericIndicatorComponent</a>&lt;A&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#243\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"re_types_core/archetype/struct.GenericIndicatorComponent.html\" title=\"struct re_types_core::archetype::GenericIndicatorComponent\">GenericIndicatorComponent</a>&lt;A&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","re_types_core::archetypes::clear::ClearIndicator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ComponentBatch-for-GenericIndicatorComponent%3CA%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#280-287\">source</a><a href=\"#impl-ComponentBatch-for-GenericIndicatorComponent%3CA%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"re_types_core/archetype/trait.Archetype.html\" title=\"trait re_types_core::archetype::Archetype\">Archetype</a>&gt; <a class=\"trait\" href=\"re_types_core/loggable_batch/trait.ComponentBatch.html\" title=\"trait re_types_core::loggable_batch::ComponentBatch\">ComponentBatch</a> for <a class=\"struct\" href=\"re_types_core/archetype/struct.GenericIndicatorComponent.html\" title=\"struct re_types_core::archetype::GenericIndicatorComponent\">GenericIndicatorComponent</a>&lt;A&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.descriptor\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#282-286\">source</a><a href=\"#method.descriptor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"re_types_core/loggable_batch/trait.ComponentBatch.html#tymethod.descriptor\" class=\"fn\">descriptor</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, <a class=\"struct\" href=\"re_types_core/component_descriptor/struct.ComponentDescriptor.html\" title=\"struct re_types_core::component_descriptor::ComponentDescriptor\">ComponentDescriptor</a>&gt;</h4></section></summary><div class='docblock'>Returns the complete <a href=\"re_types_core/component_descriptor/struct.ComponentDescriptor.html\" title=\"struct re_types_core::component_descriptor::ComponentDescriptor\"><code>ComponentDescriptor</code></a> for this <a href=\"re_types_core/loggable_batch/trait.ComponentBatch.html\" title=\"trait re_types_core::loggable_batch::ComponentBatch\"><code>ComponentBatch</code></a>. <a href=\"re_types_core/loggable_batch/trait.ComponentBatch.html#tymethod.descriptor\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_arrow_list_array\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/loggable_batch.rs.html#33-40\">source</a><a href=\"#method.to_arrow_list_array\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"re_types_core/loggable_batch/trait.ComponentBatch.html#method.to_arrow_list_array\" class=\"fn\">to_arrow_list_array</a>(&amp;self) -&gt; <a class=\"type\" href=\"re_types_core/result/type.SerializationResult.html\" title=\"type re_types_core::result::SerializationResult\">SerializationResult</a>&lt;Arrow2ListArray&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.i32.html\">i32</a>&gt;&gt;</h4></section></summary><div class='docblock'>Serializes the batch into an Arrow list array with a single component per list.</div></details><section id=\"method.with_descriptor\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/loggable_batch.rs.html#48-57\">source</a><a href=\"#method.with_descriptor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"re_types_core/loggable_batch/trait.ComponentBatch.html#method.with_descriptor\" class=\"fn\">with_descriptor</a>(\n    &amp;self,\n    descriptor: <a class=\"struct\" href=\"re_types_core/component_descriptor/struct.ComponentDescriptor.html\" title=\"struct re_types_core::component_descriptor::ComponentDescriptor\">ComponentDescriptor</a>,\n) -&gt; <a class=\"struct\" href=\"re_types_core/loggable_batch/struct.ComponentBatchCowWithDescriptor.html\" title=\"struct re_types_core::loggable_batch::ComponentBatchCowWithDescriptor\">ComponentBatchCowWithDescriptor</a>&lt;'_&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/loggable_batch.rs.html#68-70\">source</a><a href=\"#method.name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"re_types_core/loggable_batch/trait.ComponentBatch.html#method.name\" class=\"fn\">name</a>(&amp;self) -&gt; <a class=\"struct\" href=\"re_types_core/loggable/struct.ComponentName.html\" title=\"struct re_types_core::loggable::ComponentName\">ComponentName</a></h4></section></summary><div class='docblock'>The fully-qualified name of this component batch, e.g. <code>rerun.components.Position2D</code>. <a href=\"re_types_core/loggable_batch/trait.ComponentBatch.html#method.name\">Read more</a></div></details></div></details>","ComponentBatch","re_types_core::archetypes::clear::ClearIndicator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericIndicatorComponent%3CA%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#243\">source</a><a href=\"#impl-Debug-for-GenericIndicatorComponent%3CA%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"re_types_core/archetype/trait.Archetype.html\" title=\"trait re_types_core::archetype::Archetype\">Archetype</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"re_types_core/archetype/struct.GenericIndicatorComponent.html\" title=\"struct re_types_core::archetype::GenericIndicatorComponent\">GenericIndicatorComponent</a>&lt;A&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#243\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","re_types_core::archetypes::clear::ClearIndicator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenericIndicatorComponent%3CA%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#266-270\">source</a><a href=\"#impl-Default-for-GenericIndicatorComponent%3CA%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"re_types_core/archetype/trait.Archetype.html\" title=\"trait re_types_core::archetype::Archetype\">Archetype</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"re_types_core/archetype/struct.GenericIndicatorComponent.html\" title=\"struct re_types_core::archetype::GenericIndicatorComponent\">GenericIndicatorComponent</a>&lt;A&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#267-269\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","re_types_core::archetypes::clear::ClearIndicator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericIndicatorComponent%3CA%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#248-264\">source</a><a href=\"#impl-GenericIndicatorComponent%3CA%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"re_types_core/archetype/trait.Archetype.html\" title=\"trait re_types_core::archetype::Archetype\">Archetype</a>&gt; <a class=\"struct\" href=\"re_types_core/archetype/struct.GenericIndicatorComponent.html\" title=\"struct re_types_core::archetype::GenericIndicatorComponent\">GenericIndicatorComponent</a>&lt;A&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.DEFAULT\" class=\"associatedconstant\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#249-251\">source</a><h4 class=\"code-header\">pub const <a href=\"re_types_core/archetype/struct.GenericIndicatorComponent.html#associatedconstant.DEFAULT\" class=\"constant\">DEFAULT</a>: Self = _</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_array\" class=\"method\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#258-263\">source</a><h4 class=\"code-header\">pub fn <a href=\"re_types_core/archetype/struct.GenericIndicatorComponent.html#tymethod.new_array\" class=\"fn\">new_array</a>(len: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"struct\" href=\"re_types_core/archetype/struct.GenericIndicatorComponentArray.html\" title=\"struct re_types_core::archetype::GenericIndicatorComponentArray\">GenericIndicatorComponentArray</a>&lt;A&gt;</h4></section></summary><div class=\"docblock\"><p>Create an array of indicator components of this type with the given length.</p>\n<p>This can be useful when sending columns of indicators with\n<code>rerun::RecordingStream::send_columns</code>.</p>\n</div></details></div></details>",0,"re_types_core::archetypes::clear::ClearIndicator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LoggableBatch-for-GenericIndicatorComponent%3CA%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#272-278\">source</a><a href=\"#impl-LoggableBatch-for-GenericIndicatorComponent%3CA%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"re_types_core/archetype/trait.Archetype.html\" title=\"trait re_types_core::archetype::Archetype\">Archetype</a>&gt; <a class=\"trait\" href=\"re_types_core/loggable_batch/trait.LoggableBatch.html\" title=\"trait re_types_core::loggable_batch::LoggableBatch\">LoggableBatch</a> for <a class=\"struct\" href=\"re_types_core/archetype/struct.GenericIndicatorComponent.html\" title=\"struct re_types_core::archetype::GenericIndicatorComponent\">GenericIndicatorComponent</a>&lt;A&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_arrow2\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#274-277\">source</a><a href=\"#method.to_arrow2\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"re_types_core/loggable_batch/trait.LoggableBatch.html#tymethod.to_arrow2\" class=\"fn\">to_arrow2</a>(&amp;self) -&gt; <a class=\"type\" href=\"re_types_core/result/type.SerializationResult.html\" title=\"type re_types_core::result::SerializationResult\">SerializationResult</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn Array&gt;&gt;</h4></section></summary><div class='docblock'>Serializes the batch into an Arrow array.</div></details></div></details>","LoggableBatch","re_types_core::archetypes::clear::ClearIndicator"],["<section id=\"impl-Copy-for-GenericIndicatorComponent%3CA%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_types_core/archetype.rs.html#243\">source</a><a href=\"#impl-Copy-for-GenericIndicatorComponent%3CA%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"re_types_core/archetype/trait.Archetype.html\" title=\"trait re_types_core::archetype::Archetype\">Archetype</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"re_types_core/archetype/struct.GenericIndicatorComponent.html\" title=\"struct re_types_core::archetype::GenericIndicatorComponent\">GenericIndicatorComponent</a>&lt;A&gt;</h3></section>","Copy","re_types_core::archetypes::clear::ClearIndicator"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()