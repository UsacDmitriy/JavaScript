let _menu = document.getElementsByClassName('menu'),
    menuItems = document.querySelectorAll('.menu-item');
    


console.log(_menu);
console.log(menuItems);

_menu[0].insertBefore(menuItems[2], menuItems[1]);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';