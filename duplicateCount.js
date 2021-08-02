function duplicateCount(text){
    var duplicates = text.reduce(function(acc, el, i, arr) {
      if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(i); return acc;
    }, []);
    return duplicates
}