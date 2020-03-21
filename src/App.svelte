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
    font-size: 4.5rem;
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

<h1>FARBE 5000</h1>

<p>
  A tool for analyzing and modifying color schemes based on the <a href="https://en.wikipedia.org/wiki/CIELAB_color_space">CIELAB color space</a>.  CIELAB was designed so that the same amount of numerical change in its values corresponds to roughly the same amount of visually perceived change.  Using this tool you can create a color scheme that will have a balanced appearance.
</p>
<p>Source is on GitHub: <a href="https://github.com/jeffhiltz/farbe5000">https://github.com/jeffhiltz/farbe5000</a></p>
<section>
  <Importer />
  <Exporter />
</section>
<!-- <BackgroundPicker /> -->
<!-- <SortSelector /> -->
<h2>Values</h2>
<p>
Adjust the values for the colors in the scheme.
The top graph displays the <strong>lightness</strong> values for each color.
The bottom graph displays the <strong>a*</strong> and <strong>b*</strong> values for each color.

</p>
<div id="table-and-graphs">
  <ColorTable />
  <div id="graphs">
    <LightGraph />
    <ScatterGraph />
  </div>
</div>
