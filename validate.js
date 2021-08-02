function validate(n){
    var sum = 0;
    while(n > 0){
      let a = n % 10;
      n = Math.floor(n / 10)
      
      let b = n % 10 * 2
      n = Math.floor(n / 10)
  
      if(b > 9){
        b = b - 9
      }
      sum += a + b
    }
    return sum % 10 == 0
  }
  let ni = [0]
  console.log(validate(ni))