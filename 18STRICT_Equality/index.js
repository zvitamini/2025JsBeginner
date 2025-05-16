//* = atama / assignement operator
//* == equal yani eşittir mi sorgusunda kullanılır genellikle if yapısının içinde
//* === strict equality operator if value datatype eşitmi diye sorgularken kullanılırz
//* != eşitdeğil, ineguality operator
//* !== strict inequality operator

const PI = 3.14;
if (PI !== "3.14") {
    console.log("PI ama data tipi burada farklı biri string biri number");
} else {
    console.log("bu sayı PI değildir");
}

if (PI == "3.14") {
    console.log("Burada sayılar aynı ama sorguda sadece içerik aynı gözüküyor mu dediğimiz için PI 3.14 stringle eşit");
} else {
    console.log("a");
}

if (PI === "3.14") {
    console.log("a");
} else {
    console.log("Veri tipleri farklı olduğu için bu sayı PI dönmez");
}

if (PI!= "3.14") {
    console.log("Burada a");
} else {
    console.log("PI değeri ile içindek aynı yani string olan 3.14 e eşit gözüküyor");
}