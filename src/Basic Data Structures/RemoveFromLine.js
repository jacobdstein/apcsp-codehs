function start(){
	var line = ["Sam", "Lisa", "Laurie", "Bob", "Ryan"];
	printArray(line);
    print("\n");
	line.remove(0);
	line.remove(0);
	printArray(line);
}

function printArray(arr){
    for(var i= 0; i < arr.length -1 ; i++){
        print(arr[i] + ", ");
    }//end for
    print(arr[i]);
}//end printArray