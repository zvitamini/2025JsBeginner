// Random password yapma kodlaması
//Şu ana kadar öğrendiklerimizin üstüne bunları ekleyelim.

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcçdefgğhıijklmnoöprsştuüvyzqwx";
    const uppercaseChars= "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZQWX";
    const numberChars= "0123456789";
    const symbolChars= "!£#$½^&*()_+-?";

    let allowedChars=``;
    let password =``;

    allowedChars += includeLowercase ? lowercaseChars : ``;
    allowedChars += includeUppercase ? uppercaseChars : ``;
    allowedChars += includeNumbers ? numberChars : ``;
    allowedChars += includeSymbols ? symbolChars : ``;

    console.log(allowedChars);
    if (length <= 0) {
        return `(şifrenizin uzunluğu 1 den az olamaz!)`;
    }
    if(allowedChars.length === 0){
        return `(şifre oluşturabilmek için en az 1 özelliği aktif etmelisiniz!)`;
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor( Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return password;
}

const passwordLenght = 6;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols= true;

const password = generatePassword(passwordLenght,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols);
console.log(`Şifreniz hazırlandı: ${password}`);