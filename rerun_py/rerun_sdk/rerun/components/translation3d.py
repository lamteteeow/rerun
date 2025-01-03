# DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/python/mod.rs
# Based on "crates/store/re_types/definitions/rerun/components/translation3d.fbs".

# You can extend this class by creating a "Translation3DExt" class in "translation3d_ext.py".

from __future__ import annotations

from .. import datatypes
from .._baseclasses import (
    ComponentBatchMixin,
    ComponentDescriptor,
    ComponentMixin,
)

__all__ = ["Translation3D", "Translation3DBatch"]


class Translation3D(datatypes.Vec3D, ComponentMixin):
    """**Component**: A translation vector in 3D space."""

    _BATCH_TYPE = None
    # You can define your own __init__ function as a member of Translation3DExt in translation3d_ext.py

    # Note: there are no fields here because Translation3D delegates to datatypes.Vec3D
    pass


class Translation3DBatch(datatypes.Vec3DBatch, ComponentBatchMixin):
    _COMPONENT_DESCRIPTOR: ComponentDescriptor = ComponentDescriptor("rerun.components.Translation3D")


# This is patched in late to avoid circular dependencies.
Translation3D._BATCH_TYPE = Translation3DBatch  # type: ignore[assignment]