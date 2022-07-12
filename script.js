'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

function displayMovements(movements, sort = false){
  containerMovements.innerHTML = "";
  
  const movs = sort ? movements.slice().sort((a,b) => a-b) : movements;
    movs.forEach(function(mov, i){
      const type = mov > 0 ? "deposit" : "withdrawal";
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
}


 function createUserNames(accs){
  accs.forEach(function(acc){
  acc.username = acc.owner.toLowerCase().split(" ").map(function(name){return name[0];}).join("");
 });
};
 createUserNames(accounts);
 
 function calcDisplayBalance(acc){
    acc.balance = acc.movements.reduce(function(acc, mov){return acc + mov;});
    labelBalance.textContent = `${acc.balance}€`;
 }


function calcDisplaySummary(acc){
    const income = acc.movements
      .filter(mov => mov>0)
      .reduce((acc, mov) => acc + mov ,0);
      labelSumIn.textContent = `${income}€`;

      const out = acc.movements
        .filter(mov => mov<0)
        .reduce((acc,mov) => acc + mov, 0);
        labelSumOut.textContent = `${Math.abs(out)}€`;

      const interest = acc.movements
        .filter(mov => mov>0)
        .map(mov => (mov * acc.interestRate)/100)
        .filter((mov,i, arr) => {return mov >= 1;})
        .reduce((acc, mov) => acc + mov ,0);
        labelSumInterest.textContent = `${interest}€`;
}

let currentAccount;
function updateUI(acc){
      //Display movements
      displayMovements(acc.movements);
      // Display Balance
      calcDisplayBalance(acc);
      // Display Summary
      calcDisplaySummary(acc);
}

btnLogin.addEventListener("click", function(e){
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username == inputLoginUsername.value);
  console.log(currentAccount);
  if(currentAccount?.pin == Number(inputLoginPin.value)){
    
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur(); 
    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username == inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = "";

  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc.username != currentAccount.username){
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    // add movement
    currentAccount.movements.push(amount);

    // update ui
    updateUI(currentAccount);

  }
  inputLoanAmount.value  = "";
});

btnClose.addEventListener("click", function(e){
  e.preventDefault();

  if(inputCloseUsername.value == currentAccount.username && Number(inputClosePin.value) == currentAccount.pin){
      const index = accounts.findIndex(acc => acc.username == currentAccount.username);

      //Delete account
      accounts.splice(index, 1);

      // Hide UI
      containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
/////////////////////////////////////////////////

//  1)
const bankDepositSum = accounts
        .flatMap(acc => acc.movements)
        .filter(mov => mov > 0)
        .reduce((acc, mov)=> acc+mov ,0);

console.log(bankDepositSum);

// 2)
const numDeposit1000 = accounts
          .flatMap(acc => acc.movements)
          .filter(mov => mov >=1000)
          .length;
console.log(numDeposit1000);

const numDeposit1001 = accounts
          .flatMap(acc => acc.movements)
          .reduce((count, cur) => (cur >= 1000 ? count + 1: count),0);
console.log(numDeposit1001);

let a = 10;
console.log(a++);
console.log(a);

let b = 10;
console.log(++b);
console.log(b);

// 3)
const {deposits, withdrawls} = accounts
      .flatMap(acc => acc.movements)
      .reduce((acc, cur) => {cur > 0? acc.deposits += cur : acc.withdrawls += cur
      return acc}, {deposits: 0, withdrawls: 0});
console.log(deposits, withdrawls);

const {deposits1, withdrawls1} = accounts
      .flatMap(acc => acc.movements)
      .reduce((acc, cur) => { acc[ cur > 0 ? "deposits1": "withdrawls1"] += cur;
      return acc}, {deposits1: 0, withdrawls1: 0});
console.log(deposits1, withdrawls1);


// 4)
function convertTitleCase(title){
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
   const exception = ["a", "an", "and", "the", "but","or","on","in","with"];
   const titleCase = title
          .toLowerCase()
          .split(" ")
          .map(word => exception.includes(word) ? word : capitalize(word))
          .join(" ");
   return capitalize(titleCase);
}

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and there is another title with an EXAMPLE"));