function pasanganTerbesar(num) {
    var num = num.toString();
    var angka1 = 0;
    var angka2 = 0;
    
    for (let i=0; i<num.length-1; i++){
        angka2=num[i]+num[i+1];
        
        if (angka1<angka2){
            angka1 = angka2; 
        } else {
            angka1;
        }

    }
    return angka1;    
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99