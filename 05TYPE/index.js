let yas = window.prompt("Kaç yaşındasınız?");
yas = Number(yas);
yas +=1;

console.log(yas, typeof yas);

let x = "0";
let y = "0";
let z = "0";

x = Number (x);

y = String(y);

z = Boolean(z); //* eğer boolean bir değişkenin içi boş bırakılırsa false çıktı alınır!

console.log( x , typeof x );
console.log( y , typeof y );
console.log( z , typeof z );