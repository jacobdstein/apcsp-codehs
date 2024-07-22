var SECRET = "abc123";

function start(){
	while(true){
	    var password = readLine("Enter the password: ");
	    if(password == SECRET){
	        println("You got it!");
	        break;
	 
	    }//end if
	    println("Sorry, that did not match. Please try again.");
	}//end while
}//end start