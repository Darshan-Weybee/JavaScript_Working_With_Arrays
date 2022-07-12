const dogs = [
    {weight: 22, curFood: 250, owners: ["Alice", "Bob"]},
    {weight: 8, curFood: 200, owners: ["Matilda"]},
    {weight: 13, curFood: 275, owners: ["Sarah", "John"]},
    {weight: 32, curFood: 340, owners: ["Michael"]}
];

// 1
dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
    console.log(dog);
});

// 2
const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(`Sarah's dog eating too ${dogSarah.curFood > dogSarah.recommendedFood ? "much" : "little"}`);

// 3
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.forEach(dog => {
    dog.curFood > dog.recommendedFood ? ownersEatTooMuch.push(dog.owners) : ownersEatTooLittle.push(dog.owners);
});
console.log(ownersEatTooLittle.flat(), ownersEatTooMuch.flat());

// const ownersEatTooMuch = dogs
//             .filter(dog => dog.curFood > dog.recommendedFood)
//             .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//             .filter(dog => dog.curFood < dog.recommendedFood)
//             .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// 4
console.log(`${ownersEatTooMuch.flat().join(" and ")}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.flat().join(" and ")}'s dogs eat too little`);

// 5
// dogs.map(dog => {
//     if(dog.curFood == dog.recommendedFood){
//         console.log(dog);
//     }
// });

console.log(dogs.some(dog => dog.curFood == dog.recommendedFood));

// 6
console.log(dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1));

// 7
console.log(dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1));

// 8
const dogs2 = dogs.slice().sort((dog1, dog2) =>dog1.recommendedFood - dog2.recommendedFood);
console.log(dogs2);