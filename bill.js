let ITEMS = [{code:"1",price:150,qunt:1},
             {code:"2",price:250,qunt:2},
             {code:"3",price:350,qunt:3},
             {code:"4",price:450,qunt:4}];
const billPrint = () => {
    let f = 0;
    let qty = document.getElementById("qt").value;
    let cde = document.getElementById("cd").value;
    let i;
    for (i=0; i<ITEMS.length; i=i+1) {
        if (ITEMS[i].code == cde) {
            f=1;
            if (ITEMS[i].qunt == parseInt(qty)) {
                let total = ITEMS[i].price * ITEMS[i].qunt; //qty1
                let discount = total * 5/100;
                let totAmtPaid = total - discount;

                document.getElementById("pri").innerHTML = ITEMS[i].price;
                document.getElementById("tam").innerHTML = total;
                document.getElementById("dis").innerHTML = discount;
                document.getElementById("tap").innerHTML = totAmtPaid;
            }
        }
    }
    if (f == 0) {
        alert("N/A")
    }
}