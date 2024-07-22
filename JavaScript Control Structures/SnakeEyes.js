function start(){
    var roll1 = 0;
    var roll2 = 0;
    var numRolls = 0;
    
	while(true){
	    roll1 = Randomizer.nextInt(1,6);
	    roll2 = Randomizer.nextInt(1,6);
	    println(roll1 + ", " + roll2);
	    numRolls = numRolls + 1;
	    
	    if(roll1 == 1 && roll2 == 1){
	        println("It took you " + numRolls + " rolls to get snake eyes.");
	        break;
	        
	    }//end if
	    
	}//end while
	
}//end start