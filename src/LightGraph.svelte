<script>
  import { colors, colorValues, background } from './colors.js'
  import convert from 'color-convert'

  let width = 500
  let height = 500
  $: barSpace = width / $colors.length
  $: barWidth = barSpace * 0.75
  $: backColor = `#${convert.lab.hex($background)}`

  $: bars = $colors.map(color => {
    return {
      hex: $colorValues[color.id].hex,
      lightness: $colorValues[color.id].lightness,
    }
  })
</script>

<style>
  svg {
    width: 100%;
    display: block;
    max-height: 49.5vh;
    margin: 0 0 0.5vh 0;
  }
</style>

<svg viewBox="0 0 500 500">
  <rect width="100%" height="100%" fill="{backColor}"></rect>
  {#each bars as {hex, lightness}, idx}
    <rect width="{barWidth}" height="{lightness}%" fill="#{hex}" x="{idx * barSpace + (barSpace / 2) - (barWidth / 2)}" y="{100 - lightness}%"></rect>
  {/each}
</svg>

