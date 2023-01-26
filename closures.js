// Execution Context , Hoisting, Scope

// function ucapkanSalam(waktu)  {
//     return function (nama) {
//         console.log(`Halo ${nama} selamat ${waktu}` );
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');

// console.log(selamatPagi('Glafert'));

// Arrow Function -- implisit return

const mahasiswa = (nama) => `halo  ${nama}`;
console.log(mahasiswa('GlafertSvent'));


const mahasiswa2 = ["Glafert", "Svent", "Prigerio"];

let jumlahHuruf = mahasiswa2.map(nama => ({ nama, jmlHuruf : nama.length}));
console.table(jumlahHuruf);