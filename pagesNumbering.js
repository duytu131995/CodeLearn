function pagesNumbering(n){
    let total = 0;
    let numberNine = '9';
    let numberOne = '1';
    for(let i = 1; i <= String(n).length; i++){
        if(i > 1){
            numberNine += '9';
            numberOne += '0';
        }
        if(i == String(n).length){
            total += (i*(n - Number(numberOne) + 1));
        }else{
            total += (i * (Number(numberNine) - Number(numberOne) + 1));
        }
        
    }
    return total;
}
