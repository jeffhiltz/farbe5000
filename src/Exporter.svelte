<script>
  import { exportText } from './text.js'
  import convert from 'color-convert'
</script>

<style>
  div {
    flex: 1 20rem;
    box-sizing: content-box;
    margin-left: 0.5rem;
  }

  textarea {
    width: 100%;
    height: 15rem;
  }
</style>

<div>
  <h2>Export Modified Values</h2>
  <p>The export box will contain a copy of the contents of the import box.  In the exoprt box the imported hex codes will be replaced by their new, modified values.  The values of the export box are updated in real-time and cannot be manually modified.</p>

  <textarea readonly bind:value={$exportText}></textarea>
</div>
