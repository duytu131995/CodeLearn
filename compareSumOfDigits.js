function compareSumOfDigits(input){
    allNumber = [];
    for(var i = 0; i <= input.length; i++){
        allNumber[i] = input.slice(i,i+1);
    }
    var sumEven = 0;
    var sumOdd = 0;
    for(var j = 0; j < allNumber.length; j++){
    	if (allNumber[j] % 2 === 0) {
    		sumEven += Number(allNumber[j]);
    	}else{
    		sumOdd += Number(allNumber[j]);
    	}
    }
    return sumOdd - sumEven;
}
