# DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/python/mod.rs
# Based on "crates/store/re_types/definitions/rerun/blueprint/datatypes/filter_by_range.fbs".

# You can extend this class by creating a "FilterByRangeExt" class in "filter_by_range_ext.py".

from __future__ import annotations

from typing import Any, Sequence, Union

import pyarrow as pa
from attrs import define, field

from ... import datatypes
from ..._baseclasses import (
    BaseBatch,
)
from .filter_by_range_ext import FilterByRangeExt

__all__ = ["FilterByRange", "FilterByRangeArrayLike", "FilterByRangeBatch", "FilterByRangeLike"]


@define(init=False)
class FilterByRange(FilterByRangeExt):
    """**Datatype**: Configuration for the filter-by-range feature of the dataframe view."""

    def __init__(self: Any, start: datatypes.TimeIntLike, end: datatypes.TimeIntLike):
        """
        Create a new instance of the FilterByRange datatype.

        Parameters
        ----------
        start:
            Beginning of the time range.
        end:
            End of the time range (inclusive).

        """

        # You can define your own __init__ function as a member of FilterByRangeExt in filter_by_range_ext.py
        self.__attrs_init__(start=start, end=end)

    start: datatypes.TimeInt = field(
        converter=FilterByRangeExt.start__field_converter_override,  # type: ignore[misc]
    )
    # Beginning of the time range.
    #
    # (Docstring intentionally commented out to hide this field from the docs)

    end: datatypes.TimeInt = field(
        converter=FilterByRangeExt.end__field_converter_override,  # type: ignore[misc]
    )
    # End of the time range (inclusive).
    #
    # (Docstring intentionally commented out to hide this field from the docs)


FilterByRangeLike = FilterByRange
FilterByRangeArrayLike = Union[
    FilterByRange,
    Sequence[FilterByRangeLike],
]


class FilterByRangeBatch(BaseBatch[FilterByRangeArrayLike]):
    _ARROW_DATATYPE = pa.struct([
        pa.field("start", pa.int64(), nullable=False, metadata={}),
        pa.field("end", pa.int64(), nullable=False, metadata={}),
    ])

    @staticmethod
    def _native_to_pa_array(data: FilterByRangeArrayLike, data_type: pa.DataType) -> pa.Array:
        from rerun.datatypes import TimeIntBatch

        if isinstance(data, FilterByRange):
            data = [data]

        return pa.StructArray.from_arrays(
            [
                TimeIntBatch([x.start for x in data]).as_arrow_array(),  # type: ignore[misc, arg-type]
                TimeIntBatch([x.end for x in data]).as_arrow_array(),  # type: ignore[misc, arg-type]
            ],
            fields=list(data_type),
        )