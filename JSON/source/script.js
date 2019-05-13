/*let options = {
    height: 768,
    width: 1366,
    background: 'red',
    font: {
        size: '24px',
        color: '#fff'
    }
};

console.log(JSON.stringify(options));
console.log(JSON.parse(JSON.stringify(options)));*/

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, password);
    request.open('GET', 'source/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //status
    //statusText
    //responseText / response
    //readyState
    
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = (inputRub.value/data.usd).toFixed(2);

        } else {
            inputUsd.value = 'something wrong';
        }
    });
});

