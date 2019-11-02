<script>
  import { colors } from './colors.js'
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

  function setColor(lightness, aStar, bStar) {
    colors.update(cols => {
      cols[id].value = [lightness, aStar, bStar]
      return cols
    })
  }

  // handle changes to LAB values
  $: {
    setColor(lightness, aStar, bStar)
  }
</script>

<tr>
  <td><input type=number min=0 max=100 bind:value={lightness}></td>
  <td><input type=number min=-86 max=98 bind:value="{aStar}"></td>
  <td><input type=number min=-108 max=94 bind:value="{bStar}"></td>
  <td>{hex}</td>
  <td>{red}</td>
  <td>{green}</td>
  <td>{blue}</td>
  <td>{hue}</td>
  <td>{saturation}</td>
  <td>{hsLightness}</td>
  <td bgcolor="{hex}"></td>
</tr>
