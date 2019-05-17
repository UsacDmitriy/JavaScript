let drink = 0;

function shoot(arrow) {
    console.log("You have shoot...");

    let promise = new Promise(function(resolve, reject) {
        setTimeout (function() {
            Math.random() > 0.5 ? resolve({}) : reject('You missed');
        }, 2000);
    });

    return promise;
}

function win() {
    console.log('You are winner');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer(){
    console.log('You got beer');
}

function giveMoney() {
    console.log("you got money");
}

function loose() {
    console.log("You are looser");
}
shoot({})
        .then(mark => console.log('We made headshot'))
        .then(win)
        .catch(loose);
