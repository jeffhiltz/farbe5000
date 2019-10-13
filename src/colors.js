import { derived, writable } from 'svelte/store'
import convert from 'color-convert'

export const colors = writable([])
export const background = writable('#000000')

export const colorValues = derived(
  colors,
  $colors => $colors.map(color => {
    const rgb = convert.hex.rgb(color.hex)
    const lab = convert.hex.lab(color.hex)
    const hsl = convert.hex.hsl(color.hex)
    return {
      id: color.id,
      hex: color.hex,
      red: rgb[0],
      green: rgb[1],
      blue: rgb[2],
      hue: hsl[0],
      saturation: hsl[1],
      hsLightness: hsl[2],
      lightness: lab[0],
      aStar: lab[1],
      bStar: lab[2],
    }
  })
)

