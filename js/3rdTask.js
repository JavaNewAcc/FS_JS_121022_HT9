window.onload = function () {

    let startPoint = document.querySelector(`.startPoint`);
    let counterStart = 60;
    let counterDiv = document.createElement(`div`);
    counterDiv.setAttribute(`style`, `font-size:10rem`);
    counterDiv.setAttribute(`class`, `animatedCounter`);
    counterDiv.append(counterStart);
    startPoint.append(counterDiv);
    let intervalID=""

    function counter() {
        if (counterStart <= 0) {
            alert(`Ви дочекались знижки!`);
            clearInterval(intervalID);
            console.log(clearInterval(counter));
        }
        else {
            counterStart--;
            counterDiv.append(counterStart);
            startPoint.append(counterDiv);
            counterDiv.innerText = counterStart;
        }
    }

    intervalID = setInterval(counter, 1000);
}