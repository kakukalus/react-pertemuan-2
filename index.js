/**
 *  Nilai > 90 : A
 *  Nilai > 80 : B
 *  Nilai > 70 : C
 * Selain Itu: D
 */

const nilai = 50;

if (nilai > 90) {
    console.log("Grade : A");
}else if(nilai > 80){
    console.log("Grade : B");
}else if (nilai > 70) {
    console.log("Grade : C")
}else{
    console.log("Grade : D")
}

/**
 * Looping menggunakan for
 * menampilkan angka 1 - 10
 */
for (let i = 0; i < 11; i++) {
    console.log(`perulangan ke : ${i}`);
}



//declaration
function hitungUmur(tahunLahir) {
    const tahunSekarang = 2023;
    const umur = tahunSekarang - tahunLahir;
    return umur;
}

console.log(hitungUmur(2001));
console.log(hitungUmur(2005));

//expression: arrow
const hitungUmur2 = (tahunLahir) => {
    const tahunSekarang = 2023;
    const umur = tahunSekarang - tahunLahir;
    return umur; 
}

console.log(hitungUmur(2001));
console.log(hitungUmur(2005));

//arrow
const hitungUmur3 = (tahunLahir, thnsekarang = 2023) => thnsekarang - tahunLahir;

console.log(hitungUmur3(2009));
console.log(hitungUmur3(2010));


//Array nama hewan

const animals = ["kucing","anjing", "ikan"];

console.log( animals[2]);

for(let i = 0; i<animals.length; i++){
    console.log(animals[i]);
}

//Object data key-value
const user = {
    name: "Alfin Nur Rahman",
    age : 21,
    major: "informatics"
}

console.log(user.name, user["age"]);


