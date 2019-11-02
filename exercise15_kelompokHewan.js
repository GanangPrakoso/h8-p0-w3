function groupAnimals(animals) {
    animals.sort();
    var newArray = [];
    var counterArray = 0;

    for (i=0; i<=animals.length-1; i++){
        if (newArray.length == 0){
            newArray.push([animals[i]])
        } else if (newArray[counterArray][0][0]==animals[i][0]){
            newArray[counterArray].push(animals[i])
        } else {
            newArray.push([animals[i]])
            counterArray+=1;   
        }
    }

    return newArray
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]