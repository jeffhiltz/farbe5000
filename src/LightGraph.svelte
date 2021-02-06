<script>
  import { colors, colorValues, backHex } from './colors.js'

  let width = 95
  let height = 95
  $: barSpace = width / $colors.length // width of the bar including padding
  $: barWidth = barSpace * 0.75 // width without padding

  $: bars = $colors.map(color => {
    return {
      hex: $colorValues[color.id].hex,
      lightness: $colorValues[color.id].lightness,
    }
  })

  // move to a utility class?
  function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt)
  }
</script>

<style>
  svg {
    width: 100%;
    display: block;
    max-height: 49.5vh;
    margin: 0 0 0.5vh 0;
  }

  .labels {
    font-size: 0.22vh;
  }
</style>

<svg viewBox="0 0 100 100">
  <svg x="5" y="5">
    <rect width="95" height="95" fill="{$backHex}"></rect>
    {#each bars as {hex, lightness}, idx}
    <rect width="{barWidth}" height="{lightness}%" fill="#{hex}" x="{idx * barSpace + (barSpace / 2) - (barWidth / 2)}" y="{100 - lightness}%"></rect>
    {/each}
  </svg>
  <g class="labels">
    {#each range(4, 1) as i}
    <text x="0" y="{95/5 * i + 7}">{100 - (i * 1/5 * 100)}</text>
    {/each}
  </g>
</svg>

