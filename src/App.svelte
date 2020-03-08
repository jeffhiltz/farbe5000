<script>
  import BackgroundPicker from './BackgroundPicker.svelte'
  // import SortSelector from './SortSelector.svelte'
  import ColorTable from './ColorTable.svelte'
  import Importer from './Importer.svelte'
  import Exporter from './Exporter.svelte'
  import LightGraph from './LightGraph.svelte'
  import ScatterGraph from './ScatterGraph.svelte'
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Farbe 5000</h1>

<Importer />
<Exporter />
<BackgroundPicker />
<!-- <SortSelector /> -->
<ColorTable />
<LightGraph />
<ScatterGraph />
