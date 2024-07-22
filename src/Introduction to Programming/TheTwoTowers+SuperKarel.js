/* Builds two towers and then finishes on top of second tower
* Precondition: Karel is facing east on avenue and street 1
* Postcondtion: Karel has built two towers and is standing on top of 
* the second one
*/
function start(){
	buildTower();
	climbDown();
	buildTower();
	move();
	turnRight();
} //end start

/* Builds a tower 3 balls high
* Precondtion: Karel is standing on the first street one space awat from the tower
* and facing east
* Postcondtion: Karel has built a tower three balls high
*/
function buildTower(){
    move();
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
} //end buildTower

/* Climbs down from top of tower
* Precondition: Karel is on the top floor of the tower facing north
* Postcondition: Karel is on the first street facing east
*/
function climbDown(){
    turnAround();
    move();
    move();
    turnLeft();
    move();
} //end climbDown