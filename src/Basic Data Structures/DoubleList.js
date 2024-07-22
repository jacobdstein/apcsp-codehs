function start(){
    var arr = [1, 2, 3, 4];
    var doubled = doubleList(arr);
    println(doubled);
}//end start

function doubleList(arr){
    var doubleList = [];
    
    for(var i = 0; i < arr.length; i++){
       for(var j = 0; j < 2; j++){
           doubleList.push(arr[i]);
       }//end for
    }//end for
    
    return doubleList;
}//end doubleList