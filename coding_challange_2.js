function calcAverageHumanAge(dogAge){
    const humanAge = dogAge.map(function(mov){
        if(mov <= 2)
            return 2 * mov;
        else if(mov > 2)
            return 16 + mov *4;
    });

    const updateAge = humanAge.filter(function(mov){
        if(mov >= 18)
            return mov;
    });

    const sum = updateAge.reduce(function(acc, mov){
        return acc + mov;
    }, 0);

    console.log(sum/updateAge.length);
}

calcAverageHumanAge([5,2,4,1,15,8,3]);
calcAverageHumanAge([16,6,10,5,6,1,4]);