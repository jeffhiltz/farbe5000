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
    {#each $colors as hex}
      <tr>
        <td>{$colorValues[hex].hex}</td>
        <td>{$colorValues[hex].lightness}</td>
        <td>{$colorValues[hex].aStar}</td>
        <td>{$colorValues[hex].bStar}</td>
      </tr>
    {/each}
  </tbody>
</table>
