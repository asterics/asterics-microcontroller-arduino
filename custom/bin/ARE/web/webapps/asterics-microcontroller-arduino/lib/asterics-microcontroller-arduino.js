function demo1ledon() {
    var propertyMap = JSON.stringify(
    {
        "ButtonGrid.1":{
            "button1": "",
        }
    });
    
    console.log("Setting model properties: " + propertyMap);
    deployModelFromWebserverApplySettingsAndStartModel("http://asterics.github.io/AsTeRICS/webapps/asterics-microcontroller-arduino/models/ArduinoDigitalOutput.acs",propertyMap);
}