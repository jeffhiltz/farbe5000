<script>
  import { background, colors } from './colors.js'
  import convert from 'color-convert'

  let raw = '111111 #111111 dogcat #777777 #eeeeee fe57a1'

  function darkestColor(values) {
    return values.reduce((darkest, current) => current.value[0] < darkest[0] ? current.value : darkest , [101, 0, 0])
  }

  function doImport() {
    const hexRegex = /#?[a-fA-F0-9]{6}/g
    const match = raw.match(hexRegex)
    if (match !== null) {
      const newColors = match.map((rawHex, id) => {
        const value = convert.hex.lab(rawHex)
        return {
          id,
          value,
        }
      })
      colors.set(newColors)
      background.set(darkestColor(newColors))
    } else {
      colors.set([])
      background.set([0, 0, 0])
    }
  }
</script>

<style>
  textarea { width: 100%; height: 200px; }
</style>

<h2>Raw Value Input</h2>

<textarea bind:value={raw}></textarea>
<button on:click={doImport}>Import</button>
