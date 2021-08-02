function strToHash(str){
    let trans = str.split(', ')
    let test = trans.filter(word => {
      return  Object.fromEntries(Array(word.split('=')));
    })
    return test
}
strToHash("a=1, b=2, c=3, d=4")