let result1 = document.querySelector('#result1'),
    value1 = 0,
    worker;

// Autoexecutável function
(function(){
    function start() {
        worker = new Worker('worker.js');
        worker.onmessage = (e) => {
            value1 = e.data;
            result1.innerText = value1;
        }
    }

    document.querySelector('#startBtn').onclick = () => start();
    
})()