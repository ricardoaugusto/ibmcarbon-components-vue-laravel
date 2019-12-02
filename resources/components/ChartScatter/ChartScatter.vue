<template>
  <ccv-scatter-chart
    :data="stackedBarData"
    :options="stackedBarOptions"
  ></ccv-scatter-chart>
</template>
<script>
import "@carbon/charts/styles.css";
import { defaultColors } from "@carbon/charts";

const stackedBarData = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
  datasets: [
    {
      label: "30",
      backgroundColors: [defaultColors[0]],
      data: [22, 38, 30, 24, 29, 36]
    },
    {
      label: "36",
      backgroundColors: [defaultColors[1]],
      data: [20, 28, 22, 24, 29, 36]
    },
    {
      label: "40",
      backgroundColors: [defaultColors[2]],
      data: [12, 8, 10, 7, 11, 6]
    },
    {
      label: "44",
      backgroundColors: [defaultColors[3]],
      data: [6, 8, 10, 4, 9, 3]
    }
  ]
};

const stackedBarOptions = {
  scales: {
    x: {
      title: "Faturamento 2019"
    },
    y: {
      title: "Figures"
    }
  },
  axes: {
    left: {
      primary: true
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
