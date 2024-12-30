(function() {var type_impls = {
"re_sdk":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ByteArrayType-for-GenericBinaryType%3CO%3E\" class=\"impl\"><a href=\"#impl-ByteArrayType-for-GenericBinaryType%3CO%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O&gt; <a class=\"trait\" href=\"re_sdk/external/re_types_core/external/arrow/datatypes/trait.ByteArrayType.html\" title=\"trait re_sdk::external::re_types_core::external::arrow::datatypes::ByteArrayType\">ByteArrayType</a> for <a class=\"struct\" href=\"re_sdk/external/re_types_core/external/arrow/datatypes/struct.GenericBinaryType.html\" title=\"struct re_sdk::external::re_types_core::external::arrow::datatypes::GenericBinaryType\">GenericBinaryType</a>&lt;O&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"re_sdk/external/re_types_core/external/arrow/array/trait.OffsetSizeTrait.html\" title=\"trait re_sdk::external::re_types_core::external::arrow::array::OffsetSizeTrait\">OffsetSizeTrait</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Offset\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Offset\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"re_sdk/external/re_types_core/external/arrow/datatypes/trait.ByteArrayType.html#associatedtype.Offset\" class=\"associatedtype\">Offset</a> = O</h4></section></summary><div class='docblock'>Type of offset i.e i32/i64</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Native\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Native\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"re_sdk/external/re_types_core/external/arrow/datatypes/trait.ByteArrayType.html#associatedtype.Native\" class=\"associatedtype\">Native</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]</h4></section></summary><div class='docblock'>Type for representing its equivalent rust type i.e\nUtf8Array will have native type has &amp;str\nBinaryArray will have type as <a href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\" title=\"primitive u8\">u8</a></div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.PREFIX\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.PREFIX\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"re_sdk/external/re_types_core/external/arrow/datatypes/trait.ByteArrayType.html#associatedconstant.PREFIX\" class=\"constant\">PREFIX</a>: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a> = &quot;Binary&quot;</h4></section></summary><div class='docblock'>“Binary” or “String”, for use in error messages</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.DATA_TYPE\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.DATA_TYPE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"re_sdk/external/re_types_core/external/arrow/datatypes/trait.ByteArrayType.html#associatedconstant.DATA_TYPE\" class=\"constant\">DATA_TYPE</a>: <a class=\"enum\" href=\"re_sdk/external/re_types_core/external/arrow/datatypes/enum.DataType.html\" title=\"enum re_sdk::external::re_types_core::external::arrow::datatypes::DataType\">DataType</a> = _</h4></section></summary><div class='docblock'>Datatype of array elements</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate\" class=\"method trait-impl\"><a href=\"#method.validate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"re_sdk/external/re_types_core/external/arrow/datatypes/trait.ByteArrayType.html#tymethod.validate\" class=\"fn\">validate</a>(\n    offsets: &amp;<a class=\"struct\" href=\"re_sdk/external/re_types_core/external/arrow/buffer/struct.OffsetBuffer.html\" title=\"struct re_sdk::external::re_types_core::external::arrow::buffer::OffsetBuffer\">OffsetBuffer</a>&lt;&lt;<a class=\"struct\" href=\"re_sdk/external/re_types_core/external/arrow/datatypes/struct.GenericBinaryType.html\" title=\"struct re_sdk::external::re_types_core::external::arrow::datatypes::GenericBinaryType\">GenericBinaryType</a>&lt;O&gt; as <a class=\"trait\" href=\"re_sdk/external/re_types_core/external/arrow/datatypes/trait.ByteArrayType.html\" title=\"trait re_sdk::external::re_types_core::external::arrow::datatypes::ByteArrayType\">ByteArrayType</a>&gt;::<a class=\"associatedtype\" href=\"re_sdk/external/re_types_core/external/arrow/datatypes/trait.ByteArrayType.html#associatedtype.Offset\" title=\"type re_sdk::external::re_types_core::external::arrow::datatypes::ByteArrayType::Offset\">Offset</a>&gt;,\n    values: &amp;<a class=\"struct\" href=\"re_sdk/external/re_types_core/external/arrow/buffer/struct.Buffer.html\" title=\"struct re_sdk::external::re_types_core::external::arrow::buffer::Buffer\">Buffer</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"re_sdk/external/re_types_core/external/arrow/error/enum.ArrowError.html\" title=\"enum re_sdk::external::re_types_core::external::arrow::error::ArrowError\">ArrowError</a>&gt;</h4></section></summary><div class='docblock'>Verifies that every consecutive pair of <code>offsets</code> denotes a valid slice of <code>values</code></div></details></div></details>","ByteArrayType","re_sdk::external::re_types_core::external::arrow::datatypes::BinaryType","re_sdk::external::re_types_core::external::arrow::datatypes::LargeBinaryType"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()