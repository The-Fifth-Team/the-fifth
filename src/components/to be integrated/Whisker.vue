<template>
  <div id="container" style="width: 75%;">
    <canvas ref="myCanvas"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import 'chartjs-chart-box-and-violin-plot';
export default {  
  name: 'Whisker',

  data(){
    return {

      emotions : [
        'Neutral',
        'Happy',
        'Sad',
        'Angry',
        'Fearful',
        'Disgust',
        'Surprise'
      ],

      chartColors : {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
      },

      color: Chart.helpers.color,

      boxplotData : {
        labels: this.emotions,
        datasets: [{
          label: 'Dataset 1',
          backgroundColor: Chart.helpers.color('rgb(54, 162, 235)').alpha(0.5).rgbString(),
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          data: this.boxplots()   
        }]
      }
    }
       
  },

  methods: {  
    drawChart() {
      new Chart(this.$refs.myCanvas, {
        type: 'horizontalBoxplot',
        data: this.boxplotData,
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Box Plot Chart'
          },
          tooltipDecimals: 4
        }
      })
    },

    boxplots() {
      const data = [];
        for(let i = 0; i < 7; i++) {
          data.push(this.randomBoxPlot(i));
        }
      return data;
    },

    randomBoxPlot(num) {
     
      function mean(array) {
        var sum = array.reduce((a, b) => a + b, 0);
        var m = sum / array.length;
        return m;
      }

      var minimum = Math.min(...this.numbers(num));
      var avrg = mean(this.numbers(num));
      var maximum = Math.max(...this.numbers(num));
  
      return {
        min: minimum,
        q1: (avrg+minimum) / 2,
        median: avrg,
        q3: (avrg+maximum) / 2,
        max: maximum,
        outliers: [this.numbers(num)[1], this.numbers(num)[3], this.numbers(num)[5]]
      };
    },

    numbers(num) {
      // data of all users emotions with this format [{id: number, neutral: number, happy: ..., sad: ..., ...........}, {}, {}, {}, ...... ]
      // var allUsersData = [{},{},{},...]; // needs to be imported from back
      // var data = [[],[],[],[],[],[],[]];
      
      // allUsersData.forEach(elm => {
      //   data[0].push(elm["neutral"]);
      //   data[1].push(elm["happy"]);
      //   data[2].push(elm["sad"]);
      //   data[3].push(elm["angry"]);
      //   data[4].push(elm["fearful"]);
      //   data[5].push(elm["disgusted"]);
      //   data[6].push(elm["surprised"]);
      // })

      var data = [
        [0.2,0.5,0.2,0.1,0.14,0.27,0.7,0.9],
        [0.3,0.2,0.12,0.55,0.6,0.44,0.9],
        [0.1,0.2,0.4,0.33,0.6,0.77,0.81],
        [0.3,0.2,0.22,0.55,0.06,0.82,0.2],
        [0.094,0.2,0.4,0.55,0.5,0.8,0.19],
        [0.65,0.2,0.4,0.55,0.23,0.17,0.55],
        [0.1,0.2,0.43,0.55,0.65,0.37,0.33]
      ]
          
      return data[num];
    }
    
  },
   
  mounted() {
    this.drawChart();
  },

  created() {
    this.boxplotData.labels = this.emotions;
  }

}
 
</script>

<style scoped>
  #canvas {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
</style>