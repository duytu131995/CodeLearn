function boomerang(arr){
    sum = 0;
    for( var i = 0; i < arr.length; i++ ){
        if( arr[i] !== arr[i+1] && arr[i] === arr[i+2] ){
            sum++;
        }
    }
    return sum;
}
