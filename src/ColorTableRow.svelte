<script>
  import { colors, colorValues } from './colors.js'
  import convert from 'color-convert'

  export let id
  export let hex
  export let red
  export let green
  export let blue
  export let hue
  export let saturation
  export let hsLightness
  export let lightness
  export let aStar
  export let bStar

  function setColor(hex) {
    // console.log(`trying to set color ${id} to ${hex}`)
    colors.update(cols => {
      cols[id].hex = hex
      return cols
    })
  }

  // handle changes to RGB values
  $: {
    const newHex = convert.rgb.hex(red, green, blue)
    setColor(`#${newHex}`)
  }

  // handle changes to LAB values
  $: {
    const newHex = convert.lab.hex(lightness, aStar, bStar)
    setColor(`#${newHex}`)
  }
</script>

<tr>
  <td>{hex}</td>
  <td><input type=range min=0 max=255 bind:value={red}></td>
  <td><input type=range min=0 max=255 bind:value={green}></td>
  <td><input type=range min=0 max=255 bind:value={blue}></td>
  <td><input type=range min=0 max=100 bind:value={lightness}></td>
  <td><input type=range min=-86 max=98 bind:value="{aStar}"></td>
  <td><input type=range min=-108 max=94 bind:value="{bStar}"></td>
</tr>
