import { derived, writable } from 'svelte/store';
import { colors, colorValues } from './colors.js';

export const importText = writable('');
export const fileName = writable('');
export const fileType = writable('');

const hexRegex = /[a-fA-F0-9]{6}/g;

export const exportText = derived(
  [importText, colors, colorValues],
  ([$importText, $colors, $colorValues]) => {
    const newText = $importText.replace(hexRegex, (match) => {
      const colorIndex = $colors.findIndex((color) => color.originalHex === match);
      return colorIndex > -1 ? $colorValues[colorIndex].hex : match;
    });
    return newText;
  },
);
