let _menu = document.getElementsByClassName('menu'),
    menuItems = document.querySelectorAll('.menu-item'),
    adv = document.getElementsByClassName('adv'),
    column = document.getElementsByClassName('column'),
    str = document.getElementById('prompt');



console.log(_menu);
console.log(menuItems);
console.log(str);

_menu[0].insertBefore(menuItems[2], menuItems[1]);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
document.getElementById('title').innerHTML = 'Мы продаем только подлинную технику Apple';
column[1].removeChild(adv[0]);

let opinion = prompt('Your opinion about Apple devices', "bullshit"),
    opinion_node = document.createTextNode(opinion),
    p = document.createElement('p');

p.textContent = opinion;

console.log(opinion_node);
console.log(p);

str.appendChild(p);



