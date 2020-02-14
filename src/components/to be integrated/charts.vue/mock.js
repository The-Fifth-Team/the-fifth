//import Highcharts from 'highcharts';

let columnColors = ['#547fff', '#3abf94', '#ffc247', '#f55d5d', '#9964e3', '#3c484f', '#17a2b8', '#e54e9a'];
let lineColors = ['#547fff', '#3abf94', '#ffc247'];

export var chartData = {
  apex: {
    column: {
      series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        colors: columnColors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
          labels: {
            style: {
              colors: columnColors,
              fontSize: '14px'
            }
          }
        }
      }
    }
  },
  echarts: {
    donut: {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        show: false
      },
      color: ['#547fff', '#3abf94', '#ffc247', '#f55d5d', '#9964e3'],
      series: [
        {
          name: 'Access source',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {value: 335, name: 'Direct interview'},
            {value: 310, name: 'Email marketing'},
            {value: 234, name: 'Alliance advertising'},
            {value: 135, name: 'Video ad'},
            {value: 1548, name: 'Search engine'}
          ]
        }
      ]
    },
    river: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: 'rgba(0,0,0,0.2)',
            width: 1,
            type: 'solid'
          }
        }
      },

      legend: {
        data: ['Neutral', 'Happy', 'Sad', 'Angry', 'Fearful', 'Disgusted', 'Surprised']
      },
      color: ['#547fff', '#3abf94', '#ffc247', '#f55d5d', '#9964e3', '#f35c5d', '#17a2b8'],
      singleAxis: {
        top: 50,
        bottom: 50,
        axisTick: {},
        axisLabel: {},
        type: 'time',
        axisPointer: {
          animation: true,
          label: {
            show: true
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            opacity: 0.2
          }
        }
      },

      series: [
        {
          type: 'themeRiver',
          itemStyle: {
            emphasis: {
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
          },
          data: [['2015/11/08', 10, 'Neutral'], ['2015/11/09', 15, 'Neutral'], ['2015/11/10', 35, 'Neutral'],
            ['2015/11/11', 38, 'Neutral'], ['2015/11/12', 22, 'Neutral'], ['2015/11/13', 16, 'Neutral'],
            ['2015/11/14', 7, 'Neutral'], ['2015/11/15', 2, 'Neutral'], ['2015/11/16', 17, 'Neutral'],
            ['2015/11/17', 33, 'Neutral'], ['2015/11/18', 40, 'Neutral'], ['2015/11/19', 32, 'Neutral'],
            ['2015/11/20', 26, 'Neutral'], ['2015/11/21', 35, 'Neutral'], ['2015/11/22', 40, 'Neutral'],
            ['2015/11/23', 32, 'Neutral'], ['2015/11/24', 26, 'Neutral'], ['2015/11/25', 22, 'Neutral'],
            ['2015/11/26', 16, 'Neutral'], ['2015/11/27', 22, 'Neutral'], ['2015/11/28', 10, 'Neutral'],
            ['2015/11/08', 35, 'Happy'], ['2015/11/09', 36, 'Happy'], ['2015/11/10', 37, 'Happy'],
            ['2015/11/11', 22, 'Happy'], ['2015/11/12', 24, 'Happy'], ['2015/11/13', 26, 'Happy'],
            ['2015/11/14', 34, 'Happy'], ['2015/11/15', 21, 'Happy'], ['2015/11/16', 18, 'Happy'],
            ['2015/11/17', 45, 'Happy'], ['2015/11/18', 32, 'Happy'], ['2015/11/19', 35, 'Happy'],
            ['2015/11/20', 30, 'Happy'], ['2015/11/21', 28, 'Happy'], ['2015/11/22', 27, 'Happy'],
            ['2015/11/23', 26, 'Happy'], ['2015/11/24', 15, 'Happy'], ['2015/11/25', 30, 'Happy'],
            ['2015/11/26', 35, 'Happy'], ['2015/11/27', 42, 'Happy'], ['2015/11/28', 42, 'Happy'],
            ['2015/11/08', 21, 'Sad'], ['2015/11/09', 25, 'Sad'], ['2015/11/10', 27, 'Sad'],
            ['2015/11/14', 35, 'Sad'], ['2015/11/15', 39, 'Sad'], ['2015/11/16', 40, 'Sad'],
            ['2015/11/14', 7, 'Angry'], ['2015/11/15', 2, 'Angry'], ['2015/11/16', 17, 'Angry'],

            ['2015/11/17', 36, 'Sad'], ['2015/11/18', 33, 'Sad'], ['2015/11/19', 43, 'Sad'],
            ['2015/11/08', 10, 'Angry'], ['2015/11/09', 15, 'Angry'], ['2015/11/10', 35, 'Angry'],
            ['2015/11/11', 23, 'Sad'], ['2015/11/12', 24, 'Sad'], ['2015/11/13', 21, 'Sad'],
            ['2015/11/11', 38, 'Angry'], ['2015/11/12', 22, 'Angry'], ['2015/11/13', 16, 'Angry'],
            ['2015/11/17', 33, 'Angry'], ['2015/11/18', 40, 'Angry'], ['2015/11/19', 32, 'Angry'],
            ['2015/11/20', 40, 'Sad'], ['2015/11/21', 34, 'Sad'], ['2015/11/22', 28, 'Sad'],
            ['2015/11/23', 26, 'Sad'], ['2015/11/24', 37, 'Sad'], ['2015/11/25', 41, 'Sad'],
            ['2015/11/26', 46, 'Sad'], ['2015/11/27', 47, 'Sad'], ['2015/11/28', 41, 'Sad'],
            ['2015/11/20', 26, 'Angry'], ['2015/11/21', 35, 'Angry'], ['2015/11/22', 40, 'Angry'],
            ['2015/11/23', 32, 'Angry'], ['2015/11/24', 26, 'Angry'], ['2015/11/25', 22, 'Angry'],
            ['2015/11/26', 16, 'Angry'], ['2015/11/27', 22, 'Angry'], ['2015/11/28', 10, 'Angry'],
            ['2015/11/08', 10, 'Fearful'], ['2015/11/09', 15, 'Fearful'], ['2015/11/10', 35, 'Fearful'],
            ['2015/11/11', 38, 'Fearful'], ['2015/11/12', 22, 'Fearful'], ['2015/11/13', 16, 'Fearful'],
            ['2015/11/14', 7, 'Fearful'], ['2015/11/15', 2, 'Fearful'], ['2015/11/16', 17, 'Fearful'],
            ['2015/11/17', 33, 'Fearful'], ['2015/11/18', 40, 'Fearful'], ['2015/11/19', 32, 'Fearful'],
            ['2015/11/20', 26, 'Fearful'], ['2015/11/21', 35, 'Fearful'], ['2015/11/22', 4, 'Fearful'],
            ['2015/11/23', 32, 'Fearful'], ['2015/11/24', 26, 'Fearful'], ['2015/11/25', 22, 'Fearful'],
            ['2015/11/26', 16, 'Fearful'], ['2015/11/27', 22, 'Fearful'], ['2015/11/28', 10, 'Fearful'],
            ['2015/11/08', 10, 'Disgusted'], ['2015/11/09', 15, 'Disgusted'], ['2015/11/10', 35, 'Disgusted'],
            ['2015/11/11', 38, 'Disgusted'], ['2015/11/12', 22, 'Disgusted'], ['2015/11/13', 16, 'Disgusted'],
            ['2015/11/14', 7, 'Disgusted'], ['2015/11/15', 2, 'Disgusted'], ['2015/11/16', 17, 'Disgusted'],
            ['2015/11/17', 33, 'Disgusted'], ['2015/11/18', 4, 'Disgusted'], ['2015/11/19', 32, 'Disgusted'],
            ['2015/11/20', 26, 'Disgusted'], ['2015/11/21', 35, 'Disgusted'], ['2015/11/22', 40, 'Disgusted'],
            ['2015/11/23', 32, 'Disgusted'], ['2015/11/24', 26, 'Disgusted'], ['2015/11/25', 22, 'Disgusted'],
            ['2015/11/26', 16, 'Disgusted'], ['2015/11/27', 22, 'Disgusted'],['2015/11/08', 10, 'Surprised'], ['2015/11/09', 15, 'Surprised'], ['2015/11/10', 35, 'Surprised'],
            ['2015/11/11', 38, 'Surprised'], ['2015/11/12', 22, 'Surprised'], ['2015/11/13', 16, 'Surprised'],
            ['2015/11/14', 7, 'Surprised'], ['2015/11/15', 2, 'Surprised'], ['2015/11/16', 17, 'Surprised'],
            ['2015/11/17', 33, 'Surprised'], ['2015/11/18', 4, 'Surprised'], ['2015/11/19', 32, 'Surprised'],
            ['2015/11/20', 26, 'Surprised'], ['2015/11/21', 35, 'Surprised'], ['2015/11/22', 40, 'Surprised'],
            ['2015/11/23', 32, 'Surprised'], ['2015/11/24', 26, 'Surprised'], ['2015/11/25', 22, 'Surprised'],
            ['2015/11/26', 16, 'Surprised'], ['2015/11/27', 22, 'Surprised'], ['2015/11/28', 10, 'Surprised']]
        }
      ]
    }
  },
};
