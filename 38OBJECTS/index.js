// object yani nesne tabanlı kodlama, evet bu kodlama gerçekten gözümüzü korkutuyor
//                   ama sorun değil js ile öğreneceğiz
//                   aşağıdaki örneklere bakarak sizler de bu nesne tabanlı kodlammayı keşfedebilirsiniz
//                   zvitamini_38_OBJECTS
const myH3 = document.getElementById("myH3");
const target = document.getElementById("typewriter");

let valueIndex = 0;
let charIndex = 0;

const person1 = {
    firstName : "Zeynep",
    lastName  : "Yavuz",
    age: "27",
    isEmployed : true,
    justSay: "Ben geldim ve mutluyum çünkü js öğreniyorum saat gece 01:45!",
    sayHello: () => {console.log("Merhaba ben Z vitamini!")},
    sayBye: function () {console.log("Hoşçakal ♥")},
    eat: () => {console.log("sarma ve et yemeyi severim")},

};

const person2 ={
    firstName: "Seda",
    lastName: "Yavuz",
    age: "28",
    isEmployed: true,
    justSay: "En sevdiğim renktir mor, metalice ve rock müzik severim mumlara bayılırım ama en sevdiğim şey denizdir!",
    sayHello: function () {console.log("Naber millet ben Seda!")},
    sayBye: function () {console.log("Hoşçakal ♥")},
    eat: () => {console.log("En sevdiğim yemek sevdiğim insanlarla sıcak yemekler ama aburcubur da çok severim ♥")},
};
let currentPerson = person1;
const values =[]

function prepareValues(person) {
    values.length = 0;
    values.push(
        { text: person.firstName, color: "red"},
        { text: person.lastName, color: "blue"},
        { text: person.age.toString(), color: "green"},
        { text: person.isEmployed? "Çalışıyor": "İşsiz", color: "orange"},
        { text: person.justSay, color: "magenta"},
    )
}

function typeNextChar() {
    if (valueIndex >= values.length){
        setTimeout(() => {
            deleteText(() => { //! bu fonksiyonu aşağıya ekledim
                currentPerson = currentPerson === person1 ? person2: person1;
                startTyping(currentPerson); //! fonksiyonu eklemelisin!
            });
        }, 1000);
        return;
    }

    const current = values[valueIndex];
    const spandId = `word-${valueIndex}`;

    //altta ilk harfe renkli seçim yapıyoruz, izle...
    if (charIndex === 0) {
        const span = document.createElement("span");
        span.classList.add(current.color);
        span.id =spandId;
        target.appendChild(span);
    }

    const span = document.getElementById(spandId);
    span.textContent += current.text.charAt(charIndex);
    charIndex++;

    if (charIndex < current.text.length) {
        setTimeout(typeNextChar,75);
    } else {
        charIndex = 0;
        valueIndex ++;
        target.innerHTML += " ";
        setTimeout(typeNextChar,300);
    }
}

function deleteText(callback) {
    const text = target.textContent;
    if (text.length > 0) {
        target.textContent = text.slice(0, -1);
        setTimeout(() => deleteText(callback), 25);
    } else {
        callback();
    }    
}
function startTyping(person) {
    valueIndex = 0;
    charIndex = 0;
    target.innerHTML = ""; // temizle önce
    prepareValues(person);
    typeNextChar();
}

typeNextChar();
console.log(person1.firstName);
console.log(person1.lastName);

person1.sayHello();
person2.sayHello();

person1.eat();
person2.eat();

//myH3.innerHTML = person1.firstName;