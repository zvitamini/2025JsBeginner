const textBox = document.getElementById("textBox");
const toFahreneit = document.getElementById("toFahreneit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;
let firstTemp;


function convert() {
    if (toFahreneit.checked) {
        firstTemp= Number(textBox.value);
        temp =Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent =`${firstTemp.toFixed(1)}° Celcius ${temp}° Fahreneit e eşittir`;

    } else if(toCelcius.checked){
        firstTemp= Number(textBox.value);
        temp =Number(textBox.value);
        temp = (temp - 32)* (5/9);
        result.textContent =`${firstTemp.toFixed(1)}° Fahreneit ${temp}° Celcius e eşittir`;
    }else{
        result.textContent = `Lütfen bir dönüştürme türünü seçin`;
    }
}