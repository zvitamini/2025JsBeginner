// .checked = seçme işlemlerind ekullanılır
//* html check box veya radio btn elementleri

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const payBtn = document.getElementById("payBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if (myCheckbox.checked) {
        subResult.textContent = `Kullanıcı Üye oldu.`;
        subResult.classList.add("yesil");
        subResult.classList.remove("gri");
    } else {
        subResult.textContent = `Kullanıcı üye olmadı!`;
        subResult.classList.add("gri");
        subResult.classList.remove("yesil");
    }
    if (visaBtn.checked) {
        paymentResult.textContent = `Visa card seçildi ödeme yönlendiriliyor`;
        paymentResult.classList.add("mavi");
        paymentResult.classList.remove("yesil");
        paymentResult.classList.remove("gri");
    } else if (masterBtn.checked) {
        paymentResult.textContent = `Mastercard seçildi ödeme yönlendiriliyor`;
        paymentResult.classList.add("mor");
        paymentResult.classList.remove("yesil");
        paymentResult.classList.remove("mavi");
        paymentResult.classList.remove("gri");
    }  else if (payBtn.checked) {
        paymentResult.textContent = `Paypal seçildi ödeme yönlendiriliyor`;
        paymentResult.classList.add("turuncu");
        paymentResult.classList.remove("mor");
        paymentResult.classList.remove("yesil");
        paymentResult.classList.remove("mavi");
        paymentResult.classList.remove("gri");
    } 
    else{
        paymentResult.textContent = `Lütfen kartı seçiniz`;
        paymentResult.classList.add("gri");
        paymentResult.classList.remove("mor");
        paymentResult.classList.remove("yesil");
        paymentResult.classList.remove("mavi");
        paymentResult.classList.remove("turuncu");
    }
}