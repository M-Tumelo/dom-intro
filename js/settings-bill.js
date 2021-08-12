// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
const callsElem = document.querySelector(".callTotalSettings");
const smsElem = document.querySelector(".smsTotalSettings");
const totalElem = document.querySelector(".totalSettings");
//get a reference to the add button
const addButton = document.querySelector(".addBtn");
//get a reference to the 'Update settings' button
const updateButton = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCostSetting = 0;
var smsCostSetting = 0;
var warningLevelSetting = 0;
var criticalLevelSetting = 0;
// create a variables that will keep track of all three totals.
var callTotal = 0;
var smsTotalSettings = 0;
var prevTotalBill = 0;
//add an event listener for when the 'Update settings' button is pressed
updateButton.addEventListener("click", function(){
   callCostSetting = document.querySelector(".callCostSetting").value;
   smsCostSetting =document.querySelector(".smsCostSetting").value;
   warningLevelSetting =document.querySelector(".warningLevelSetting").value;
criticalLevelSetting = document.querySelector(".criticalLevelSetting").value;
addButton.disabled=false;
if(parseFloat(prevTotalBill) == parseFloat(criticalLevelSetting)) addButton.disabled=true;
if(parseFloat(prevTotalBill)<parseFloat(criticalLevelSetting)) totalElem.classList.remove("danger");
if(parseFloat(prevTotalBill) >= parseFloat(warningLevelSetting)) totalElem.classList.add("warning");
if(parseFloat(prevTotalBill) < parseFloat(warningLevelSetting)) totalElem.classList.remove("warning");

})
//add an event listener for when the add button is pressed
addButton.addEventListener("click", function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        if(billItemType==="call"){
            callTotal+=parseFloat(callCostSetting);
        }
        else if(billItemType==="sms"){
            smsTotalSettings+=parseFloat(smsCostSetting);
        }
    }
//update the totals that is displayed on the screen.
callsElem.innerHTML = callTotal.toFixed(2);
smsElem.innerHTML = smsTotalSettings.toFixed(2);
var total = callTotal + smsTotalSettings;
totalElem.innerHTML = total.toFixed(2);
prevTotalBill = total.toFixed(2);
//color the total based on the criteria
if (total >= criticalLevelSetting){
    // adding the danger class will make the text red
    totalElem.classList.add("danger");
    addButton.disabled=true;
            }
        else if (total >= warningLevelSetting){
            totalElem.classList.add("warning");
            }
});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
