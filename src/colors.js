import { derived, writable } from 'svelte/store';
import convert from 'color-convert';

// each color entry is an object with:
// id: a unique, integer identifier
// value: lab array [lightness, a, b]
// originalHex: original imported hex value (or null if not applicable)
// eg: {
//   id: 5,
//   value: [62, 69, -5],
//   originalHex: 'f357a1'
// }
export const colors = writable([]);
export const background = writable([0, 0, 0]); // TODO maybe this should be an index, not a value?

export const sortBy = writable('id');

export const colorValues = derived(
  [colors, sortBy],
  ([$colors, $sortBy]) => $colors.map((color) => {
    const rgb = convert.lab.rgb(color.value);
    const hex = convert.rgb.hex(rgb);
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
  })// .sort((a, b) => a.sortPosition - b.sortPosition),
    //   }).sort((a, b) => a[$sortBy] - b[$sortBy]), // TODO only works for numeric values (ie: not hex...)
);

