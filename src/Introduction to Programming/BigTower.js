/* This program draws a big tower from Karel's starting spot */
function start(){
    faceNorth();
    buildTower();
} //end start
	
function faceNorth(){	
    while(notFacingNorth()) {
	    turnLeft();
	} //end while
} //end faceNorth

function buildTower(){
    putBall();
	while (frontIsClear()) {
	    move();
	    putBall();
	} //end while
}//end buildTower