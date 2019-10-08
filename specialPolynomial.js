function specialPolynomial(x, n){
  let k = 0;
  let a = 0;
  while( a <= n ){
    a = (((Math.pow(x, k + 1)) - 1) / (x - 1));
    k++;
  }
  return k - 2;
}
