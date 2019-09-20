//chua nop
function countZeroDigit(a, b){
    var arr = [];
    var limit = 0;
    var quantity = 0;
    for( var i = a; i <= b; i++ ){
        arr[limit] = i;
        limit++;
    }
    for( var j = 0; j <= arr.length; j++ ){
      var cut = [];
      var b = String(arr[j]);
      var c = b.length;
      for( var k = 0; k < c; k++ ){
        cut[k] = b.slice(k, k+1);
      }
      for( var g = 0; g < cut.length; g++ ){
        if( cut[g] == 0 ){
          quantity++;
        }
      }
    }
    return quantity;
}
