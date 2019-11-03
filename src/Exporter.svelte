<script>
  import { background, colors } from './colors.js'
  import convert from 'color-convert'

  const text = ''

  function doExport() {
  }
</script>

<style>
  textarea { width: 100%; height: 200px; }
</style>

<h2>Export Modified Values</h2>

<textarea readonly bind:value={text}></textarea>
<button on:click={doExport}>Export</button>
