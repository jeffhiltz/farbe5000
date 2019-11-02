import { derived, writable } from 'svelte/store';
import convert from 'color-convert';

// each color entry is an object with:
// id: a unique, integer, identifier
// value: lab array [lightness, a, b]
export const colors = writable([]);
export const background = writable([0, 0, 0]); // TODO maybe this should be a index, not a value?

export const colorValues = derived(
  colors,
  ($colors) => $colors.map((color) => {
    const rgb = convert.lab.rgb(color.value);
    const rawHex = convert.rgb.hex(rgb);
    const hex = rawHex.startsWith('#') ? rawHex : `#${rawHex}`;
    const hsl = convert.lab.hsl(color.value);
    return {
      id: color.id,
      hex,
      red: rgb[0],
      green: rgb[1],
      blue: rgb[2],
      hue: hsl[0],
      saturation: hsl[1],
      hsLightness: hsl[2],
      lightness: color.value[0],
      aStar: color.value[1],
      bStar: color.value[2],
    };
  }),
);
