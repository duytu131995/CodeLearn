function regularBracketSequence(sequence){
  let a = [...sequence];
  let b = '';
  a.forEach(function(item){
    if(item == '(' || item == ')'){
      b += item;
    }
  });
  let c = [...b];
  let d = c.length - 1;  
  if(c[0] !== '(' || c[d] !== ')'){
    return false;
  }
  let mo = 0;
  let dong = 0;
  c.forEach(function(item){
    if(item == '('){
      mo++;
    }else{
      dong++;
    }
  });
  if(mo == dong){
    return true;
  }else{
    return false;
  }
}
