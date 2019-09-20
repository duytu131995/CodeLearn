//chua nop
function removeDuplicateCharacters(str){
    var arr = [];
    var value = [];
    var g = 0;
    for( var i = 0; i < str.length; i++ ){
        arr[i] = str.slice(i,i+1);
    }
    for( var j = 0; j < arr.length; j++ ){
      var number = 0;
      for( var k = 0; k < arr.length; k++ ){
        if( arr[j] === arr[k] ){
          number++;
        }
      }
      if( number === 1 ){
          value[g] = arr[j];
          g++;
      }
    }
    return value.join('');
}
