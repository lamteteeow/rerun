# DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/python/mod.rs
# Based on "crates/store/re_types/definitions/rerun/components/channel_datatype.fbs".

# You can extend this class by creating a "ChannelDatatypeExt" class in "channel_datatype_ext.py".

from __future__ import annotations

from typing import Literal, Sequence, Union

import pyarrow as pa

from .._baseclasses import (
    BaseBatch,
    BaseExtensionType,
    ComponentBatchMixin,
)

__all__ = [
    "ChannelDatatype",
    "ChannelDatatypeArrayLike",
    "ChannelDatatypeBatch",
    "ChannelDatatypeLike",
    "ChannelDatatypeType",
]


from enum import Enum


class ChannelDatatype(Enum):
    """
    **Component**: The innermost datatype of an image.

    How individual color channel components are encoded.
    """

    U8 = 1
    """8-bit unsigned integer."""

    U16 = 2
    """16-bit unsigned integer."""

    U32 = 3
    """32-bit unsigned integer."""

    U64 = 4
    """64-bit unsigned integer."""

    I8 = 5
    """8-bit signed integer."""

    I16 = 6
    """16-bit signed integer."""

    I32 = 7
    """32-bit signed integer."""

    I64 = 8
    """64-bit signed integer."""

    F16 = 9
    """16-bit IEEE-754 floating point, also known as `half`."""

    F32 = 10
    """32-bit IEEE-754 floating point, also known as `float` or `single`."""

    F64 = 11
    """64-bit IEEE-754 floating point, also known as `double`."""


ChannelDatatypeLike = Union[
    ChannelDatatype, Literal["u8", "u16", "u32", "u64", "i8", "i16", "i32", "i64", "f16", "f32", "f64"]
]
ChannelDatatypeArrayLike = Union[ChannelDatatypeLike, Sequence[ChannelDatatypeLike]]


class ChannelDatatypeType(BaseExtensionType):
    _TYPE_NAME: str = "rerun.components.ChannelDatatype"

    def __init__(self) -> None:
        pa.ExtensionType.__init__(
            self,
            pa.sparse_union([
                pa.field("_null_markers", pa.null(), nullable=True, metadata={}),
                pa.field("U8", pa.null(), nullable=True, metadata={}),
                pa.field("U16", pa.null(), nullable=True, metadata={}),
                pa.field("U32", pa.null(), nullable=True, metadata={}),
                pa.field("U64", pa.null(), nullable=True, metadata={}),
                pa.field("I8", pa.null(), nullable=True, metadata={}),
                pa.field("I16", pa.null(), nullable=True, metadata={}),
                pa.field("I32", pa.null(), nullable=True, metadata={}),
                pa.field("I64", pa.null(), nullable=True, metadata={}),
                pa.field("F16", pa.null(), nullable=True, metadata={}),
                pa.field("F32", pa.null(), nullable=True, metadata={}),
                pa.field("F64", pa.null(), nullable=True, metadata={}),
            ]),
            self._TYPE_NAME,
        )


class ChannelDatatypeBatch(BaseBatch[ChannelDatatypeArrayLike], ComponentBatchMixin):
    _ARROW_TYPE = ChannelDatatypeType()

    @staticmethod
    def _native_to_pa_array(data: ChannelDatatypeArrayLike, data_type: pa.DataType) -> pa.Array:
        if isinstance(data, (ChannelDatatype, int, str)):
            data = [data]

        types: list[int] = []

        for value in data:
            if value is None:
                types.append(0)
            elif isinstance(value, ChannelDatatype):
                types.append(value.value)  # Actual enum value
            elif isinstance(value, int):
                types.append(value)  # By number
            elif isinstance(value, str):
                if hasattr(ChannelDatatype, value):
                    types.append(ChannelDatatype[value].value)  # fast path
                elif value.lower() == "u8":
                    types.append(ChannelDatatype.U8.value)
                elif value.lower() == "u16":
                    types.append(ChannelDatatype.U16.value)
                elif value.lower() == "u32":
                    types.append(ChannelDatatype.U32.value)
                elif value.lower() == "u64":
                    types.append(ChannelDatatype.U64.value)
                elif value.lower() == "i8":
                    types.append(ChannelDatatype.I8.value)
                elif value.lower() == "i16":
                    types.append(ChannelDatatype.I16.value)
                elif value.lower() == "i32":
                    types.append(ChannelDatatype.I32.value)
                elif value.lower() == "i64":
                    types.append(ChannelDatatype.I64.value)
                elif value.lower() == "f16":
                    types.append(ChannelDatatype.F16.value)
                elif value.lower() == "f32":
                    types.append(ChannelDatatype.F32.value)
                elif value.lower() == "f64":
                    types.append(ChannelDatatype.F64.value)
                else:
                    raise ValueError(f"Unknown ChannelDatatype kind: {value}")
            else:
                raise ValueError(f"Unknown ChannelDatatype kind: {value}")

        buffers = [
            None,
            pa.array(types, type=pa.int8()).buffers()[1],
        ]
        children = (1 + 11) * [pa.nulls(len(data))]

        return pa.UnionArray.from_buffers(
            type=data_type,
            length=len(data),
            buffers=buffers,
            children=children,
        )