var INCHES_TO_CM = 2.54;
var CM_TO_METERS = 0.01;
var FEET_TO_INCHES = 12;

function start(){
	convertHeightToMeters(6, 4);
}//end start

function convertHeightToMeters(feet, inches){
    var meterValue = feet * 0.3048 + inches * 2.54 * 0.01;
    print(meterValue);
}//end convertHeightToMeters