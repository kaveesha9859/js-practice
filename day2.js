const calculateTip = (billAmount,tipPercent) => billAmount*tipPercent/100



function calculateTotal(billAmount, tipPercent) {
   let totalBill =billAmount +calculateTip(billAmount,tipPercent)
   return totalBill;
}

let bill = 1500
let tip = 15

let tipAmount = calculateTip(bill, tip)
let total = calculateTotal(bill, tip)

console.log(`Bill: $${bill}`)
console.log(`Tip (${tip}%): $${tipAmount}`)
console.log(`Total: $${total}`)