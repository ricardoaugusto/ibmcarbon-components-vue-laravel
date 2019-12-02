<template>
  <div class="bx--grid bx--grid--full-width">
    <div class="bx--row">
      <div class="bx--col">
        <h1>
          Dashboard
        </h1>
        <hr />
        <h2 class="title" style="margin-bottom: 0">
          Some data
        </h2>
        <chart-stacked-bar />
        <div class="bx--row">
          <div class="bx--col-lg-6">
            <h2 class="title" style="margin-top: 20px; margin-bottom: 0">
              Sample 1
            </h2>
            <chart-line />
            <small style="position:relative;top: 20px">Sample 2</small>
          </div>
          <div class="bx--col-lg-6">
            <h2 class="title" style="margin-top: 20px; margin-bottom: 0">
              Sample 3
            </h2>
            <chart-scatter />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartStackedBar from "../../components/ChartStackedBar";
import ChartLine from "../../components/ChartLine";
import ChartScatter from "../../components/ChartScatter";

export default {
  components: { ChartStackedBar, ChartLine, ChartScatter },
  data: function() {
    return {
      loadingText: "Loading data...",
      loadedText: "Data loaded.",
      loading: true,
      content: {}
    };
  },
  props: {},
  methods: {},
  created() {
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped></style>
