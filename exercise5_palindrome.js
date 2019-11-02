function palindrome(kata) {
    var cekKata = '';
    for (let i=kata.length-1; i>=0; i--){
        cekKata+=kata[i];
    }

    if (kata==cekKata) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false