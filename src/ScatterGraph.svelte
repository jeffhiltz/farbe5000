<script>
  import { colors, colorValues, backHex } from './colors.js'

  let width = 95
  let height = 95
  const pointWidth = 4
  const pointHeight = 4
  const maxAValue = 95
  const minAValue = -95
  const maxBValue = 95
  const minBValue = -95

  // Calculate the position of a value within a range
  function calculatePercentage(value, min, max) {
    return (value - min) / (max - min)
  }

  $: points = $colors.map(color => {
    return {
      hex: $colorValues[color.id].hex,
      aPercent: calculatePercentage($colorValues[color.id].aStar, minAValue, maxAValue),
      bPercent: calculatePercentage($colorValues[color.id].bStar, minBValue, maxBValue),
    }
  })

  function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt)
  }
</script>

<style>
  svg {
    width: 100%;
    display: block;
    max-height: 49.5vh;
    margin: 0.5vh 0 0 0;
  }

  .labels {
    font-size: 0.22vh;
  }
</style>

<svg viewBox="0 0 100 100">
  <svg x="5">
    <rect width="95" height="95" fill="{backHex}"></rect>
    {#each points as {hex, aPercent, bPercent}, idx}
    <ellipse rx="{pointWidth / 2}" ry="{pointWidth / 2}" fill="#{hex}" cx="{aPercent * width}" cy="{bPercent * height}"></ellipse>
    {/each}
  </svg>
  <g class="labels">
    {#each range(7, 1) as i}
    <text x="0" y="{95/8 * i + 2}">{(i * 1/8 * 200) - 100}</text>
    {/each}
  </g>
  <g class="labels">
    <text x="25" y="98.5">Green</text>
    <text x="75" y="98.5">Red</text>
  </g>
</svg>

