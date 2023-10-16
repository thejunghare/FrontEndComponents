var w;

function stop() {
    w.terminate()
    w = undefined
}

function start() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            w = new Worker("demo_workers.js");
        }
        w.onmessage = function (event) {
            document.getElementById('result').innerHTML = event.data;
        }
    } else {
        document.getElementById('result').innerHTML = "Sorry, your browser does not support web workers!!"
    }
}
