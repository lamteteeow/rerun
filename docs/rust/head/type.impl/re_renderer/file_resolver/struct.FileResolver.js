(function() {var type_impls = {
"re_renderer":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-FileResolver%3CFs%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_renderer/file_resolver.rs.html#481\">source</a><a href=\"#impl-Default-for-FileResolver%3CFs%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Fs: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"re_renderer/file_resolver/struct.FileResolver.html\" title=\"struct re_renderer::file_resolver::FileResolver\">FileResolver</a>&lt;Fs&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_renderer/file_resolver.rs.html#481\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"re_renderer/file_resolver/struct.FileResolver.html\" title=\"struct re_renderer::file_resolver::FileResolver\">FileResolver</a>&lt;Fs&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","re_renderer::file_resolver::RecommendedFileResolver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FileResolver%3CFs%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_renderer/file_resolver.rs.html#493-504\">source</a><a href=\"#impl-FileResolver%3CFs%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Fs: <a class=\"trait\" href=\"re_renderer/file_system/trait.FileSystem.html\" title=\"trait re_renderer::file_system::FileSystem\">FileSystem</a>&gt; <a class=\"struct\" href=\"re_renderer/file_resolver/struct.FileResolver.html\" title=\"struct re_renderer::file_resolver::FileResolver\">FileResolver</a>&lt;Fs&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/re_renderer/file_resolver.rs.html#494-499\">source</a><h4 class=\"code-header\">pub fn <a href=\"re_renderer/file_resolver/struct.FileResolver.html#tymethod.new\" class=\"fn\">new</a>(fs: Fs) -&gt; Self</h4></section><section id=\"method.with_search_path\" class=\"method\"><a class=\"src rightside\" href=\"src/re_renderer/file_resolver.rs.html#501-503\">source</a><h4 class=\"code-header\">pub fn <a href=\"re_renderer/file_resolver/struct.FileResolver.html#tymethod.with_search_path\" class=\"fn\">with_search_path</a>(fs: Fs, search_path: <a class=\"struct\" href=\"re_renderer/file_resolver/struct.SearchPath.html\" title=\"struct re_renderer::file_resolver::SearchPath\">SearchPath</a>) -&gt; Self</h4></section></div></details>",0,"re_renderer::file_resolver::RecommendedFileResolver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FileResolver%3CFs%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_renderer/file_resolver.rs.html#506-634\">source</a><a href=\"#impl-FileResolver%3CFs%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Fs: <a class=\"trait\" href=\"re_renderer/file_system/trait.FileSystem.html\" title=\"trait re_renderer::file_system::FileSystem\">FileSystem</a>&gt; <a class=\"struct\" href=\"re_renderer/file_resolver/struct.FileResolver.html\" title=\"struct re_renderer::file_resolver::FileResolver\">FileResolver</a>&lt;Fs&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.populate\" class=\"method\"><a class=\"src rightside\" href=\"src/re_renderer/file_resolver.rs.html#507-600\">source</a><h4 class=\"code-header\">pub fn <a href=\"re_renderer/file_resolver/struct.FileResolver.html#tymethod.populate\" class=\"fn\">populate</a>(&amp;self, path: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;) -&gt; <a class=\"type\" href=\"https://docs.rs/anyhow/1.0.91/anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"struct\" href=\"re_renderer/file_resolver/struct.InterpolatedFile.html\" title=\"struct re_renderer::file_resolver::InterpolatedFile\">InterpolatedFile</a>&gt;</h4></section><section id=\"method.resolve_clause_path\" class=\"method\"><a class=\"src rightside\" href=\"src/re_renderer/file_resolver.rs.html#602-633\">source</a><h4 class=\"code-header\">fn <a href=\"re_renderer/file_resolver/struct.FileResolver.html#tymethod.resolve_clause_path\" class=\"fn\">resolve_clause_path</a>(\n    &amp;self,\n    cwd: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,\n    path: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt;</h4></section></div></details>",0,"re_renderer::file_resolver::RecommendedFileResolver"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()