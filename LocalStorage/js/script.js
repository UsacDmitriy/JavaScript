/*localStorage.setItem('number', 1);

console.log(localStorage.getItem('number'));

localStorage.removeItem('number');

localStorage.clear();*/

window.addEventListener('DOMContentLoaded', function() {

    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];

    if (localStorage.getItem('isChecked') == 'true') {
        checkbox.checked = true;
    }
    if (localStorage.getItem('bg') == 'changed') {
        form.style.backgroundColor = "#FF4766";
    }

    checkbox.addEventListener('click', function() {
        localStorage.setItem('IsChecked', true);
    });

    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#FF4766";
    });

    let person = {
        name: 'Alex',
        age: 25,
        tech: ['mobile', 'notebook']
    }

    let serialisedPerson = JSON.stringify(person);
    localStorage.setItem('alex', serialisedPerson);

    console.log(JSON.parse(localStorage.getItem('alex')));

});