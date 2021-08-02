function polindrom(word){
    word = word.toLowerCase()
    return word === word.split('').reverse().join('')
}
  