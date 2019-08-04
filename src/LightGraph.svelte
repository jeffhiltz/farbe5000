<script>
  import { colors, background } from './colors.js'
  import convert from 'color-convert'

  let backColor = '#333333'
  let width = 500
  let height = 500
  $: barSpace = width / $colors.length
  $: barWidth = barSpace * 0.75

  $: bars = $colors.map(hex => {
    const lightness = convert.hex.lab(hex)[0]
    return { hex: hex, lightness: lightness }
  })
</script>

<style>
</style>

<svg width={width} height={height}>
  <rect width="100%" height="100%" fill="{$background}"></rect>
  {#each bars as {hex, lightness}, idx}
    <rect width="{barWidth}" height="{lightness}%" fill="{hex}" x="{idx * barSpace + (barSpace / 2) - (barWidth / 2)}" y="{100 - lightness}%"></rect>
  {/each}
</svg>

