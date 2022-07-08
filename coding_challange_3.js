function calcAverageHumanAge(dogAge){

    const humanAge = dogAge
        .map(mov => (mov <= 2 ? 2 * mov : 16 + mov *4))
        .filter(mov => mov >=18)
        .reduce((acc, mov, i, arr) => acc + mov/arr.length ,0);

    console.log(humanAge);
}

calcAverageHumanAge([5,2,4,1,15,8,3]);
calcAverageHumanAge([16,6,10,5,6,1,4]);