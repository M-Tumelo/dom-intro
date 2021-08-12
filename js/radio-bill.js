//get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//get a reference to the callTotal
const callsTotalTwoElem = document.querySelector(".callTotalTwo");
//get a reference to the smsTotal
const smsTotalTwoElem = document.querySelector(".smsTotalTwo");
//get a reference to the totalElement
const totalCostTwoElem = document.querySelector(".totalTwo");
//create a variable that will keep track of the total bill
var callsTotalTwo = 0;
var smsTotalTwo = 0;
//add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener("click", function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        if(billItemType==="call"){
            callsTotalTwo+=2.75;
        }
        else if(billItemType==="sms"){
            smsTotalTwo+=0.75;
        }
    }
//update the totals that is displayed on the screen.
callsTotalTwoElem.innerHTML = callsTotalTwo.toFixed(2);
smsTotalTwoElem.innerHTML = smsTotalTwo.toFixed(2);
var totalCosts = callsTotalTwo + smsTotalTwo;
totalCostTwoElem.innerHTML = totalCosts.toFixed(2);

//color the total based on the criteria
if (totalCosts >= 50){
    // adding the danger class will make the text red
    totalCostTwoElem.classList.add("danger");
            }
        else if (totalCosts >= 30){
            totalCostTwoElem.classList.add("warning");
            }
});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
