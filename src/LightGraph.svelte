<script>
  import { colorValues, background } from './colors.js'
  import convert from 'color-convert'

  let width = 500
  let height = 500
  $: barSpace = width / $colorValues.length
  $: barWidth = barSpace * 0.75
  $: backColor = `#${convert.lab.hex($background)}`

  $: bars = $colorValues.map(color => {
    return {
      hex: color.hex,
      lightness: color.lightness
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
    <rect width="{barWidth}" height="{lightness}%" fill="{hex}" x="{idx * barSpace + (barSpace / 2) - (barWidth / 2)}" y="{100 - lightness}%"></rect>
  {/each}
</svg>

