function solution(str, ending){
    return str.substr(1).split('').join('').includes(ending);
}