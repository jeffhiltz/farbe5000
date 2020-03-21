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
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
  }
  section {
    display: flex;
    flex-flow: row wrap;
  }

  #table-and-graphs {
    display: flex;
    flex-flow: row wrap;
  }

  #graphs {
    flex: 1;
    align-self: flex-start;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
  }
</style>

<h1>Farbe 5000</h1>

<p>A tool.</p>
<p>Source is on GitHub: <a href="https://github.com/jeffhiltz/farbe5000">https://github.com/jeffhiltz/farbe5000</a></p>
<section>
  <Importer />
  <Exporter />
</section>
<!-- <BackgroundPicker /> -->
<!-- <SortSelector /> -->
<h2>Values</h2>
<p>Some description...</p>
<div id="table-and-graphs">
  <ColorTable />
  <div id="graphs">
    <LightGraph />
    <ScatterGraph />
  </div>
</div>
