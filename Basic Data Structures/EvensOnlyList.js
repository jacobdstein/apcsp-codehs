function start(){
	var arr = [1, 2, 3, 4, 5, 6];
	var evens = onlyEvens(arr);
	println(evens);
}//end start

function onlyEvens(arr){
    var onlyEvens = [];
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            onlyEvens.push(arr[i]);
        }//end if
    }//end for
    
    return onlyEvens;
}//end onlyEvens