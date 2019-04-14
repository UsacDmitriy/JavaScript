let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

/*btn[0].onclick = function () {
    alert('you pushed your first button');
}

btn[0].onclick = function () {
    alert('you pushed your first button again');
};*/

btn[0].addEventListener('click', function(event) {
    console.log('Apeear event: ' + event.type + ' on element ' + event.target);
});

wrap.addEventListener('click', function() {
    console.log('Apeear event: ' + event.type + ' on element ' + event.target);
});

/*btn[0].addEventListener('mouseenter', function() {
    alert('You are on button');
});*/

link.addEventListener('click', function(event) { 
    event.preventDefault();
    console.log('Apeear event: ' + event.type + ' on element ' + event.target);

});
/*
btn.forEach(function(item){
    item.addEventListener('mouseleave', function() {
        console.log('we leaved');
    });
});*/