function isItemAvailable(item, transactions) {
  let itemTransactions = transactionsFor(item, transactions);

  let quantity = itemTransactions.map(hsh => {
    if (hsh['movement'] === 'in') {
      return hsh['quantity'];
    } else if (hsh['movement'] === 'out') {
      return (-hsh['quantity']);
    } 
  }).reduce((acc, ele) => acc + ele);

  return quantity > 0;
}

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(hsh => hsh['id'] === inventoryItem);
}

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true