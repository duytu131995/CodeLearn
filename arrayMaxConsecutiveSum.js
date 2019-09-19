//chua nop
function arrayMaxConsecutiveSum(inputArray, k){
    var sum = [];
    for( var i = 0; i <= inputArray.length - k; i++ ){
    	sum[i] = 0;
        for( var j = i; j < i + k; j++ ){
            sum[i] += inputArray[j];
        }
    }
    return Math.max.apply(Math, sum);
}
