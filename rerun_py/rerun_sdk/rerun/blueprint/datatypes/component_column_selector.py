# DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/python/mod.rs
# Based on "crates/store/re_types/definitions/rerun/blueprint/datatypes/component_column_selector.fbs".

# You can extend this class by creating a "ComponentColumnSelectorExt" class in "component_column_selector_ext.py".

from __future__ import annotations

from typing import Any, Sequence, Union

import pyarrow as pa
from attrs import define, field

from ... import datatypes
from ..._baseclasses import (
    BaseBatch,
    BaseExtensionType,
)

__all__ = [
    "ComponentColumnSelector",
    "ComponentColumnSelectorArrayLike",
    "ComponentColumnSelectorBatch",
    "ComponentColumnSelectorLike",
    "ComponentColumnSelectorType",
]


def _component_column_selector__entity_path__special_field_converter_override(
    x: datatypes.EntityPathLike,
) -> datatypes.EntityPath:
    if isinstance(x, datatypes.EntityPath):
        return x
    else:
        return datatypes.EntityPath(x)


def _component_column_selector__component__special_field_converter_override(x: datatypes.Utf8Like) -> datatypes.Utf8:
    if isinstance(x, datatypes.Utf8):
        return x
    else:
        return datatypes.Utf8(x)


@define(init=False)
class ComponentColumnSelector:
    """**Datatype**: Describe a component column to be selected in the dataframe view."""

    def __init__(self: Any, entity_path: datatypes.EntityPathLike, component: datatypes.Utf8Like):
        """
        Create a new instance of the ComponentColumnSelector datatype.

        Parameters
        ----------
        entity_path:
            The entity path for this component.
        component:
            The name of the component.

        """

        # You can define your own __init__ function as a member of ComponentColumnSelectorExt in component_column_selector_ext.py
        self.__attrs_init__(entity_path=entity_path, component=component)

    entity_path: datatypes.EntityPath = field(
        converter=_component_column_selector__entity_path__special_field_converter_override
    )
    # The entity path for this component.
    #
    # (Docstring intentionally commented out to hide this field from the docs)

    component: datatypes.Utf8 = field(converter=_component_column_selector__component__special_field_converter_override)
    # The name of the component.
    #
    # (Docstring intentionally commented out to hide this field from the docs)


ComponentColumnSelectorLike = ComponentColumnSelector
ComponentColumnSelectorArrayLike = Union[
    ComponentColumnSelector,
    Sequence[ComponentColumnSelectorLike],
]


class ComponentColumnSelectorType(BaseExtensionType):
    _TYPE_NAME: str = "rerun.blueprint.datatypes.ComponentColumnSelector"

    def __init__(self) -> None:
        pa.ExtensionType.__init__(
            self,
            pa.struct([
                pa.field("entity_path", pa.utf8(), nullable=False, metadata={}),
                pa.field("component", pa.utf8(), nullable=False, metadata={}),
            ]),
            self._TYPE_NAME,
        )


class ComponentColumnSelectorBatch(BaseBatch[ComponentColumnSelectorArrayLike]):
    _ARROW_TYPE = ComponentColumnSelectorType()

    @staticmethod
    def _native_to_pa_array(data: ComponentColumnSelectorArrayLike, data_type: pa.DataType) -> pa.Array:
        from rerun.datatypes import EntityPathBatch, Utf8Batch

        if isinstance(data, ComponentColumnSelector):
            data = [data]

        return pa.StructArray.from_arrays(
            [
                EntityPathBatch([x.entity_path for x in data]).as_arrow_array().storage,  # type: ignore[misc, arg-type]
                Utf8Batch([x.component for x in data]).as_arrow_array().storage,  # type: ignore[misc, arg-type]
            ],
            fields=list(data_type),
        )
