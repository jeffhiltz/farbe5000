<script>
  import { colorValues, background } from './colors.js'
  import convert from 'color-convert'

  let width = 500
  let height = 500
  const pointWidth = 10
  const pointHeight = 10
  const maxAValue = 100
  const minAValue = -100
  const maxBValue = 100
  const minBValue = -100
  $: backColor = `#${convert.lab.hex($background)}`

  // Calculate the position of a value within a range
  function calculatePercentage(value, min, max) {
    return (value - min) / (max - min)
  }

  $: points = $colorValues.map(color => {
    return {
      hex: color.hex,
      aPercent: calculatePercentage(color.aStar, minAValue, maxAValue),
      bPercent: calculatePercentage(color.bStar, minBValue, maxBValue),
    }
  })
</script>

<style>
</style>

<svg width={width} height={height}>
  <rect width="100%" height="100%" fill="{backColor}"></rect>
  {#each points as {hex, aPercent, bPercent}, idx}
    <rect width="{pointWidth}" height="{pointWidth}" fill="{hex}" x="{(aPercent * width) - (pointWidth / 2)}" y="{(bPercent * height) - (pointHeight / 2)}"></rect>
  {/each}
</svg>

