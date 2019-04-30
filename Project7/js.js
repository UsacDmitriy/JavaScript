//let timerId = setTimeout(sayHello, 4000);
//clearTimeout(timerId);

/*let timerId = setInterval(sayHello, 4000);
clearTimeout(timerId);


function sayHello() {
    console.log('Hello guys!');
}*/

/*let timerId = setTimeout(function log(){
    console.log('hello');
    setTimeout(log, 2000);
})*/

let btn = document.querySelector('.button'),
    elem = document.querySelector('.quater');

    console.log(btn);
    console.log(elem);

function myAnimation () {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame () {
        if (pos == 450) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.marginTop = pos + 'px';
            elem.style.marginLeft = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.first')) {
        console.log('Hello');
    }
});
