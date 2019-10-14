<script>
  import { colors, colorValues } from './colors.js'
  import ColorTableRow from './ColorTableRow.svelte'
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
      <th>Red</th>
      <th>Green</th>
      <th>Blue</th>
      <th>Lightness</th>
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
