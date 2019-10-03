    function lastDigitDiffZero(n){
        if(n == 0 || n == 1){
            return 1;
        }
        let a = 1;
        for(let i = 1; i <= n; i++){
            a *= i;
        }
        return (function math(){
            if(a % 10 == 0){
                a = a/10;
            }else{
                return a % 10;
            }
            return math(a);
        })();
    }
