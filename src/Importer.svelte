<script>
  import { colors } from './colors.js'

  let raw = '111111' // '#111111 dogcat #777777 #eeeeee fe57a1'

  const hexRegex = /#?[a-fA-F0-9]{6}/g
  $: {
    const match = raw.match(hexRegex)
    if (match !== null) {
      colors.set(raw.match(hexRegex).map((rawHex) => rawHex.startsWith('#') ? rawHex : '#' + rawHex))
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
