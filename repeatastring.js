function repeatStringNumTimes(str, num) {

  let repeatedStr = [];

  if(num < 1) {
    return "";
  }

  for(let i = 0; i < num; i++) {
    repeatedStr.push(str);
  }

  return repeatedStr.join('');
}

repeatStringNumTimes("abc", 3);
