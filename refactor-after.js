function printBanner() {
    console.log("************************");
    console.log("***** Customer Ows *****");
    console.log("************************");
}

function printDetails(invoice, outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toString()}`);
}
function recordDueDate(invoice) {
    const today = new Date(1637252207035);
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

// 提炼calculateOutstanding函数
function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
        result += o.amount;
    }
    return result;
}
function printOwing(invoice) {

    printBanner()

    // let outstanding = 0;
    // outstanding = calculateOutstanding(invoice);
    const outstanding = calculateOutstanding(invoice);

    recordDueDate(invoice)

    printDetails(invoice, outstanding);
}

module.exports = printOwing;