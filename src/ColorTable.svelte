<script>
  import { colors } from './colors.js'
//  const convert = require('color-convert')
</script>

<table>
  <thead>
    <tr>
      <th>Hex</th>
    </tr>
  </thead>
  <tbody>
    {#each $colors as hex}
      <tr>
        <td>{hex}</td>
      </tr>
    {/each}
  </tbody>
</table>
