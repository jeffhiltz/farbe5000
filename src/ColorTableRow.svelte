<script>
  import { colors, colorValues, bgLightness, bgAStar, bgBStar } from './colors.js'
  import { createEventDispatcher } from 'svelte';

  export let id

  export let lightness
  export let aStar
  export let bStar

  export let position

  function setColor(lightness, aStar, bStar) {
    colors.update(cols => {
      cols[position].value = [lightness, aStar, bStar]
      return cols
    })
  }

  function setBackground() {
    bgLightness.set(lightness)
    bgAStar.set(aStar)
    bgBStar.set(bStar)
  }

  // handle changes to LAB values
  $: setColor(lightness, aStar, bStar);

  const dispatch = createEventDispatcher();

  function handleDelete(event) {
    dispatch('deleteRow', {
      id,
    })
  }
</script>

<style>
  input[type=number] {
    width: 4em;
  }

  td {
    text-align: center;
    border-left: 1px solid var(--grey80);
    border-right: 1px solid var(--grey80);
  }
</style>

<tr>
  <td><button on:click={setBackground}>&nbsp</button></td>
  <td><button on:click={handleDelete}>X</button></td>
  <td bgcolor="{$colorValues[id].hex}"></td>
  <td><input type=number min=0 max=100 bind:value={lightness}></td>
  <td><input type=number min=-86 max=98 bind:value="{aStar}"></td>
  <td><input type=number min=-108 max=94 bind:value="{bStar}"></td>
  <td>{$colorValues[id].hex}</td>
  <td>{$colorValues[id].red}</td>
  <td>{$colorValues[id].green}</td>
  <td>{$colorValues[id].blue}</td>
</tr>
