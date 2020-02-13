<template>
    <div>
        <h1>Scatter Plot</h1>
        <h2></h2>
        <canvas ref="myCanvas" ></canvas>

    </div>
</template>

<script>
import Chart from 'chart.js';
var clustering = require('density-clustering');
var PCA = require('pca-js');


export default {
    name: 'Scatter',

    data() {
        return {
            // this dataFomBack needs to be imported 
            dataFromBack: [
                {userId:"j111", neutral: 0.1,happy:0.5,sad:0.05  , angry: 0.1111111111111111111111111111, fearful: 0.1, disgusted:0.1 , surprised:0.05},
                {userId:"joey", neutral: 0.11, happy:0.15, sad:0.15, angry: 0.11, fearful:0.11, disgusted:0.11, surprised:0.15}, 
                {userId:"abdelly",neutral: 0.2,happy:0.3,sad:0.15  , angry: 0.19,  fearful: 0.1, disgusted:0.01,  surprised:0.05},
                {userId:"moja", neutral: 0.2,happy:0.303,sad:0.15 , angry: 0.19 ,  fearful: 0.1, disgusted:0.01, surprised:0.05 }
            ],// will be imported from back
                        
            dbscan : new clustering.DBSCAN(),
            
        }
    },

    methods: {

        drawChart() {
            new Chart(this.$refs.myCanvas, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'Scatter Dataset',
                        pointBackgroundColor: this.assignColors(),
                        data: this.pairs(),
                        pointHoverRadius: 8,
                        backgroundColor: "white"
                    },
                    {
                        label: 'Noise',
                        pointBackgroundColor: "red",
                        data: this.dataNoise(),
                        pointHoverRadius: 8,
                        backgroundColor: "red",
                        hidden: true                                		
                    },
                    {
                        label: 'Cluster 1',
                        pointBackgroundColor: "blue",
                        data: this.dataClus1(),
                        pointHoverRadius: 8,
                        backgroundColor: "blue",
                        hidden: true   
                    },
                    {
                        label: 'Cluster 2',
                        pointBackgroundColor: "green",
                        data: this.dataClus2(),
                        pointHoverRadius: 8,
                        backgroundColor: "green",
                        hidden: true 
                    },
                    {
                        label: 'Cluster 3',
                        pointBackgroundColor: "orange",
                        data: this.dataClus3(),
                        pointHoverRadius: 8,
                        backgroundColor: "orange",
                        hidden: true 
                    },
                    {
                        label: 'Cluster 4',
                        pointBackgroundColor: "indigo",
                        data: this.dataClus4(),
                        pointHoverRadius: 8,
                        backgroundColor: "indigo",
                        hidden: true 
                    },
                    {
                        label: 'Cluster 5',
                        pointBackgroundColor: "yellow",
                        data: this.dataClus5(),
                        pointHoverRadius: 8,
                        backgroundColor: "yellow",
                        hidden: true 
                    }
                    ]
                },
                options: {
                    responsive: true,
                    
                    legend: {
                        display: true,
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Scatter Plot Chart'

                    },
                    scales: {
                        xAxes: [{
                            type: 'linear',
                            position: 'bottom',
                            // ticks: {
                            //     stepSize: 500
                            // },
                            scaleLabel: {
                                display: true,
                                labelString: 'PCA 1',
                                fontSize:20,
                                padding:6
                            }
                        }],
                        yAxes: [{
                            type: 'linear',
                            scaleLabel: {
                                display: true,
                                labelString: 'PCA 2',
                                fontSize:20,
                                padding:6
                            }
                        }]
                    },

                    tooltips: {
                        displayColors: false,
                        callbacks: {
                            title(item, data) {
                                var index = item[0]["index"] 
                                var ids = data.datasets[0]["data"][index]["id"]
                                return ids
                            },
                            label(item, data) {
                                var index = item["index"]
                                var stats = data.datasets[0]["data"][index]["emotions"]
                                //console.log(stats)
                                //console.log('DATA', data)
                                return stats
                            }
                        } 
                    },
                }
            })
        },

        clusters() {
            return this.dbscan.run(this.transformBackData(), 0.01, 2)
        },

        noise() {
            return this.dbscan.noise
        },

        vectors() {
            return PCA.getEigenVectors(this.transformBackData())
        },

        adData() {
            return PCA.computeAdjustedData(this.transformBackData(),this.vectors()[0],this.vectors()[1])["adjustedData"]
        },

        pairs() {
            var xs = this.adData()[0];
            var ys = this.adData()[1];
            var xAndYs = [];


            for (let i = 0; i < xs.length; i++) {
                var feels = {...this.dataFromBack[i]};
                delete feels["userId"];
                var str = JSON.stringify(feels)
                xAndYs.push({x:xs[i]+0.5, y:ys[i]+0.5, id: this.storeIDs()[i], emotions:str })
            }

            return xAndYs 
        },

        dataNoise() {
            var noise = [];
            if(this.noise()) {
                this.noise().forEach(elm => {
                    this.pairs().forEach(obj => {
                        if(obj["id"] === this.dataFromBack[elm]["userId"]) {
                            noise[elm] = obj
                        } 
                    })
                })
            }
            
            return noise
        },

        dataClus1() {
            var clus1 = [];
            
            if(this.clusters()[0]) {
                this.clusters()[0].forEach(elm => {
                    this.pairs().forEach(obj => {
                        if(obj["id"] === this.dataFromBack[elm]["userId"]) {
                            clus1[elm] = obj
                        }
                    })
                })
            }
            
            return clus1
        },

        dataClus2() {
            var clus2 = [];
            
            if(this.clusters()[1]) {
                this.clusters()[1].forEach(elm => {
                    this.pairs().forEach(obj => {
                        if(obj["id"] === this.dataFromBack[elm]["userId"]) {
                            clus2[elm] = obj
                        }
                    })
                })
            }
            
            return clus2
        },

        dataClus3() {
            var clus3 = [];
            
            if(this.clusters()[2]) {
                this.clusters()[2].forEach(elm => {
                    this.pairs().forEach(obj => {
                        if(obj["id"] === this.dataFromBack[elm]["userId"]) {
                            clus3[elm] = obj
                        }
                    })
                })
            }
            
            return clus3
        },

        dataClus4() {
            var clus4 = [];
            
            if(this.clusters()[3]) {
                this.clusters()[3].forEach(elm => {
                    this.pairs().forEach(obj => {
                        if(obj["id"] === this.dataFromBack[elm]["userId"]) {
                            clus4[elm] = obj
                        }
                    })
                })
            }
            
            return clus4
        },

        dataClus5() {
            var clus5 = [];
            
            if(this.clusters()[4]) {
                this.clusters()[4].forEach(elm => {
                    this.pairs().forEach(obj => {
                        if(obj["id"] === this.dataFromBack[elm]["userId"]) {
                            clus5[elm] = obj
                        }
                    })
                })
            }
            
            return clus5
        },

        assignColors() {
            var clusters = this.clusters();
            var noise = this.noise();
            var colors = [];
            var matchedColors = {
                noise: 'red',
                clus0: 'blue' ,
                clus1: 'green',
                clus2: 'orange',
                clus3: 'indigo',
                clus4: 'yellow',
                clus5: 'purple',
                clus6: 'navy'             
            }
            
            for (let i= 0; i < this.transformBackData().length; i++) {

                if(noise.includes(i)) {
                    colors[i] = matchedColors["noise"]
                } else {
                    for (let j = 0; j < clusters.length; j++) {
                        var theCluster = "clus" + j ;
                        if(clusters[j].includes(i)) {
                            colors[i] = matchedColors[theCluster]  
                        }
                    }
                }
                         
            }    
            return colors
        },

        transformBackData() {
            var dataset = [];
            this.dataFromBack.forEach(obj => {
                dataset.push([obj["neutral"], obj["happy"], obj["sad"], obj["angry"], obj["fearful"], obj["disgusted"], obj["surprised"]])
            })

            return dataset
        },

        storeIDs() {
            var objIDs = [];
            this.dataFromBack.forEach(obj => {
                objIDs.push(obj["userId"]) 
                
            })
            return objIDs
        },

        

        
    },

    mounted() {
        this.drawChart();
        //this.storeIDs()
        //this.assignColors()
    },

    // created() {
    //   this.ids = this.storeIDs()  
      
    // }

}


</script>

<style scoped>
    canvas {
        max-width:1000px;
        margin: auto;
    }
</style>