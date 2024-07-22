var SENTINEL = 0;

// Prints whether the entered number is even or odd
function start(){
	while(true){
	    var num = readInt("Type in an integer. ");
	    if(num == SENTINEL){
	        println("Done!");
	        break;
	    }//end if
	    if(isEven(num)){
	        println("Even");
	    }//end if
	    else{
	        println("Odd");
	    }//end else
	}//end while
}//end start

function isEven(x){
     if(x % 2 == 0){
         return true;
     }//end if
     return false;
}//end isEven