# DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/python/mod.rs
# Based on "crates/store/re_types/definitions/rerun/components/axis_length.fbs".

# You can extend this class by creating a "AxisLengthExt" class in "axis_length_ext.py".

from __future__ import annotations

from .. import datatypes
from .._baseclasses import (
    ComponentBatchMixin,
    ComponentDescriptor,
    ComponentMixin,
)

__all__ = ["AxisLength", "AxisLengthBatch"]


class AxisLength(datatypes.Float32, ComponentMixin):
    """**Component**: The length of an axis in local units of the space."""

    _BATCH_TYPE = None
    # You can define your own __init__ function as a member of AxisLengthExt in axis_length_ext.py

    # Note: there are no fields here because AxisLength delegates to datatypes.Float32
    pass


class AxisLengthBatch(datatypes.Float32Batch, ComponentBatchMixin):
    _COMPONENT_DESCRIPTOR: ComponentDescriptor = ComponentDescriptor("rerun.components.AxisLength")


# This is patched in late to avoid circular dependencies.
AxisLength._BATCH_TYPE = AxisLengthBatch  # type: ignore[assignment]