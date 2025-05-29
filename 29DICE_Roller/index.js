//zar yuvarlama için kodlar

function ardisikZarlar(zarDizisi) {
    // Dizinin uzunluğu 6 değilse direkt false
    if (zarDizisi.length !== 6) {
        return false;
    }

    for (let i = 0; i < 6; i++) {
        if (zarDizisi[i] !== i + 1) {
            console.log("Altı zar attın ama zarlarının sırası ardışık değil");
            return false;
        }
    }

    return true;
}

function rollDice(){
    const numOfDice= document.getElementById("numOfDice").value;
    const diceResult= document.getElementById("diceResult");
    const diceImage= document.getElementById("diceImage");
    const values = [];
    const images = [];

    for(let i =0; i <numOfDice; i ++){
        const value =Math.floor( Math.random() *6) + 1; // * burada hatırlatma yapmak istiyorum random fonksiyonumuz bize 0 ile 6 arasında değer veriyordu +1 dediğimizde 1 2 3 4 5 6 değerleri dönecektir
        //console.log(value);
        values.push(value);
        images.push(`<img src= "image/${value}.png" width="80" alt="zar">`);
    }
    //console.log(values); // atılan zarları izleyebilirim buradan

    diceResult.textContent = `zar: ${values.join(', ')}`; 
    diceImage.innerHTML= images.join('');


    if (ardisikZarlar(values)) {
        console.log("🎉 bu inanılmaz düşük bir ihtimal!");
        console.log(values.join(" "));
        // 🎊 Konfeti efekti:
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    }
}