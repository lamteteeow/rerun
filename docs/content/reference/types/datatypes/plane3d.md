---
title: "Plane3D"
---
<!-- DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/docs/website.rs -->

An infinite 3D plane represented by a unit normal vector and a distance.

Any point P on the plane fulfills the equation `dot(xyz, P) - d = 0`,
where `xyz` is the plane's normal and `d` the distance of the plane from the origin.
This representation is also known as the Hesse normal form.

Note: although the normal will be passed through to the
datastore as provided, when used in the Viewer, planes will always be normalized.
I.e. the plane with xyz = (2, 0, 0), d = 1 is equivalent to xyz = (1, 0, 0), d = 0.5


## Arrow datatype
```
FixedSizeList<4, float32>
```

## API reference links
 * 🌊 [C++ API docs for `Plane3D`](https://ref.rerun.io/docs/cpp/stable/structrerun_1_1datatypes_1_1Plane3D.html)
 * 🐍 [Python API docs for `Plane3D`](https://ref.rerun.io/docs/python/stable/common/datatypes#rerun.datatypes.Plane3D)
 * 🦀 [Rust API docs for `Plane3D`](https://docs.rs/rerun/latest/rerun/datatypes/struct.Plane3D.html)


## Used by

* [`Plane3D`](../components/plane3d.md)