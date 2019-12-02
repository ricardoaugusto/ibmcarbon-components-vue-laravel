<template>
  <ccv-stacked-bar-chart
    :data="stackedBarData"
    :options="stackedBarOptions"
  ></ccv-stacked-bar-chart>
</template>
<script>
import "@carbon/charts/styles.css";
import { defaultColors } from "@carbon/charts";

const stackedBarData = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
  datasets: [
    {
      label: "Point A",
      backgroundColors: [defaultColors[0]],
      data: [65000, 29123, 35213, 51213, 16932, 52348]
    },
    {
      label: "Point B",
      backgroundColors: [defaultColors[1]],
      data: [32432, 21312, 56456, 21312, 34234, 32841]
    },
    {
      label: "Point C",
      backgroundColors: [defaultColors[2]],
      data: [12312, 23232, 34232, 12312, 34234, 23125]
    }
  ]
};

const stackedBarOptions = {
  scales: {
    x: {
      title: "Sample 3"
    },
    y: {
      title: "Figures",
      formatter: axisValue => {
        return `${axisValue / 1000}k`;
      },
      stacked: true
    }
  },
  axes: {
    left: {
      primary: true,
      stacked: true
    },
    bottom: {
      scaleType: "labels",
      secondary: true
    }
  },
  legendClickable: true,
  containerResizable: true,
  width: "100%",
  height: 300
};

export default {
  name: "ChartStackedBar",
  components: {},
  data() {
    return {
      stackedBarData,
      stackedBarOptions
    };
  }
};
</script>
