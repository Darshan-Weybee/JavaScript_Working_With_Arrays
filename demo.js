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
    .map(mov => mov * euroToUsd)
    .reduce((acc, mov)=> acc+mov ,0);
console.log(totalDepositsUSD);