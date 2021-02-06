# FARBE 5000

A tool for analyzing and modifying color schemes based on the [CIELAB color space](https://en.wikipedia.org/wiki/CIELAB_color_space).  CIELAB was designed so that the same amount of numerical change in its values corresponds to roughly the same amount of visually perceived change.  Using this tool you can create a color scheme that will have a balanced appearance.

## Live

This repo contains the source for the tool which is online here:

[https://farbe5000.com](https://farbe5000.com]

## TODO

* look at using [Oklab](https://bottosson.github.io/posts/oklab/) in addition (or instead of) CIELAB.
  * I would probably need to port this [Python implementation](https://github.com/nschloe/colorio/blob/3c1a8f2869f1715e73e848cf26ce231204016ab8/colorio/cs/_oklab.py) to Javascript (color-convert).
* label graphs
