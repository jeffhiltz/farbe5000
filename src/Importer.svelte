<script>
  import { background, colors } from './colors.js'
  import { importText } from './text.js'
  import convert from 'color-convert'

  let raw = '111111 #111111 dogcat #777777 #eeeeee fe57a1'

  function darkestColor(values) {
    return values.reduce((darkest, current) => current.value[0] < darkest[0] ? current.value : darkest , [101, 0, 0])
  }

  function doImport() {
    const hexRegex = /[a-fA-F0-9]{6}/g
    const match = raw.match(hexRegex)
    if (match !== null) {
      const newColors = match.map((rawHex, id) => {
        const value = convert.hex.lab(rawHex)
        return {
          id,
          value,
          originalHex: rawHex,
        }
      })
      colors.set(newColors)
      background.set(darkestColor(newColors))
      importText.set(raw)
    } else {
      colors.set([])
      background.set([0, 0, 0])
      importText.set(raw)
    }
  }
</script>

<style>
  div {
    flex: 1 20rem;
    margin-right: 0.5rem;
  }

  textarea {
    width: 100%;
    height: 15rem;
    font-size: 0.8rem;
  }

  button {
    width: 100%;
  }
</style>

<div>
  <h2>Input Values</h2>
  <p>You can put any text in this import box.  When you hit the import button the tool will find any hex codes (whether they're prefixed by a # or not).  Importing will replace all values in the table with whatever values are found in the import box.</p>

  <textarea bind:value={raw}></textarea>
  <button on:click={doImport}>Import</button>
</div>
