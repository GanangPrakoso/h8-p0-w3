var input = [
                ['0001', 'Roman ALamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
                ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
                ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
                ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
            ]


function dataHandling(input) {   
    // var nomorId = '';
    // var nama='';
    // var tempat='';
    // var tanggal='';
    // var hobi = '';

    for (i=0; i<input.length; i++){

        console.log(i);
        
        console.log('NomorID: '+input[i][0]);
        console.log('Nama Lengkap: '+input[i][1]);
        console.log('TTL: '+input[i][3]+' '+input[i][2]);
        console.log('Hobi: '+input[i][4]);
        console.log(' ');
        
        //Coba coba menggunakan if
        
        // if (input[i][0]) {
        //     nomorId=input[i][0];
        //     console.log('nomorID: '+nomorId);
        // }
        // if (input[i][1]){
        //     nama=input[i][1];
        //     console.log('nama: '+nama); 
        // }
        // if (input[i][2]){
        //     tempat=input[i][2];
        // }
        // if (input[i][3]){
        //     tanggal=input[i][3];
        //     console.log('TTL: '+tempat+' '+tanggal);
        // }
        // if (input[i][4]){
        //     hobi=input[i][4];
        //     console.log('Hobi: '+hobi);    
        // }
        // console.log(' ');
        }
    } 
dataHandling(input)