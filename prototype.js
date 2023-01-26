//1. Object Literal
let player = {
    nama : "Glafert",
    hp : parseInt(100),

    makan : function(porsi){
        this.hp += porsi;
        this.porsi = porsi;
        console.log(`HP anda bertambah sebanyak ${this.porsi}`);
    }
};

//2. Function Declaration

// membuat function yang bisa dipanggil secara manual.
// alokasi memori untuk menyimpan function
const methodMahasiswa = {
        
    makan : function (porsi){
        this.hp -= porsi;
        this.porsi = porsi;
        console.log(`HP anda berkurang sebanyak ${this.porsi}`);
    },

    istirahat : function (jam){
       let total = this.hp += jam * 2;
       this.jam = jam;
       console.log(`HP anda bertambah sebanyak ${this.jam} x 2 total HP anda saat ini adalah : ${total}`);    
    },
}

function pemain(nama, hp){
    let player  = Object.create(methodMahasiswa);
    player.nama = nama;
    player.hp = hp;
    
    //player.main = methodMahasiswa.main; // 
    // cara memanggil function yang berada pada memori alokasi di atas.
    //player.istirahat = methodMahasiswa.istirahat; 
    // cara memanggil function yang berada pada memori alokasi di atas.

    player.makan = function(porsi){
        this.hp += porsi;
        this.porsi = porsi;
        console.log(`HP anda bertambah sebanyak ${this.porsi}`);
    }

    return player;
};

let prigerio = pemain('Prigerio', 100);
let svent = pemain('Svent', 100);


//3. constructor declaration
// 3.1 Versi Manipulasi protoype
user.prototype.minum = function(liter){
    this.hp += liter;
    this.liter = liter;
    
    return `HP anda bertambah sebanyak ${this.liter}!`;
}
user.prototype.skill = function(manaCost){
     this.mana -= manaCost;
     this.manaCost = manaCost;
        
     return `Mana anda berkurang sebanyak ${this.manaCost}!`;    
}

function user(nama, hp, mana){
    
    this.nama = nama;
    this.hp = hp;
    this.mana = mana;
    
    this.makan = function(porsi){
        this.hp += porsi;
        this.porsi = porsi;
        console.log(`HP anda bertambah sebanya ${this.porsi}`);
    }
};
// keywords are new
let eric = new user('Eric', 100, 100); // harus pake new

// 3.2 Versi Class

class mahasiswa {
    constructor (nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        this.porsi = porsi;
        
        return `Energi anda bertambah sebanyak ${this.porsi}!`; 
    }
}

let glario = new mahasiswa ("glario", 100);