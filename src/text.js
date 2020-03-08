import { derived, writable } from 'svelte/store';
import { colors, colorValues } from './colors.js';

export const importText = writable('hats');

const hexRegex = /[a-fA-F0-9]{6}/g;

export const exportText = derived(
  [importText, colors, colorValues],
  ([$importText, $colors, $colorValues]) => {
    const newText = $importText.replace(hexRegex, (match) => {
      const colorEntry = $colors.find((color) => color.originalHex === match);
      return colorEntry ? $colorValues[colorEntry.id].hex : match;
    });
    return newText;
  },
);
