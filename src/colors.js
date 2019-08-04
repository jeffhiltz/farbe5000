import { derived, writable } from 'svelte/store'
import convert from 'color-convert'

export const colors = writable([])
export const background = writable('#000000')

export const colorValues = derived(
  colors,
  $colors => {
    const values = {}
    $colors.forEach(hex => {
      const rgb = convert.hex.rgb(hex)
      const lab = convert.hex.lab(hex)
      const hsl = convert.hex.hsl(hex)
      values[hex] = {
        hex: hex,
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
    return values
  }
)

