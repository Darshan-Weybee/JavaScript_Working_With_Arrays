let arr = ["a", "b", "c", "d", "e"];

// SLICE does not mutet
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE  mutet
console.log(arr.splice(-1));
console.log(arr);
// console.log(arr.splice(-2));
// console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

// REVERSE  mutet
arr = ["a", "b", "c", "d", "e"];
console.log(arr.reverse());
console.log(arr);

// CONCAT does not mutet
const arr2 = ["f", "g", "h", "i", "j"];
const letters = arr.concat(arr2);
console.log(letters);

// JOIN
console.log(letters.join("  =  "));

// AT
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

console.log(arr3.at(-1));
console.log(arr3[arr3.length-1]);
console.log(arr3.slice(-1)[0]);

console.log("jonas".at(0));
console.log("jonas".at(-1));

// forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(const [i, move] of movements.entries()){
    if(move>0)
        console.log(`Movements ${i+1} you deposited ${move}`);
    else
        console.log(`Movements ${i+1} you deposited ${Math.abs(move)}`);
}
console.log("=======================");
movements.forEach(function(move, i, arr){
    if(move>0)
        console.log(`Movements ${i+1} you deposited ${move}`);
    else
        console.log(`Movements ${i+1} you deposited ${Math.abs(move)}`);
    
});

// MAP, SET
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "EURO", "USD", "GBP"]);
currenciesUnique.forEach(function(value, _, set){
    console.log(` ${value}`);
});

// map
const euroToUsd = 1.1;
const movementsToUsd = movements.map(function(mov){
    return mov * euroToUsd;
});
console.log(movements);
console.log(movementsToUsd);

const movementsToUsdArr = movements.map(mov => mov * euroToUsd);
console.log(movements);
console.log(movementsToUsdArr);

let movementsFor = [];
for(const mov of movements)
     movementsFor.push(mov * euroToUsd);
console.log(movements);
console.log(movementsFor);

const movementsDescription = movements.map((mov, i, arr) => `Movements ${i+1}: You ${mov>0 ? "deposite" : "withdraw"} ${Math.abs(mov)}`);
console.log(movementsDescription);

// filter
const deposit = movements.filter(function(mov){
    return mov > 0;
});
console.log(movements);
console.log(deposit);

const depositsFor = [];
for(const mov of movements){
    if(mov > 0)
        depositsFor.push(mov);
}
console.log(depositsFor);

const withdrawal = movements.filter(function(mov){
    return mov < 0;
});
console.log(withdrawal);


// reduce
const balance = movements.reduce(function(acc, mov, i, arr){
    console.log(`${i}: ${acc}`);
    return acc + mov;
},0);
console.log(balance);

let sum = 0;
for(const mov of movements){
    sum += mov;
}
console.log(sum);

const max = movements.reduce(function(acc, mov){
    if(acc > mov)
        return acc;
    else
        return mov;
}, movements[0]);
console.log(max);

const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * euroToUsd)   //.map((mov, i,arr)=>{console.log(arr);})
    .reduce((acc, mov)=> acc+mov ,0);
console.log(totalDepositsUSD);

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];

  //find

const firstWithdrawl = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawl);

console.log(accounts);

const account = accounts.find(acc => acc.owner == "Jessica Davis");
console.log(account);

for(const acc of accounts){
    if(acc.owner == "Jessica Davis")
        console.log(acc);
}

console.log(movements);

console.log(movements.includes(-130));

// some
const anyDeposits = movements.some(mov => mov >0);
console.log(anyDeposits);

// every
console.log(movements.every(mov => mov>0));
console.log(account4.movements.every(mov => mov>0));

// flat
const arr4 =  [[1,2,3], [4,5,6],7,8];
console.log(arr4.flat());

const arrDeep = [[[1,2],3],[4,[5,6]],7,8];
console.log(arrDeep.flat(2));
console.log(arrDeep);

const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc,mov)=> acc+mov);
console.log(overallBalance);

// flatMap
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov)=> acc+mov);
console.log(overallBalance2);

// sort  it mutet the original array
// it also sort the original array
// and it only works for string
const owner = ["jonas", "zach","adam", "martha"];
console.log(owner.sort());
console.log(owner);

// for arrays we have to write callback function in sort method

// return < 0 , A, B (keep order)
// return > 0 , B, A (switch order)

// Ascending
movements.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
});
console.log(movements);
// movements.sort((a,b) => a-b);

// Descending
movements.sort((a, b) => {
    if(a > b) return -1;
    if(a < b)return 1;
});
console.log(movements);
movements.sort((a,b) => b-a);


// Different array methods
console.log([1,2,3,4,5,6,7,8,9]);
console.log(new Array(1,2,3,4,5,6,7,8,9));

// if only one argument pass to the array constructor than it creates the empty array with that length
// like in below example it will create empty array of length 7
const x = new Array(7);
console.log(x);

// fill  it mutet the original array
x.fill(1); // it fill the array with 1 to all elements
x.fill(1, 3) // it fill the array from strat index (here 3)
x.fill(1, 3, 5) // it fill the array from start index to end index (here 3 to 5)
// like slice method above example

// to edit the element of the array
const arrf = [1,2,3,4,5,6,7,8,9]; 
console.log(arrf);
arrf.fill(23, 2, 6);
console.log(arrf);

// from 
// it will call on constructor of the array Array.from()
// in that method first argument is length defined as property and value and second parameter is callback function

const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (cur, i) => i+1);
console.log(z);

const dice = Array.from({length: 100}, () => Math.trunc(Math.random *6)+1);
console.log(dice);


// const movementUI = Array.from(document.querySelectorAll(".movements__value"), el => Number(el.textContent.replace("","")));
// console.log(movementUI);

// const movementUI2 = [...document.querySelectorAll(".movements__value")];


//   Some methods

//  ===> To mutet the original array
/* 
.push
.unshift
.pop
.shift
.splice
.reverse
.sort
.fill*/

//  ===> A new  array
/* 
.map
.filter
.slice
.concat
.flat
.flatMap
*/

//  ===> An array index
/* 
.indexOf
.findIndex
.find
*/

//  ===> Know if array includes
/* 
.includes
.some
.every
.join
*/

//  ===> A new string
/* 
.join
*/

//  ===> To transform to value
/* 
.reduce
*/

//  ===> To just loop array
/* 
.forEach
*/

