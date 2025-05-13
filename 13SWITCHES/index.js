// SWITCH yapısını keşfedelim

const sayacBtn = document.getElementById("sayacBtn");
const myLabel = document.getElementById("myLabel");
let days= 0;

sayacBtn.onclick = function(){
    days ++;
    if (days == 8) {
        days= 0;
    } else {
        switch (days) {
            case 1:
                myLabel.textContent ="it is Monday";
                break;
            case 2:
                myLabel.textContent ="it is Tuesday";
                break;
            case 3:
                myLabel.textContent ="it is Wednesday";
                break;
            case 4:
                myLabel.textContent ="it is Thursday";
                break;
            case 5:
                myLabel.textContent ="it is Friday";
                break;
            case 6:
                myLabel.textContent ="it is Saturday";
                break;
            case 7:
                myLabel.textContent ="it is Sunday";
                break;

            default:
                myLabel.textContent ="";
                break;
        }
    }

}

let day = 2;

switch(day){
    case 1:
        console.log("it is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wendsday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is nat a day`);

}

let testPuan = 12;
let gecerNot;

switch (true) {
    case testPuan >= 95:
        gecerNot= "AA"
        break;
    case testPuan >= 85:
        gecerNot= "BA"
        break;
    case testPuan >= 75:
        gecerNot= "BB"
        break;
    case testPuan >= 65:
        gecerNot= "CC"
        break;
    case testPuan >= 60:
        gecerNot= "CB"
        break;
    case testPuan >= 55:
        gecerNot= "DC"
        break;
    case testPuan >= 50:
        gecerNot= "DD"
        break;
    default:
        gecerNot= "FF"
        break;
}
console.log(gecerNot);

