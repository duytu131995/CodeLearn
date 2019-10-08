function higherVersion(v1, v2){
  let v1er = v1.split('.');
  let v2er = v2.split('.');
  if(Number(v1er[0]) < Number(v2er[0])){
    return false;
  }else{
    if(Number(v1er[1]) < Number(v2er[1])){
      return false;
    }else{
      if(Number(v1er[2]) < Number(v2er[2])){
        return false;
      }else{
        return true;
      }
    }
  }
}
