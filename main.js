const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const quantityStocks = document.querySelector("quantity-stocks");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output");



function submitHandler(){
    var ip = Number(initialPrice.value) ;
    var qty =  Number(quantityStocks.value);
    var curr =  Number(currentPrice.value) ;


 calculateProfitAndLoss(ip, qty, curr);
}



function calculateProfitAndLoss(initial, quantity, current){
if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial ) * 100 ;
        outputBox.innerText = `Hey there is a ${loss} of loss and  this much of ${lossPercentage}% ` ;
   }else if(current > initial ){
        var profit = (current - initial) * quantity ;
        var profitPercentage =(profit / initial) * 100 ;
        outputBox.innerText = `Hey the is a profit of ${profit} and the percentage is ${profitPercentage}%`;
   }else{
    console.log(`No pain and no gain `);
   }
}


submitBtn.addEventListener("click", submitHandler)








