function bonAppetit(bill, k, b) {
    let total = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            total += bill[i];
        }
    }
    let annaPay = total / 2;
    if (b > annaPay) {
        console.log(b - annaPay);
    } else {
        return console.log("Bon Appetit");
    }
}
