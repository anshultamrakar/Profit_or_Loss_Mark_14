const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const quantityStocks = document.querySelector("quantity-stocks");
const submitBtn = document.querySelector("#submit-btn");




function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
    let loss = (initial-current) * quantity;
    let lossPercentage = (loss / initial) * 100;
        console.log(`Hey the ${loss} is ${lossPercentage}`);
    }else if(current > initial){
        let profit = (current - initial) * quantity
        let profitPercentage = (profit / initial ) * 100
        console.log(`Hey the ${profit} is ${profitPercentage}`);
    }else{
        console.log(`No pain no gain , no gain no pain `);
    }
    }


function submitHandler(){
    var  ip = Number(initialPrice.value);
    var  qty = Number(quantityStocks.value);
    var  curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qty, curr);

}


submitBtn.addEventListener("click", submitHandler);




