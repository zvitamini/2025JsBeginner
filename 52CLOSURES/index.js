// CLOSURES = fonksiyon içinde fonksiyon tanımlamak için kullanılan bir çeşit metod, yapıdır.
// aşağıda örnekler yer alamkta inceleyebilirsiniz. React, Vue ve Angular da kullanabilirsiniz

// example 1 //
/*
function outer() {
    let message = "Bu bir mesaj yazısıdır.";

    function inner() {
        console.log(message);
    }

    inner();
}


outer();
*/

// Example 2 //
/*
function createCounter() {
    let count = 0;
    function incrament(userNumber) {
        count ++;
        console.log(`Count incrament to ${count}`);

        if (userNumber != null) { //bunu kendim ekledim sırf function değeri girilirse bunu yazsın diye siz yazmasanız da olur
            console.log(`girilen sayı ${userNumber}`);
        }
    }

    function getCount() {
        return count;
    }
    return {incrament, getCount};
}

const counter = createCounter();

counter.incrament();
counter.incrament();

//count u sıfırlayarak yine devam etmek için şunu yapın;
console.log(`counter: ${counter.getCount()}`);
*/

// Example 3 //
function createGame() {
    let score=0;

    function increaseScore(points) {
        score += points;
        console.log(`+ ${points}`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}`);
    }

    function getScore() {
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

for (let i = 0; i < 11; i++) {
    game.increaseScore(i +1);

    if (i % 2 == 0) {
        game.decreaseScore(Number(i) - 1);
    }
}

console.log(`The final score is: ${game.getScore()}`);

