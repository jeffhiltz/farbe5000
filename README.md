# FARBE 5000

A tool for analyzing and modifying color schemes based on the [CIELAB color space](https://en.wikipedia.org/wiki/CIELAB_color_space).  CIELAB was designed so that the same amount of numerical change in its values corresponds to roughly the same amount of visually perceived change.  Using this tool you can create a color scheme that will have a balanced appearance.

## Live

This repo contains the source for the tool which is online here:

[https://farbe5000.com](https://farbe5000.com]

## TODO

### New Layout (WIP)

Idea for a New Layout.

* replace input and export text boxes with "upload file" and "download file" buttons.
  * the goal is to reduce clutter; the input and export aren't really interactive.
  * rename "input" as "import"
* get the interactive part of the page front-and-center
* if it looks OK on my screen without zooming, maybe the typeface is too big?

### Other

* add "delete row" 
* add control over background color
* look at using [Oklab](https://bottosson.github.io/posts/oklab/) in addition (or instead of) CIELAB.
* add "remove duplicates" function
* label graphs
