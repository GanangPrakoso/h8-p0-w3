function targetTerdekat(arr) {
    var indexO=[];
    var indexX=[];
    var jarak = 0;

    for (i=0; i<=arr.length-1; i++){
        if (arr[i]=='o'){
            indexO.push(i);
        }
        if (arr[i]=='x'){
            indexX.push(i);
        }
    }
    if (indexO<indexX[0]){
        jarak = indexX[0]-indexO;
        return jarak;
    }
    else if (indexO>indexX[0]){
        jarak = indexO - indexX[indexX.length-1]
        return jarak;
    } else  {
        return '0'
    }

    // console.log(indexO);
    // console.log(indexX[indexX.length-1]);
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2[]