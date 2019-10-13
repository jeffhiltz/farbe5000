<script>
  import { colors, colorValues } from './colors.js'
  import convert from 'color-convert'

  function handleChange(e) {
    // console.log(e)
    const colorId = parseInt(e.target.getAttribute('color_id'))
    console.log($colors[colorId])
    // $colors = [...$colors.slice(0, colorId), {id: colorId, hex: '#fe57a1'}, ...$colors.slice(colorId + 1)]
    colors.update(cols => {
      cols[colorId].hex = '#beef99'
      return cols
    })
  }

</script>

<table>
  <thead>
    <tr>
      <th>Hex</th>
      <th>Lightness</th>
      <th>aStar</th>
      <th>bStar</th>
    </tr>
  </thead>
  <tbody>
    {#each $colorValues as value, idx (value.id)}
      <tr>
        <td>{value.hex}</td>
        <td><input color_id={value.id} on:change="{handleChange}" value="{value.lightness}"></td>
        <td><input color_id={value.id} on:change="{handleChange}" value="{value.aStar}"></td>
        <td>{value.bStar}</td>
      </tr>
    {/each}
  </tbody>
</table>
