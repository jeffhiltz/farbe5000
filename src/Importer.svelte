<script>
  import { background, colors } from './colors.js'
  import convert from 'color-convert'

  let raw = '111111' // '#111111 dogcat #777777 #eeeeee fe57a1'

  function darkestHex(hexes) {
    return hexes.reduce((darkest, current) => convert.hex.lab(current)[0] < convert.hex.lab(darkest)[0] ? current : darkest )
  }

  const hexRegex = /#?[a-fA-F0-9]{6}/g
  $: {
    const match = raw.match(hexRegex)
    if (match !== null) {
      const hexes = raw.match(hexRegex).map((rawHex) => rawHex.startsWith('#') ? rawHex : '#' + rawHex)
      colors.set(hexes)
      background.set(darkestHex(hexes))
    } else {
      colors.set([])
    }
  }
</script>

<style>
  textarea { width: 100%; height: 200px; }
</style>

<h2>Raw Value Input</h2>

<textarea bind:value={raw}></textarea>

<!--
<p>Raw: {raw}</p>

<ul>
  {#each $colors as hex}
    <li>{hex}</li>
  {/each}
</ul>
-->
