/**
 * How To get a number from an input field
   1. create a variable
   2. right side document.getElementById(id)
   3. .value 
   4. parseFloat
 */

document.getElementById('btn-ad-money').addEventListener('click', function(event){
   event.preventDefault();

// const addMoney = document.getElementById('input-add-money').value;
   // const addMoneyNumber = parseFloat(addMoney);
   // getInputFieldValueById();
   // const addMoney = getInputFieldValueById();
   // console.log('add money value', addMoney);
   
   const addMoney = getInputFieldValueById('input-add-money');
   const pinNumber = getInputFieldValueById('input-pin-number');
   console.log('add money with parameter', addMoney, pinNumber)

});