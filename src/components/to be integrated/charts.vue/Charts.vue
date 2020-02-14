<template>
<div class="charts-overview">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">YOU ARE HERE</li>
    <li class="breadcrumb-item active">Charts</li>
  </ol>
  <h1 class="page-title">
    Visual -
    <span class="fw-semi-bold">Charts</span>
  </h1>
  <div>
    <b-row>
      <b-col xs="12" lg="7">
        <Widget title="<h5>Apex <span class='fw-semi-bold'>Column Chart</span></h5>" close collapse customHeader>
          <apexchart type="bar" height="350" :series="cd.apex.column.series" :options="cd.apex.column.options" />
        </Widget>
      </b-col>
      <b-col xs="12" lg="6">
        <Widget title="<h5>Echart <span class='fw-semi-bold'>Donut Chart</span></h5>" close collapse customHeader>
          <echart :options="cd.echarts.donut" :init-options="initEchartsOptions" style="height: 175px"></echart>
        </Widget>
      </b-col>
      <b-col xs="12" lg="12">
        <Widget title="<h5>Echart <span class='fw-semi-bold'>River Chart</span></h5>" close collapse customHeader>
          <echart :options="cd.echarts.river" :init-options="initEchartsOptions" style="height: 350px;"></echart>
        </Widget>
      </b-col>
    </b-row>
  </div>
</div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import {chartData} from './mock';
import ECharts from 'vue-echarts/components/ECharts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/themeRiver';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';


export default {
  name: "Charts",
  components: {
    Widget,
    echart: ECharts
  },
  data() {
    return {
      cd: chartData,
      initEchartsOptions: {
        renderer: 'canvas'
      }
    };
  },
  created() {
    let updatedOptions = Object.create(this.cd)
    this.$apollo.query({
      query: getPeriodEmotions,
      variables: {
        startDate: (Date.now() - (24 * 60 * 60 * 1000)).toString(),
        endDate: Date.now().toString()
      }
    }).then((results) => {
      let fetchedData = []
      results['averages'].forEach((emotionEntry, i) => {
        let time = new Date(parseInt(results['timeStamps'][i]))
        let timeStamp = time.getHours() + ":" + time.getMinutes()
        Array.prototype.push.apply(fetchedData, [
          [timeStamp, emotionEntry[0], "Neutral"],
          [timeStamp, emotionEntry[1], "Happy"],
          [timeStamp, emotionEntry[2], "Sad"],
          [timeStamp, emotionEntry[3], "Angry"],
          [timeStamp, emotionEntry[4], "Fearful"],
          [timeStamp, emotionEntry[5], "Disgusted"],
          [timeStamp, emotionEntry[6], "Surprised"]
        ])
      })
      updatedOptions['river']['series'][0]['data'] = fetchedData
      this.cd = updatedOptions
   })
  }
};
</script>
