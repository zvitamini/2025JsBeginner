// Number Guessing Game

const minNumber = 0;
const maxNumber = 100;
const guessNumber = document.getElementById("guessNumber");
const checkGuess = document.getElementById("checkGuess");
const guessUyari = document.getElementById("guessUyari");
const myP = document.getElementById("myP");
const message = document.getElementById("message");

const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber +1)) + minNumber;
console.log(randomNumber);
let attemps = 0;
let guess;
let running = true;

checkGuess.onclick = function(){
    guess = Number(guessNumber.value);
    console.log(guess);
    

    if (isNaN(guess) || guess > maxNumber || guess < minNumber) {
        guessUyari.innerText= `${guess} geçerli aralıkta değildir, lütfen en az 0 en çok 100 arasında bir sayı değeri girin!`;
    } else{
        attemps ++;
        guessUyari.innerText= ``;
        if (guess < randomNumber) {
            guessUyari.innerText= `${guess} düşük şu sayıyı arttır biraz `;
        }else if (guess > randomNumber) {
            guessUyari.innerText= `${guess} büyük oldu düşür biraz`;
        } else {
            guessUyari.innerText= `Tebrikler! doğru cevap ${randomNumber} tam ${attemps} denemende buldun. Aferin sana!`;
            confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 }
        });
            if (attemps >= 10) {
                 myP.innerText= `Çok fazla uğraştın ama buldun helal sana tam ${attemps} kere denedin!`;
            } else if (attemps == 5){
                myP.innerText= `Biraz uğraştın ama tam ${attemps} kere denedin ve buldun helal!`;
            } if (attemps == 4) {
                myP.innerText=" Dördüncü kerede harikaaa!";
            } else if(attemps == 3) {
                 myP.innerText="Tebrikler ilk üçtesin yakışır";
            }else if (attemps == 2) {
                 myP.innerText="Bu ne şans ikinci denemede!";
            } if (attemps == 1) {
                 myP.innerText="Tekte bildin süperrrr";
            } else {
                myP.innerText="";
            }
        }
    }
}