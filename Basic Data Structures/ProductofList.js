function start(){
	var arr = [1, 8, 3, 4, 2, 9];
	var product = arr[0];
	for(var i = 1; i < arr.length; i++){
	  product = product * arr[i];
	}//end for
	print(product);
}//end start