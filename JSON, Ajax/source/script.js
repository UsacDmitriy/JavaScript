
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function convert() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();

            request.open('GET', 'source/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.onload = function () {
                if (this.status == 200) {
                    resolve(this.response)
                } else {
                    reject('Something wrong!');
                }
            }

            request.send();
        });   
    }

    convert()   
            .then(response => {
                let data = JSON.parse(response);

                inputUsd.value = (inputRub.value/data.usd).toFixed(2);
            })
            .catch(response => {inputUsd.value = response;});
});

