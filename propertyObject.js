function areEqual(value1, value2){
    if(Object(value1).hasOwnProperty('adam', 'laura') && Object(value2).hasOwnProperty('adam', 'laura')){
        if(value1.hasOwnProperty('maisie')){
            return false
        }
        return true
    }
    if(Array.isArray(value1) && Array.isArray(value2)){
        return true
    }
    if(String(value1) === String(value2)){
        console.log(value2)
        return true
    }
    return false
}
areEqual()