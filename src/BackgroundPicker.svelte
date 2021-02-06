<script>
  import { bgLightness, bgAStar, bgBStar } from './colors.js'
</script>

<h2>Background Colour</h2>
<label>Lightness:<input type=number min=0 max=100 bind:value={$bgLightness}></label>
<label>aStar:<input type=number min=-86 max=98 bind:value={$bgAStar}></label>
<label>bStar:<input type=number min=-108 max=94 bind:value={$bgBStar}></label>
