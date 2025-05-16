// Klasik olarak o çok sevdiğim döngülerde bugün While döngüsü, koşul boyunca dön babam dön döngülerimiz

/*let username;

do{    
    username = window.prompt("İsmini gir lütfen");
}while (username === "" || username === null)


console.log(`Hoş geldin ${username}`);

if (username === "" || username === null) {
    document.getElementById("myP").innerText = "Kullanıcı adı boş bırakılamaz";
} else {
    document.getElementById("myP").innerText = `Hoş geldin ${username}`;
}*/

let loggedIn = false;

let username;
let password;

do{
    username = window.prompt(`Enter your username`);
    password= window.prompt(`Enter your password`);

    if ((username === "myUsername" && password === "myPassword") || (username === "zvitamini" && password === "123")) {
        loggedIn = true;
        document.getElementById("myP").innerText = "Şifre başarılı içerdeyiz! " +`Hoşgedin ${username}`;
        console.log("Şifre başarılı içerdeyiz!"+`Hoşgedin ${username}`);
    } else {
        window.alert("hatalı kullanıcı adı tekrar deneyin");
        
    }
}while (!loggedIn)