function demo2ledon() {
    var propertyMap = JSON.stringify(
    {
        "ButtonGrid.1":{
            "button1": "",
        }
    });
    
    console.log("Setting model properties: " + propertyMap);
    // deployModelFromWebserverApplySettingsAndStartModel("http://asterics.github.io/AsTeRICS/webapps/asterics-microcontroller-arduino/models/ArduinoDigitalOutput.acs",propertyMap);

    demo2circuitsvg = document.getElementById("demo2circuitsvg");
    try { 
        svgDemo2Circuit = demo2circuitsvg.getSVGDocument();
    } catch (svgDemo2Circuit) {
        svgDemo2Circuit = demo2circuitsvg.contentDocument;
    }

    demo2ledanimation = svgDemo2Circuit.getElementById("demo2ledanimation");
    demo2ledanimation.outerHTML='<animate xmlns="http://www.w3.org/2000/svg" id="demo2ledanimation" calcMode="discrete" dur="1s" attributeName="fill" values="red; red;" repeatCount="indefinite"/>';

    
    demo2svg = document.getElementById("demo2svg");
    try { 
        svgDemo2 = demo2svg.getSVGDocument();
    } catch (svgDemo2) {
        svgDemo2 = demo2svg.contentDocument;
    }

    demo2led = svgDemo2.getElementById("demo2led");
    demo2led.outerHTML='<path xmlns="http://www.w3.org/2000/svg" inkscape:connector-curvature="0" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" id="demo2led" d="m 385.53406,308.49453 -256,0 c -11.771,0 -21.333,-9.573 -21.333,-21.333 0,-11.76 9.563,-21.333 21.333,-21.333 l 10.667,0 c 5.896,0 10.667,-4.771 10.667,-10.667 l 0,-138.667 c 0,-58.812996 47.854,-106.6669963 106.667,-106.6669963 58.813,0 106.666,47.8550003 106.666,106.6669963 l 0,138.667 c 0,5.896 4.771,10.667 10.667,10.667 l 10.666,0 c 11.771,0 21.333,9.573 21.333,21.333 0,11.76 -9.562,21.333 -21.333,21.333 z" style="fill:#ff5555;fill-opacity:1"/>';
}



function demo2ledoff() {
    demo2circuitsvg = document.getElementById("demo2circuitsvg");
    try { 
        svgDemo2Circuit = demo2circuitsvg.getSVGDocument();
    } catch (svgDemo2Circuit) {
        svgDemo2Circuit = demo2circuitsvg.contentDocument;
    }

    demo2ledanimation = svgDemo2Circuit.getElementById("demo2ledanimation");
    demo2ledanimation.outerHTML='<animate xmlns="http://www.w3.org/2000/svg" id="demo2ledanimation" calcMode="discrete" dur="1s" attributeName="fill" values="none; none;" repeatCount="indefinite"/>';

    demo2svg = document.getElementById("demo2svg");
    try { 
        svgDemo2 = demo2svg.getSVGDocument();
    } catch (svgDemo2) {
        svgDemo2 = demo2svg.contentDocument;
    }

    demo2led = svgDemo2.getElementById("demo2led");
    demo2led.outerHTML='<path xmlns="http://www.w3.org/2000/svg" inkscape:connector-curvature="0" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" id="demo2led" d="m 385.53406,308.49453 -256,0 c -11.771,0 -21.333,-9.573 -21.333,-21.333 0,-11.76 9.563,-21.333 21.333,-21.333 l 10.667,0 c 5.896,0 10.667,-4.771 10.667,-10.667 l 0,-138.667 c 0,-58.812996 47.854,-106.6669963 106.667,-106.6669963 58.813,0 106.666,47.8550003 106.666,106.6669963 l 0,138.667 c 0,5.896 4.771,10.667 10.667,10.667 l 10.666,0 c 11.771,0 21.333,9.573 21.333,21.333 0,11.76 -9.562,21.333 -21.333,21.333 z" style="fill:#c35555;fill-opacity:1"/>';
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