// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");

//get a reference to the add button
const textTotalAddBtn = document.querySelector(".addToBillBtn");

//get a reference to the callTotalOne
const callsTotalElem = document.querySelector(".callTotalOne");

//get a reference to the smsTotalOne
const smsTotalElem = document.querySelector(".smsTotalOne");

//create a variable that will keep track of the total bill
const totalCostElem = document.querySelector(".totalOne");

//create varibles that will keep track of the total calls and sms
var callsTotal = 0;
var smsTotal = 0;

//add an event listener for when the add button is pressed
textTotalAddBtn.addEventListener("click",function(){
if(billTypeText.value==="call"){
    callsTotal+=2.75;
}
else if(billTypeText.value==="sms"){
    smsTotal+=0.75;
}
//update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

//color the total based on the criteria
    if (totalCost >= 50){
// adding the danger class will make the text red
        totalCostElem.classList.add("danger");
        }
    else if (totalCost >= 30){
            totalCostElem.classList.add("warning");
        }
});
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
