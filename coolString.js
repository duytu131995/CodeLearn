function coolString(inputString){
  let a = [...inputString];
  let reA = /[A-Z]/;
  let rea = /[a-z]/;
  if(a.length < 2){
    return true;
  }
  for(let i = 0; i < a.length; i++){
    if(a[i] == ' '){
      return false;
    }
    if(reA.test(a[i]) == true && rea.test(a[i+1]) == true){
      if(i == a.length - 2){
        return true;
      }
    }else if(rea.test(a[i]) == true && reA.test(a[i+1]) == true){
      if(i == a.length - 2){
        return true;
      }
    }else{
      return false;
    }        
  }
}
