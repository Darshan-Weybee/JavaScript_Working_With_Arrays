

function checkDogs(dogsJulia, dogsKate){
    const newDogsJulia = dogsJulia.slice();
    newDogsJulia.splice(0,1);
    newDogsJulia.splice(-2);

    let mergeArray = newDogsJulia.concat(dogsKate);

    mergeArray.forEach(function(value, i) {
        if(value >= 3)
             console.log(`Dog number ${i+1} is an adult, and it is ${value} years old.`);
        else
             console.log(`Dog number ${i+1} is still puppy.`);
            
    });
}

checkDogs([3,5,2,12,7], [4,1,15,8,3]);

console.log("=====================");

checkDogs([9,16,6,8,3], [10,5,6,1,4]);
