<script>
  import { sortBy } from './colors.js'
</script>

<h2>Sort Order</h2>
<select bind:value={$sortBy}>
  <option value="id">Import Order</option>
  <option value="lightness">LAB Lightness</option>
  <option value="aStar">aStar (G-R)</option>
  <option value="bStar">bStar (B-Y)</option>
  <option value="hex">Hex</option>
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
  <option value="hue">Hue</option>
  <option value="saturation">Saturation</option>
  <option value="hsLightness">HSL Lightness</option>

</select>

