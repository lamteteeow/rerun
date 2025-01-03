# DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/python/mod.rs
# Based on "crates/store/re_types/definitions/rerun/components/entity_path.fbs".

# You can extend this class by creating a "EntityPathExt" class in "entity_path_ext.py".

from __future__ import annotations

from .. import datatypes
from .._baseclasses import (
    ComponentBatchMixin,
    ComponentDescriptor,
    ComponentMixin,
)

__all__ = ["EntityPath", "EntityPathBatch"]


class EntityPath(datatypes.EntityPath, ComponentMixin):
    """**Component**: A path to an entity, usually to reference some data that is part of the target entity."""

    _BATCH_TYPE = None
    # You can define your own __init__ function as a member of EntityPathExt in entity_path_ext.py

    # Note: there are no fields here because EntityPath delegates to datatypes.EntityPath
    pass


class EntityPathBatch(datatypes.EntityPathBatch, ComponentBatchMixin):
    _COMPONENT_DESCRIPTOR: ComponentDescriptor = ComponentDescriptor("rerun.components.EntityPath")


# This is patched in late to avoid circular dependencies.
EntityPath._BATCH_TYPE = EntityPathBatch  # type: ignore[assignment]