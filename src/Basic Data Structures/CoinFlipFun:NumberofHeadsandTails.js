var NUM_FLIPS = 100;

function start(){
	var flips = flipCoins();
	printArray(flips);
	println(countHeadsAndTails(flips));
}//end start

// This function should flip a coin NUM_FLIPS
// times, and add the result to an array. We
// return the result to the caller.
function flipCoins(){
	var flips = [];
	for(var i = 0; i < NUM_FLIPS; i++){
		if(Randomizer.nextBoolean()){
			flips.push("Heads");
		}else{
			flips.push("Tails");
		}//end if/else
	}//end for
	return flips;
}

function printArray(arr){
	for(var i = 0; i < arr.length; i++){
		println(i + ": " + arr[i]);
	}//end for
}//end printArray

function countHeadsAndTails(arr){
    var numHeads = 0;
    var numTails = 0;
    var headsAndTailsList = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "Heads"){
            numHeads  = numHeads + 1;
        }else{
            numTails = numTails + 1;
        }//end if/else
    }//end for
    println("Heads: " + numHeads);
    println("Tails: " + numTails);
}//end countHeadsAndTails