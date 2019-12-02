<template>
  <ccv-grouped-bar-chart
    :data="lineChartData"
    :options="lineChartOptions"
  ></ccv-grouped-bar-chart>
</template>
<script>
import "@carbon/charts/styles.css";
import { defaultColors } from "@carbon/charts";

const lineChartData = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
  datasets: [
    {
      label: "Status 1",
      backgroundColors: [defaultColors[0]],
      data: [-3420, -923, 3213, -891, -2932, -248]
    },
    {
      label: "Status 2",
      backgroundColors: [defaultColors[3]],
      data: [2432, 1312, -1456, 1438, -734, 2841]
    }
  ]
};

const lineChartOptions = {
  scales: {
    x: {
      title: "Sample 2"
    },
    y: {
      title: "Figures",
      formatter: axisValue => {
        return `${axisValue / 1000}k`;
      },
      line: true
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
  name: "ChartLine",
  components: {},
  data() {
    return {
      lineChartData,
      lineChartOptions
    };
  }
};
</script>
