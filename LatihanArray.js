var penumpang = ['Glafert', undefined, 'Prigerio'];

var tambahPenumpang = function (namaPenumpang, penumpang) {
    // Jika angkot kosong
    if (penumpang.length == 0) {
        // Tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array & keluar dari function
        return penumpang;    
    }
    // else
    else {
        //telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if(penumpang[i] == undefined) {
            // tambah penumpang di kursi tersebut
            penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
            return penumpang;    
            }
        // jika sudah ada nama yang sama
        else if ( penumpang[i] == namaPenumpang) {
            // tampilkan pesan kesalahannya
            console.log(namaPenumpang + ' sudah ada di dalam angkot');
            // kembalikan isi array & keluar dari function
            return penumpang;}
        // jika seluruh kursi terisi
            else if ( i == penumpang.length - 1){
            // tambah penumpang di akhir array
            penumpang.push(namaPenumpang);
            // kembalikan isi array & keluar dari function
            return penumpang;
        }
    }
}
}

var kurangiPenumpang = function (namaPenumpang, penumpang) {

        // Jika angkot kosong
        if (penumpang.length == 0) {
            // Tampilkan pesan angkot kosong
            penumpang.push(namaPenumpang);
            // Kembalikan isi array & keluar dari function
            return penumpang;    
        }
        // telusuri kursi dari awal
        for(i = 0; i < penumpang.length; i++) {
            // jika nama penumpang yang diminta untuk keluar ada di dalam angkot
            if ( penumpang[i] == namaPenumpang) {
                // keluarkan penumpang berikan undefined
                penumpang[i] = undefined;
                // tampilkan pesan penumpang berhsail dihapus
                console.log(namaPenumpang +' berhasil dihapus');
                // kembalikan isi array & keluar dari function
                return penumpang; 
            }
            // jika penumpang tersebut tidak ada
            else if (i == penumpang.length - 1) {
                // tampilkan pesan penumpang tidak ada di di dalam angkot.
                console.log(namaPenumpang +' tidak ada di dalam angkot')
                return penumpang; 
                }
            }
        }