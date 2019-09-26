function countPrime(n){
    let arr = 0;
    if( n < 1 ){
        return false;
    }
    for(let i = 2; i <= n; i++){
        let flag = true;
        for( let j = 2; j <= i-1; j++ ){
            if (i % j === 0){
                flag = false;
                break;
            }
        }
        if( flag == true){
            arr++;
        }
    }
    return arr;
}
