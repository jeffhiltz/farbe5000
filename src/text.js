import { derived, writable } from 'svelte/store';
import { colors, colorValues } from './colors.js';

export const importText = writable('');
export const fileName = writable('');
export const fileType = writable('');

const hexRegex = /[a-fA-F0-9]{6}/g;

export const exportText = derived(
  [colorValues, colors, importText],
  ([$colorValues, $colors, $importText]) => {
    const newText = $importText.replace(hexRegex, (match) => {
      const color = $colors.find((color) => color.originalHex === match);
      return color ? $colorValues[color.id].hex : match;
    });
    return newText;
  },
);
