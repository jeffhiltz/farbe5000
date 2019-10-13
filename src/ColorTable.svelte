<script>
  import { colors, colorValues } from './colors.js'

  function handleChange(e) {
    console.log(e)
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
    {#each $colorValues as value (value.hex)}
      <tr>
        <td>{value.hex}</td>
        <td><input on:change="{handleChange}" value="{value.lightness}"></td>
        <td><input on:change="{handleChange}" value="{value.aStar}"></td>
        <td>{value.bStar}</td>
      </tr>
    {/each}
  </tbody>
</table>
