<script>
  import { colors, colorValues, backHex } from './colors.js'

  let width = 500
  let height = 500
  const pointWidth = 20
  const pointHeight = 20
  const maxAValue = 100
  const minAValue = -100
  const maxBValue = 100
  const minBValue = -100

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
</script>

<style>
  svg {
    width: 100%;
    display: block;
    max-height: 49.5vh;
    margin: 0.5vh 0 0 0;
  }
</style>

<svg viewBox="0 0 500 500">
  <rect width="100%" height="100%" fill="{backHex}"></rect>
  {#each points as {hex, aPercent, bPercent}, idx}
    <ellipse rx="{pointWidth / 2}" ry="{pointWidth / 2}" fill="#{hex}" cx="{aPercent * width}" cy="{bPercent * height}"></ellipse>
  {/each}
</svg>

