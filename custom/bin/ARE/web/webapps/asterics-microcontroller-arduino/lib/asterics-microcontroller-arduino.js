var demo1, demo4, demo5;
var demo1_circuit, demo4_circuit, demo5_circuit;

var demo2, demo2_led, demo2_circuit, demo2_animation, demo2_circuit_led, demo2_circuit_status=false;
var demo3, demo2_led, demo3_circuit, demo3_animation, demo3_circuit_led, demo3_circuit_text, demo3_circuit_status=true, demo3_dutycycle=100;

var animation_default_speed = 1000;

function load_svg(id) {
    item_obj = document.getElementById(id);
    try {
        item_svg = item_obj.getSVGDocument();
    } catch (item_svg) {
        item_svg = item_obj.contentDocument;
    }
    return item_svg;
}

window.addEventListener("load", function load(event) {

    // Remove listener again. One-time execution.
    window.removeEventListener("load", load, false); 

    // Demo 1: Digital Input
    demo1 = load_svg("svg_demo1");
    demo1_circuit = load_svg("svg_demo1_circuit");
    
    // Demo 2: Digital Ouput    
    demo2 = load_svg("svg_demo2");
    demo2_circuit = load_svg("svg_demo2_circuit");

    demo2_led = demo2.getElementById("demo2_led");
    demo2_circuit_led = demo2_circuit.getElementById("demo2_led");
    
    demo2_animation = setInterval(function demo2_animation() {
        if (demo2_circuit_status) {
            demo2_circuit_status = false;
            demo2_led.setAttribute("fill","rgb(90%,20%,20%)");
            demo2_circuit_led.setAttribute("fill","red");
        } else {
            demo2_circuit_status = true;
            demo2_circuit_led.setAttribute("fill","white");
            demo2_led.setAttribute("fill","rgb(45%,45%,45%)");
        }
    },animation_default_speed);

    // Demo 3: PWM
    demo3 = load_svg("svg_demo3");
    demo3_circuit = load_svg("svg_demo3_circuit");

    demo3_led = demo3.getElementById("demo3_led");
    demo3_circuit_led = demo3_circuit.getElementById("demo3_led");
    slider = document.getElementById("demo3slider");
    document.getElementById("demo3label").innerHTML = "Duty Cycle: " + slider.value + "%";

    demo3_circuit_text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    demo3_circuit_text.setAttribute("x","90");
    demo3_circuit_text.setAttribute("y","83");
    demo3_circuit_text.setAttribute("style","font-style:normal;font-weight:normal;font-size:24px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1");
    demo3_circuit.getElementById("svg2").appendChild(demo3_circuit_text);
    
    demo3_animation = setInterval(function demo3_animation() {
        gb_value = 100 - demo3_dutycycle;
        rgb_value = "rgb(100%," + gb_value + "%," + gb_value + "%)";

        gb_value_ard = 20 + 25 * (gb_value/100);
        r_value_ard = 45 + 45 * ((100-gb_value)/100);
        rgb_value_ard = "rgb(" + r_value_ard + "%," + gb_value_ard + "%," + gb_value_ard + "%)";

        demo3_led.setAttribute("fill",rgb_value_ard);
        demo3_circuit_led.setAttribute("fill",rgb_value);
        demo3_circuit_text.innerHTML = String(demo3_dutycycle) + "%";
        
        if (demo3_dutycycle > 0) {
            demo3_dutycycle -= 10; 
        } else {
            demo3_dutycycle = 100;
        }
    },animation_default_speed);


    // Load references to svg elements
    demo4 = load_svg("svg_demo4");
    demo5 = load_svg("svg_demo5");

    demo4_circuit = load_svg("svg_demo4_circuit");
    demo5_circuit = load_svg("svg_demo5_circuit");
    
});

/* 
 * Demo 2: Digital Output
 */
function demo2_application(id) {
    // Remove startup animation
    clearInterval(demo2_animation);

    if (id == "demo2buttonon") {
        demo2_circuit_led.setAttribute("fill","red");
        demo2_led.setAttribute("fill","rgb(90%,20%,20%)");
    } else if (id == "demo2buttonoff") {
        demo2_circuit_led.setAttribute("fill","white");
        demo2_led.setAttribute("fill","rgb(45%,45%,45%)");
    }
}

/* 
 * Demo 3: PWM
 */
function demo3_application(id) {
    // Remove startup animation
    clearInterval(demo3_animation);

    slider = document.getElementById("demo3slider");
    label = document.getElementById("demo3label");
    dutycycle = slider.value;

    if (id == "demo3buttonon") {
        demo3_circuit_status = true;
    } else if (id == "demo3buttonoff") {
        demo3_circuit_status = false;
    } else if (id == "demo3slider") {
    }
    
    label.innerHTML = "Duty Cycle: " + dutycycle + "%";
    
    if (demo3_circuit_status) {
        gb_value = 100 - dutycycle;
        rgb_value = "rgb(100%," + gb_value + "%," + gb_value + "%)";

        gb_value_ard = 20 + 25 * (gb_value/100);
        r_value_ard = 45 + 45 * ((100-gb_value)/100);
        rgb_value_ard = "rgb(" + r_value_ard + "%," + gb_value_ard + "%," + gb_value_ard + "%)";
    } else {
        rgb_value = "rgb(100%,100%,100%)";
        rgb_value_ard = "rgb(45%,45%,45%)";
    }
    demo3_circuit_text.innerHTML = String(dutycycle) + "%";
    demo3_led.setAttribute("fill",rgb_value_ard);
    demo3_circuit_led.setAttribute("fill",rgb_value);
}