//Declare a constant here to represent the cost of a frisbee
var COST_OF_FRISBEE = 15;

function start(){
	var numFrisbees = readInt("How many frisbees do you want? ");
	println("Your frisbees cost $" + numFrisbees * COST_OF_FRISBEE);
}//end start