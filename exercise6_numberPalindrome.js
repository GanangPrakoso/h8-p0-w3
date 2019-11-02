function angkaPalindrome(num) {
    for (let i=0; i<num; i++){
    num+=1;
    var  numString=String(num);
    var palinNum = '';
        for(let j=numString.length-1; j>=0; j--){
            palinNum+=numString[j];
        }
        if (numString==palinNum){
            return num
        }
    }
}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001