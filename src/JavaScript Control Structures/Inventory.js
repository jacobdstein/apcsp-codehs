var STARTING_ITEMS_IN_INVENTORY = 20;

function start(){
	var numItems = STARTING_ITEMS_IN_INVENTORY;	
    
    while(numItems > 0){
        println("We have " + numItems + " items in inventory.");
        var buyItems = readInt("How many items would you like to buy? ");
        if(buyItems > numItems){
            println("There is not enough in inventory for that purchase.");
        } else{
            numItems = numItems - buyItems;
            println("We have " + numItems + " items left in inventory.");
        }//end if/else
    }//end while
    println("All out!");
}//end start