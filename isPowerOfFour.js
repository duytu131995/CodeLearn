function isPowerOfFour(n){
    if(n % 4 === 0 && n > 0){
        n = n/4;
        if(n === 1){return true;}
    }else{
        return false;
    }
    return isPowerOfFour(n);
}

