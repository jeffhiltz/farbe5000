<script>
  import { background, colors } from './colors.js'
  import convert from 'color-convert'

  let raw = '111111' // '#111111 dogcat #777777 #eeeeee fe57a1'

  function darkestHex(hexes) {
    // return hexes.reduce((darkest, current) => convert.hex.lab(current.hex)[0] < convert.hex.lab(darkest.hex)[0] ? current : darkest )
    return '#110000'
  }

  function doImport() {
    const match = raw.match(hexRegex)
    if (match !== null) {
      const hexes = match.map((rawHex, id) => {
        const hex = rawHex.startsWith('#') ? rawHex : '#' + rawHex
        return {
          id,
          hex,
        }
      })
      colors.set(hexes)
      background.set(darkestHex(hexes))
    } else {
      colors.set([])
    }
  }

  const hexRegex = /#?[a-fA-F0-9]{6}/g
</script>

<style>
  textarea { width: 100%; height: 200px; }
</style>

<h2>Raw Value Input</h2>

<textarea bind:value={raw}></textarea>
<button on:click={doImport}>Import</button>
