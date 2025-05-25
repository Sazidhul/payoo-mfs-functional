/**
  Common Shared functions here
 */

// function getInputFieldValueById(){
//    console.log('wil get value by id ');
//    const addMoney = document.getElementById('input-add-money').ariaValueMax;
//    return addMoney;
// }

function getInputFieldValueById(id){
   const inputValue = document.getElementById(id).value;
   return inputValue;
}