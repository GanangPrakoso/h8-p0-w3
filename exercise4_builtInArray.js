function dataHandling2(arr) {
    arr =["0001", 'Roman Alamsyah', 'Bandar Lampung','21/05/1989', 'Membaca'];
    arr.splice(1,1, 'Roman Alamsyah Elsharawy')
    arr.splice(2,1,'Provinsi Bandar Lampung')
    arr.splice(4,1, 'Pria', 'SMA Internasional Metro')
     console.log(arr);
    
    var ttl = arr[3].split("");  
    var day = ttl[0]+ttl[1];
    var month = ttl[3]+ttl[4];
    var year = ttl[6]+ttl[7]+ttl[8]+ttl[9];
    var ttlArray = [day, month, year];

    switch (month) {
        case '01': 
        console.log('Janurai');
            break;
        case '02': 
        console.log('Februari');
            break;
        case '03': 
        console.log('Maret');
            break;
        case '04': 
        console.log('April');
            break;
        case '05': 
        console.log('Mei');
            break;
        case '06': 
        console.log('juni');
            break;
        case '07': 
        console.log('juli');
            break;
        case '08': 
        console.log('Agustus');
            break;
        case '09': 
        console.log('September');
            break;
        case '10': 
        console.log('Oktober');
            break;
        case '11': 
        console.log('November');
            break;
        case '12': 
        console.log('Desember');
            break;

        default: 
        console.log('bruh?');
            break;
    }

    ttlArray.sort(function(a, b){return b-a});
    console.log(ttlArray);

    var ttlArray = [day, month, year];
    var joinTtlArray = ttlArray.join('-');
    console.log(joinTtlArray);
    
    var namaNama = arr[1].split('');
    var joinNama = namaNama.join('');
    var sliceNama = joinNama.slice(0,14); 
    console.log(sliceNama);   
}   
dataHandling2();