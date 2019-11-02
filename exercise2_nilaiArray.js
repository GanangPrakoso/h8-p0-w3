var inputan= 'hello World!';
function balikString(inputan) {
    let stringBalik = '';
    
    for (var i=inputan.length-1; i>=0; i--){
        stringBalik+= inputan[i];
    }
    return stringBalik;
}
console.log(balikString(inputan));