<script>
  import { exportText } from './text.js'
  import convert from 'color-convert'
</script>

<style>
  textarea { width: 100%; height: 200px; }
</style>

<h2>Export Modified Values</h2>

<textarea readonly bind:value={$exportText}></textarea>
