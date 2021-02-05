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

export const bgLightness = writable(0);
export const bgAStar = writable(0);
export const bgBStar = writable(0);

export const backHex = derived(
  [bgLightness, bgAStar, bgBStar],
  ([$bgLightness, $bgAStar, $bgBStar]) => `#${convert.lab.hex($bgLightness, $bgAStar, $bgBStar)}`)

export const sortBy = writable('id');

// let's try making colorValues a map where the key is the color ID
export const colorValues = derived(
  [colors, sortBy],
  ([$colors, $sortBy]) => {
    const values = {}
    $colors.forEach((color) => {
      const rgb = convert.lab.rgb(color.value);
      const hex = convert.rgb.hex(rgb);
      values[color.id] = {
        id: color.id,
        hex,
        red: rgb[0],
        green: rgb[1],
        blue: rgb[2],
        lightness: color.value[0],
        aStar: color.value[1],
        bStar: color.value[2],
      };
    })// .sort((a, b) => a.sortPosition - b.sortPosition),
      //   }).sort((a, b) => a[$sortBy] - b[$sortBy]), // TODO only works for numeric values (ie: not hex...)
    return values
  }
);

export const maxId = derived(colors, $colors => {
  return $colors.reduce((max, cur) =>  Math.max(max, cur.id), 0)
})
