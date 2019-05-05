window.addEventListener('DOMContentLoaded', function() {


    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {

            for ( let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    //Timer

    let deadLine = '2019-05-13';

    function getTimeRemaining (endTime) {
        let t = Date.parse(deadLine) - Date.parse(new Date()),    
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds':seconds
        };
    }

    function formatTimeRemaining(t) {
        if (t > 99 ) { 
            return 99;
        } else if (t/10 < 1) {
            return '0' + t;
        } else { 
            return t;
        }
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = formatTimeRemaining(t.hours);
            minutes.textContent = formatTimeRemaining(t.minutes);
            seconds.textContent = formatTimeRemaining(t.seconds);

            if (t.total <= endTime) {
                clearInterval(timeInterval);
            }
        }
        }

    setClock('timer', deadLine);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let moreBtns = document.querySelectorAll('.description-btn');
    console.log(moreBtns);

    for (let value of moreBtns) {
    value.addEventListener('click', function() {
            overlay.style.display = 'block';
    });
    }

});


