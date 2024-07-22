function start(){
	var line = ["Sam", "Lisa", "Laurie", "Bob", "Ryan"];
	var line2 = ["Tony", "Lisa", "Laurie", "Karen"];
	if(line.indexOf("Bob")){
	    println("Bob is in the first line.");
	}else{
	    println("Bob is not in the first line.");
	}
	
	if(line2.indexOf("Bob") == true){
	    println("Bob is in the second line.");
	}else{
	    println("Bob is not in the second line.");
	}
}//end start