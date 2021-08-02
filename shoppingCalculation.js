function shoppingCalculation(input) {
  const order = []
  const budgets = {}
  const purchases = {}
  const prices = {}
  
  input.forEach(line => {
    if(isBudget(line)){
      
      const [name, budget] = parseBudget(line)
      order.includes(name) || order.push(name)
      budgets[name] = budget
    
    }else if(isPrice(line)){
    
      const [product, price] = parsePrice(line)
      prices[product] = price
    
    }else{ // Purchase
    
      const [name, amount, product] = parsePurchase(line)
      order.includes(name) || order.push(name)
      if(!purchases[name]){
        purchases[name] = [[amount, product]]
      }else{
        purchases[name].push([amount, product])        
      }
    
    }
  })
  
  return order.map(name => {
    const totalSpending = purchases[name].map(([amount,product]) => prices[product] * amount).reduce((a,b) => a+b, 0)
    const remaining = budgets[name] - totalSpending
    const boughtProducts = purchases[name].map(([amount,product]) => ${amount} + ${product}$ + {amount > 1 ? 's' :''}).join(", ")
    
    return [name, "$"+remaining, boughtProducts]
  }) 
}

function isBudget(line){
  return line.includes(" has ")
}

function parseBudget(line){
  const [name,budget] = line.split(" has ")
  return [name, Number(budget.slice(1,-1))]
}

function isPrice(line){
  return line.includes(" is ")
}

function parsePrice(line){
  const [product,price] = line.split(" is ")
  return [product.toLowerCase(), Number(price.slice(1,-1))]
}

function parsePurchase(line){
  const [name,_,amount,product] = line.split(" ");
  if(amount > 1){
    return [name, Number(amount), product.slice(0,-2)]
  }
  return [name, Number(amount), product.slice(0,-1)]
}

