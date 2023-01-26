// var jumlahArray = parseInt(prompt('Masukan jumlah array yang ingin dibuat'));

// for (i = 0 ; i < jumlahArray; i++ ){
// var a = [] = prompt ('Masukan object pada indeks ke ' + (i+1));

// console.log('array indeks ke ' + (i+1) + " = " + a);
// }

// 1. Method Push & Pop (Menambahkan dan Menghilangkan object pada indeks terakhhir)
console.log("Method Push & Pop (Menambahkan dan Menghilangkan object");
// 1.1 Push
var arr = ['Glafert','Svent','Prigerio'];
arr.push('Tampan')

// 1.2 Pop
arr.pop();

// 2. Method Unshift & Shift (Menambahkan dan Mengilangkan object pada indeks pertama)

// 2.1 Unshift

// 2.2 Shift
arr.shift();
arr.unshift('Eric');
console.log(arr.join(' - '));

// 3. Splice & Slice

console.log("Method Splice & Slice");

// 3.1 Splice
var arr = ['Glafert','Svent','Prigerio'];
arr.splice(1,2,'Prigerio','Kapahang'); // start dari indeks pertama akan menghapus dua item setelah indeks
console.log(arr.join(' - '));

// 3.2. Slice
var arr = ['Glafert','Svent','Prigerio'];
var arr2 = arr.slice(1,3);
console.log(arr.join(' - '));
console.log(arr2.join(' - '));