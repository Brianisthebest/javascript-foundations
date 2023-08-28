function createItemStock(name = 'unknown', quantity = 0, price = 1.00) {
  return {
    name: name,
    quantity: quantity,
    price: price
  };
}

function makePurchase(item, money) {
  if(item.price > money) {
    return `Sorry, you need at least $${item.price} to make that purchase`
  } else if(item.quantity <= 0) {
    return 'Sorry, there are none left'
  } else {
    return `Here are your ${item.name}`
  }
}

function collectChange(change) {
  total = 0
  for(i = 0; i < change.length; i++) {
    total += change[i]
  }
  return total
}

module.exports = {
  createItemStock,
  makePurchase,
  collectChange,
}
