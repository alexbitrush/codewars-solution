function spinWords(string){
    let newStr = '';
    let setString = string.split(" ")

    setString.forEach(function(word, str) {
        if(word.length >= 5){
            newStr += word.split("").reverse().join("")
        }
        else if(word.length < 5){
            newStr += word
        }
        if(setString.length > str + 1){
            newStr += ' '
        }
    });
    return newStr
}