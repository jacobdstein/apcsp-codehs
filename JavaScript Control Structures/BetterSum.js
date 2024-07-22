var MIN = readInt("Enter a number: ");
var MAX = readInt("Enter a number greater than the previous one: ");

function start(){
	var sum = 0;
	for(var i = MIN; i <= MAX; i++){
	    sum = sum + i;
	}//end for
	println(sum);
}//end start