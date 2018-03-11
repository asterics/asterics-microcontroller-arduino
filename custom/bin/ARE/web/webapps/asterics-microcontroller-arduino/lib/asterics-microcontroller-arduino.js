function demo1ledon() {
    var propertyMap = JSON.stringify(
    {
        "ButtonGrid.1":{
            "button1": "",
        }
    });
    
    console.log("Setting model properties: " + propertyMap);
    // deployModelFromWebserverApplySettingsAndStartModel("http://asterics.github.io/AsTeRICS/webapps/asterics-microcontroller-arduino/models/ArduinoDigitalOutput.acs",propertyMap);

    
}

AmCharts.ready(function() {
    makeLineChart();
});

var lineChartData = [{
    "continent": "Australia",
    "mountain": "Kosciusko",
    "height": 2228
}, {
    "continent": "Africa",
    "mountain": "Kilimanjaro",
    "height": 5895
}, {
    "continent": "Antarctica",
    "mountain": "Aconcagua",
    "height": 4897
},

{
    "continent": "Europe",
    "mountain": "Elbrus",
    "height": 5642
}, {
    "continent": "Asia",
    "mountain": "Everest",
    "height": 8850
},

{
    "continent": "South America",
    "mountain": "Aconcagua",
    "height": 6960
}, {
    "continent": "North America",
    "mountain": "McKinley",
    "height": 6194
}
];

function makeLineChart() {

    

    // SERIAL CHART
    var lineChart = new AmCharts.AmSerialChart();
    lineChart.dataProvider = lineChartData;
    lineChart.fontSize = 18;
    lineChart.fontFamily = 'Covered By Your Grace';
    lineChart.color = "#FFFFFF";
    lineChart.categoryField = "continent";
    lineChart.marginLeft = 117;
    lineChart.startDuration = 0;
    lineChart.handDrawn = true;

    lineChart.backgroundColor = "#2d2b2c";

    var balloon = lineChart.balloon;
    balloon.adjustBorderColor = false;
    balloon.borderColor = "#000000";
    balloon.fillColor = "#FFFFFF";
    balloon.verticalPadding = 0;

    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.minimum = 0;
    valueAxis.ignoreAxisWidth = true;
    valueAxis.axisColor = "#FFFFFF";
    valueAxis.gridColor = "#FFFFFF";
    lineChart.addValueAxis(valueAxis);

    // AXES
    // category
    var categoryAxis = lineChart.categoryAxis;
    categoryAxis.labelRotation = 90;
    categoryAxis.gridPosition = "start";
    categoryAxis.axisColor = "#FFFFFF";
    categoryAxis.labelRotation = 45;
    categoryAxis.gridAlpha = 0;

    // GRAPH
    var graph = new AmCharts.AmGraph();
    graph.valueField = "height";
    graph.balloonText = "<span style='font-size:14px'>[[category]]</span><br>[[mountain]]: [[value]] m.";
    graph.lineAlpha = 1;
    graph.lineColor = "#FFFFFF";
    graph.fillAlphas = 0.8;
    graph.lineThickness = 4;
    graph.bullet = "round";
    graph.pattern = {
        url: "patterns/chalk/pattern2.jpg",
        width: 600,
        height: 600
    };
    lineChart.addGraph(graph);

    // CURSOR
    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorAlpha = 0;
    chartCursor.zoomable = false;
    chartCursor.categoryBalloonEnabled = false;
    lineChart.addChartCursor(chartCursor);

    lineChart.write("lineChartDiv");
}