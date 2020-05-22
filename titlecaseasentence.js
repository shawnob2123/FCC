function titleCase(str) {
    str = str.toLowerCase();
    let newWord = "";

    for (let i = 0; i < str.length; i++) {
      newWord = newWord + str[i];
      //get the index of the first letter of each word then upper
      if (str[i == " "]) {
        newWord = newWord + str[i + 1].toUpperCase();
        i++;
        
      }
}
console.log(newWord);
return str;

}

titleCase("I'm a little tea pot");