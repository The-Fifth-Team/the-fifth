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
    updatedOptions = Object.create(this.cd)

    this.$apollo.query({
      query: getPeriodEmotions,
      variables: {
        startDate: (Date.now() - (24 * 60 * 60 * 1000)).toString(),
        endDate: Date.now().toString()
      }
    }).then((results) => {

      // var timeTable = ["0:00", "0:15", "0:30", "0:45", "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45",
      //   "5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30", "7:45", "8:00", "8:15", "8:30", "8:45", "9:00", "9:15", "9:30", "9:45",
      //   "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45",
      //    "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45",
      //   "20:00", "20:15", "20:30", "20:45", "21:00", "21:15", "21:30", "21:45", "22:00", "22:15", "22:30", "22:45", "23:00", "23:15", "23:30", "23:45", "24:00"]
      //
      // var date = new Date(Date.now() - (24 * 60 * 60 * 1000))
      // var timeStamp = date.getHours() + ":" + date.getMinutes()
      // Date.parse('01/01/2011 '+timeStamp+":00")
      // timeTable.forEach((val) => {
      //   console.log(Date.parse('01/01/2011 '+timeStamp+":00")>Date.parse('01/01/2011 '+val+":00"))
      // })

      let fetchedData = []
      results.forEach((emotionEntry, i) => {
        Array.prototype.push.apply(fetchedData, [
          ["TimeStamp", emotionEntry[0], "Neutral"],
          ["TimeStamp", emotionEntry[1], "Happy"],
          ["TimeStamp", emotionEntry[2], "Sad"],
          ["TimeStamp", emotionEntry[3], "Angry"],
          ["TimeStamp", emotionEntry[4], "Fearful"],
          ["TimeStamp", emotionEntry[5], "Disgusted"],
          ["TimeStamp", emotionEntry[6], "Surprised"]
        ])
      })
      updatedOptions['river']['series'][0]['data'] = fetchedData
      this.cd = updatedOptions
   })
  }
};
</script>
