# DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/python/mod.rs
# Based on "crates/store/re_types/definitions/rerun/blueprint/components/column_selection_mode.fbs".

# You can extend this class by creating a "ColumnSelectionModeExt" class in "column_selection_mode_ext.py".

from __future__ import annotations

from typing import Literal, Sequence, Union

import pyarrow as pa

from ..._baseclasses import (
    BaseBatch,
    BaseExtensionType,
    ComponentBatchMixin,
)

__all__ = [
    "ColumnSelectionMode",
    "ColumnSelectionModeArrayLike",
    "ColumnSelectionModeBatch",
    "ColumnSelectionModeLike",
    "ColumnSelectionModeType",
]


from enum import Enum


class ColumnSelectionMode(Enum):
    """**Component**: How are columns selected in the dataframe view?."""

    All = 1
    """Show all columns returned by the query."""

    Selected = 2
    """Show only the columns specified by the user."""

    @classmethod
    def auto(cls, val: str | int | ColumnSelectionMode) -> ColumnSelectionMode:
        """Best-effort converter, including a case-insensitive string matcher."""
        if isinstance(val, ColumnSelectionMode):
            return val
        if isinstance(val, int):
            return cls(val)
        try:
            return cls[val]
        except KeyError:
            val_lower = val.lower()
            for variant in cls:
                if variant.name.lower() == val_lower:
                    return variant
        raise ValueError(f"Cannot convert {val} to {cls.__name__}")

    def __str__(self) -> str:
        """Returns the variant name."""
        return self.name


ColumnSelectionModeLike = Union[ColumnSelectionMode, Literal["All", "Selected", "all", "selected"], int]
ColumnSelectionModeArrayLike = Union[ColumnSelectionModeLike, Sequence[ColumnSelectionModeLike]]


class ColumnSelectionModeType(BaseExtensionType):
    _TYPE_NAME: str = "rerun.blueprint.components.ColumnSelectionMode"

    def __init__(self) -> None:
        pa.ExtensionType.__init__(self, pa.uint8(), self._TYPE_NAME)


class ColumnSelectionModeBatch(BaseBatch[ColumnSelectionModeArrayLike], ComponentBatchMixin):
    _ARROW_TYPE = ColumnSelectionModeType()

    @staticmethod
    def _native_to_pa_array(data: ColumnSelectionModeArrayLike, data_type: pa.DataType) -> pa.Array:
        if isinstance(data, (ColumnSelectionMode, int, str)):
            data = [data]

        pa_data = [ColumnSelectionMode.auto(v).value if v is not None else None for v in data]  # type: ignore[redundant-expr]

        return pa.array(pa_data, type=data_type)
