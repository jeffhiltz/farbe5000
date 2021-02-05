<script>
  import { flip } from "svelte/animate"
  import { dndzone } from "svelte-dnd-action"
  import { colors, colorValues, maxId } from './colors.js'
  import ColorTableRow from './ColorTableRow.svelte'

  const flipDurationMs = 100

  function handleDndConsider(event) {
    colors.set(event.detail.items)
  }

  function handleDndFinalize(event) {
    colors.set(event.detail.items)
  }

  function changeSortOrder(event) {
    const oldPos = event.detail.oldPos;
    const newPos = event.detail.newPos;
    if (newPos >= 0 && newPos < $colors.length) {
      colors.update(cols => {
        cols.splice(newPos, 0, cols.splice(oldPos, 1)[0]);
        return cols;
      });
    }
  }

  function addRow() {
    const newRow = {
      id: $maxId + 1,
      value: [0, 0, 0],
      originalHex: '',
    };
    colors.set([...$colors, newRow]);
  }

  function deleteRow(event) {
    colors.update(cols => {
      const idx = cols.findIndex(col => col.id == event.detail.id)
      cols.splice(idx, 1)
      return cols
    })
  }

  function removeDuplicates() {
    colors.update(cols => {
      const seen = new Set()
      return cols.filter(color => {
        const k = JSON.stringify(color.value)
        return seen.has(k) ? false : seen.add(k)
      })
    })
  }

</script>

<style>
  div {
    display: flex;
    flex-flow: column;
  }

  table {
    border-collapse: collapse;
  }

  th {
    border-left: 1px solid var(--grey80);
    border-right: 1px solid var(--grey80);
    padding-left: 0.5em;
    padding-right: 0.5em;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background-color: var(--grey100);
    background-clip: padding-box;
    font-weight: 700;
  }

  button {
    margin-top: 0.5rem;
  }
</style>

<div>
  <table>
    <thead>
      <tr>
        <th>Move</th>
        <th>Delete</th>
        <th>Swatch</th>
        <th>Lightness</th>
        <th>aStar (G-R)</th>
        <th>bStar (B-Y)</th>
        <th>Hex</th>
        <th>Red</th>
        <th>Green</th>
        <th>Blue</th>
      </tr>
    </thead>
    <tbody use:dndzone="{{items: $colors, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
      {#each $colors as color, idx (color.id)}
      <ColorTableRow on:sortChange={changeSortOrder} on:deleteRow={deleteRow} id={color.id} lightness={color.value[0]} aStar={color.value[1]} bStar={color.value[2]} position={idx} />
      {/each}
    </tbody>
  </table>
  <button on:click={addRow}>Add Row</button>
  <button on:click={removeDuplicates}>Remove Duplicates</button>
</div>
