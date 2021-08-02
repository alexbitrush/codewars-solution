function solution(number){
    var hundreds = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    var tens = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    var ones = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
    var str = ''
    while(number >= 1000){
        str += 'M'
        number -= 1000
    }
    str += hundreds[Math.floor(number / 100)]
    number = number % 100;

    str += tens[Math.floor(number / 10)]
    number = number % 10;

    str += ones[number]

    return str
}
console.log(solution(100))