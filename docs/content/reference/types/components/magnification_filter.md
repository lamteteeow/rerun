---
title: "MagnificationFilter"
---
<!-- DO NOT EDIT! This file was auto-generated by crates/build/re_types_builder/src/codegen/docs/website.rs -->

Filter used when magnifying an image/texture such that a single pixel/texel is displayed as multiple pixels on screen.

## Variants
#### `Nearest` = 1
Show the nearest pixel value.

This will give a blocky appearance when zooming in.
Used as default when rendering 2D images.

#### `Linear` = 2
Linearly interpolate the nearest neighbors, creating a smoother look when zooming in.

Used as default for mesh rendering.


## Arrow datatype
```
uint8
```

## API reference links
 * 🌊 [C++ API docs for `MagnificationFilter`](https://ref.rerun.io/docs/cpp/stable/namespacererun_1_1components.html)
 * 🐍 [Python API docs for `MagnificationFilter`](https://ref.rerun.io/docs/python/stable/common/components#rerun.components.MagnificationFilter)
 * 🦀 [Rust API docs for `MagnificationFilter`](https://docs.rs/rerun/latest/rerun/components/enum.MagnificationFilter.html)

