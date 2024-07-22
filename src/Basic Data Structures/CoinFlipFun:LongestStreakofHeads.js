var NUM_FLIPS = 100;

function start(){
	var flips = flipCoins();
	printArray(flips);
	longestHeadsStreak(flips);
}

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
		}
	}
	return flips;
}

function printArray(arr){
	for(var i = 0; i < arr.length; i++){
		println(i + ": " + arr[i]);
	}
}

function longestHeadsStreak(flips){
    var headsStreakMax =  0;
    var headsStreak = 0;
    
    for(var i = 0; i < flips.length; i++){
        if(flips[i] == "Heads"){
            headsStreak = headsStreak + 1;
            if(headsStreak > headsStreakMax){
                headsStreakMax = headsStreak;
            }
        }
        else{
            headsStreak = 0;
        }//end if/else
    }//end for
 println("Longest Streak Of Heads: :" + headsStreakMax);
}//end longestHeadsStreak