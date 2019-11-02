<script>
  import { colorValues } from './colors.js'
  import ColorTableRow from './ColorTableRow.svelte'
</script>

<table>
  <thead>
    <tr>
      <th>Hex</th>
      <th>Red</th>
      <th>Green</th>
      <th>Blue</th>
      <th>Hue</th>
      <th>Saturation</th>
      <th>HSL Lightness</th>
      <th>LAB Lightness</th>
      <th>aStar</th>
      <th>bStar</th>
    </tr>
  </thead>
  <tbody>
    {#each $colorValues as value, idx (value.id)}
       <ColorTableRow {...value}/>
    {/each}
  </tbody>
</table>
