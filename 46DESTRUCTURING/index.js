//Destruckturing: 

//---------------EXAMPLE 1 ---------------  
// İKİ DEĞİŞKEN DEĞERİNİ DEĞİŞTİRİN

let a = 1;
let b = 2;

console.log(a, b);

[a,b] = [b,a];
console.log(a, b);

//---------------EXAMPLE 2 ---------------  
// Bir dizideki iki elementi değiştirin

const color = ["red", "green", "blue", "black" , "white"];

console.log(color);

[color[0], color[4]] = [color[4], color[0]];

console.log(color);

//---------------EXAMPLE 3 ---------------  
// DİZİLERDEKİ ELEMENTLERİ DEĞİŞKENLERLE DEĞİŞTİRİN

const renkler = ["red", "green", "blue", "black" , "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] =renkler;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors); // diğerleri tek tek elementleri alırken ... fonksiyonu tamamladı gördüğünüz üzere.

//---------------EXAMPLE 4 ---------------  
// OBJELERDEKİ DEĞERLERİ DEİĞİTİRİN

const person1 = {
    firstName: "Namık",
    lastName: "Kemal",
    born: 1840,
    job: "writer",
}

const person2 = {
    firstName: "Ümit",
    lastName: "Besen",
    born: 1956,
    job: "Arabesk Musiki",
}

const person3 = {
    firstName: "Ezio",
    lastName: "Aiditore",
    born: 1459,
    job: "Assassin",
}

const {firstName, lastName, born, job="işsiz"} = person1; //yanda bir obje içinden verilerin çekime örneği var. boş olanlar için ="" yaparak kodu tamamlayabilrisiniz

console.log(firstName,lastName,born,job);

//---------------EXAMPLE 5 ---------------  
// DESTRUCKTURE AMA FONKSİYON PARAMETRELERİ İÇİNDE KULLANIMI

function displayPerson({firstName, lastName, born, job="işsiz"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`${firstName} ${lastName} was born ${born}`);
    console.log(`${firstName} ${lastName} is a ${job}`);
    console.log(" ");
}

const kullanici1 = {
    firstName: "Namık",
    lastName: "Kemal",
    born: 1840,
    job: "writer",
}

const kullanici2 = {
    firstName: "Ümit",
    lastName: "Besen",
    born: 1956,
    job: "Arabesk Musiki",
}

const kullanici3 = {
    firstName: "Ezio",
    lastName: "Aiditore",
    born: 1459,
    job: "Assassin",
}
const kullanici4 = {
    firstName: "Zeynep",
    lastName: "Yavuz",
    born: 1998,
}
displayPerson(kullanici1);
displayPerson(kullanici2);
displayPerson(kullanici3);
displayPerson(kullanici4);
