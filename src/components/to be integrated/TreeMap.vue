<template>
    <div>
        <h1>TreeMap</h1>
        <h3>Sum of each emotion across all people</h3>
        <canvas ref="myCanvas"></canvas>
        
    </div>
</template>

<script>
import Chart from 'chart.js';
import 'chartjs-chart-treemap';

export default {
    name: 'TreeMap',
    
    data() {
        return {
            // should be replaced with data from back (all emotions )
            dataFromBack: [
                {userId:"j111", neutral: 0.1,happy:0.5,sad:0.05  , angry: 0.1111111111111111111111111111, fearful: 0.1, disgusted:0.1 , surprised:0.05},
                {userId:"joey", neutral: 0.11, happy:1.15, sad:0.15, angry: 0.11, fearful:0.11, disgusted:0.11, surprised:0.15}, 
                {userId:"abdelly",neutral: 0.2,happy:0.3,sad:0.15  , angry: 0.19,  fearful: 0.1, disgusted:0.01,  surprised:0.05},
                {userId:"moja", neutral: 0.2,happy:0.303,sad:0.15 , angry: 0.19 ,  fearful: 0.1, disgusted:0.01, surprised:0.05 }
            ],
            
        }
    },
    
    methods: {
        drawChart() {
            new Chart(this.$refs.myCanvas, {
                
                type: "treemap",
                data: {
                    datasets: [
                    {   
                        label: 'Basic treemap',
                        tree: this.sumOfEmotions(),
                        key: "value",
                        groups: ['emotion'],
                        borderWidth: 1,
                        fontColor: "white",
                        borderColor: "rgba(200,200,200,1)",
                        //hoverBackgroundColor: "rgba(220,230,220,0.5)",
                        backgroundColor: ["#fdbb2d",  "#e8831d", "#ca4a1d", "#b51c39", "#900358",  "#4d246e", "#1a2a6c"], //  
                        // sites that might be helpful in choosing SEXY colors https://uigradients.com/#ByDesign and https://mycolor.space/gradient3
                    }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: "Emotion Distribution",
                        
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                    callbacks: {
                        title: function(item, data) {
                            item = item[0];
                            return data.datasets[item.datasetIndex].data[item.index].g;
                            },
                        label: function(item, data) {
                            var dataset = data.datasets[item.datasetIndex];
                            var dataItem = dataset.data[item.index];
                            return dataset.key + ": " + dataItem.v;
                            }
                        }
                    }
                }

            })
        },

        sum(emotion) {
            var sum = 0;
            this.dataFromBack.forEach(obj => {
                sum += obj[emotion]
            })
            return sum
        },

        sumOfEmotions() {
            var feelings = ['neutral', 'happy', 'sad', 'angry', 'surprised', 'fearful', 'disgusted'];
            var stats = [];
            
            feelings.forEach(elm => {
                stats.push({
                    emotion: elm,
                    value: this.sum(elm)
                })
            })
            return stats
        }

    },

    mounted() {
        this.drawChart();
    },
}
</script>

<style scoped>
    canvas {
        max-width: 70vw;
        min-height: 50vh; 
        margin: auto
    }
</style>