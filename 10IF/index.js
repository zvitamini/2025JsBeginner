//* if segmentin kullanımı; if koşullar için kullanılır, true or false çıktı verir.

/* let yas=5;

if (yas >= 18) {
    console.log("Reşit birey tespit edildi");
}else{
    console.log("reşit olmayan birey tespit edildi");
}*/

/*let isStudent = true;

if (isStudent) {
    console.log("Sen bir öğrencisin")
}else{
    console.log("bir öğrenci değilsin")
}*/

/*
let yas = 25;
let ehliyet= true;

if (yas >= 18) {
    console.log("yaşınız uygun");
    if (ehliyet) {
        console.log("ehliyetiniz var araba sürebilirsiniz.");
    }else{
        console.log("ehliyetniz yok araba süremezsiniz!")
    }
    
}else{
    console.log("yaşınız uygun değil, 18 yaşından büyük olmalısınız.");
}
*/

/*let age= 101;
if (age > 100) {
    console.log("Abı hayatı nereden buldun ölümsüz müsün yoksa? Abi siteyi boşver sana mezar satalım biz");
}
else if ( age == 0){
    console.log("siteye giremezsin, önce doğmalısın");
}
else if (age < 0) {
    console.log("hatalı giriş, yaş 0 dan küçük olamaz");
}
else if (age >=18) {
    console.log("Siteye giriş yapıldı");
}
else{
    console.log("18 yaşının altında olanlar siteye giriş yapamaz");
}
*/

const myText=document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myReset = document.getElementById("myReset");
const resultelement= document.getElementById("resultelement");
const resultelement2= document.getElementById("resultelement2");
let clearText= "";
let age;

myReset.onclick = function(){
    document.getElementById("myText").value=clearText;
    resultelement.textContent = clearText;
    resultelement2.textContent = clearText;
}

mySubmit.onclick =function(){
    age=myText.value;
    age=Number(age)

    if (age > 100) {
        resultelement.textContent = `Ölmeyi mi unuttun ${age} yaşında da olmazsın hani...`;
    }
    else if (age == 0) {
        resultelement.textContent = `Doğmayı unutmuşsun ${age} yaşında burda işin ne?`;
    }
    else if (age == 17) {
        resultelement.textContent = `Teoman buna şarkı bile yazmış, daha 17 misin sennnnnnnn! giremezsin seneye bekleriz ♥`;
    }
    else if (age >= 18) {
        resultelement.textContent = `Reşitsin yaşın tutuyor`;
        if (age > 69) {
           resultelement2.textContent= `gerçi ${age} yaş çok şüpheli bu yaşta tek ayağın çukurda olur neyse gir bakim yaş 70 iş bitmemiş`;     
        }
        else{
            resultelement2.textContent= clearText;
        }
    }
    else if (age < 0) {
        resultelement.textContent=`${age} yaşında nasıl olabilirsin! ya nasıl eksi yaş olabilir sallama uza`;
    }
    else{
        resultelement.textContent= "18 yaşındna küçükler giremezler, büyü de gel. Bol süt iç. uza";
    }
}