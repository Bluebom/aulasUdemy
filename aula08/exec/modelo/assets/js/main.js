function watch() {

    function getTimeFromSec(sec) {
        const data = new Date(sec * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const timerWatch = document.querySelector('#timer');
    let sec = 0;
    let timer;
    
    function startWatch() {
        timer = setInterval(() => {
            sec++;
            timerWatch.innerText = getTimeFromSec(sec);
        }, 1000);
    }
    
    let cadeado = ''
    
    
    document.addEventListener('click', (e) => {
        const el = e.target;
    
        if (el.classList.contains('start')) {
            timerWatch.classList.remove('pausado')
            clearInterval(timer);
            startWatch();
        }
    
        if (el.classList.contains('stop')) {
            timerWatch.classList.add('pausado')
            clearInterval(timer);
        }
    
        if (el.classList.contains('cancel')) {
            timerWatch.classList.remove('pausado')
            sec = 0;
            clearInterval(timer);
            timerWatch.innerText = '00:00:00'
        }
    
    });
};

watch()

