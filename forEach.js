/*
var arr = ['Glafert', 'Svent', 'Prigerio'];

arr.forEach(function(e, i){
    console.log('huruf pada indeks ke ' + (i+1) + ' adalah : ' + e);
});
*/
// Map
/*
var angka = [1, 2, 3, 5, 6, 4, 8];
var angka2 = angka.map(function(e) { 
    return e * 2;
    })
console.log (angka2.join(" - "));
*/
// sort
/*
var angka = [1, 2, 3, 5, 6, 4, 8, 7 ,9, 10, 20, 30];
angka.sort(function (a, b){ 
    return a - b }) // membuat perbandingan 
console.log (angka.join(" - "));
*/

// Filter and find
var angka = [1, 2, 3, 4, 5, 6];

var angka2 = angka.filter(function (a){
    return a > 3 ;
});

console.log(angka2.join(' - '));



