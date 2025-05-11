// const = değiştirilemeyen variablesler için bu kullanılır.

const PI = 3.14159;

let radius;
let circulumference;


//radius = window.prompt('Enter the radius of a circle');
//radius = Number(radius);


//console.log(circulumference);

document.getElementById("myGir").onclick = function(){
    radius = document.getElementById("myText").value ;
    document.getElementById("myText").value = '';
    radius = Number(radius);
    circulumference = 2 * PI * radius;
    document.getElementById("myP").innerText = `Çemberinizin yarı çapı ${radius}cm`;
    document.getElementById("myCircle").textContent = `çemberinizin çevresi de ${circulumference}cm olarak hesaplandı.`;
}