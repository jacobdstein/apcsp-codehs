var MAX = 1000;

function start(){
	var num1 = 1;
	var num2 = 1;
	var num3 = num1 + num2;
	println(num1);
	println(num2);
	while(num3 <= MAX){
	    println(num3);
	    num1 = num2;
	    num2 = num3;
	    num3 = num1 + num2;
	}//end while
}//end start