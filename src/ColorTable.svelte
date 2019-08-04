<script>
  import { colors, colorValues } from './colors.js'
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
    {#each $colorValues as value}
      <tr>
        <td>{value.hex}</td>
        <td>{value.lightness}</td>
        <td>{value.aStar}</td>
        <td>{value.bStar}</td>
      </tr>
    {/each}
  </tbody>
</table>
