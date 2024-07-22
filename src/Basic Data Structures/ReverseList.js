function start(){
	var arr = [1, 2, 3, 4];
	var reversed = reverseList(arr);
	println(reversed);
}//end start

function reverseList(arr){
    var reverseList = [];
    for(var i = arr.length - 1; i >= 0; i--){
        reverseList.push(arr[i]);
    }//end for
    
    return reverseList;
}//end reverseList