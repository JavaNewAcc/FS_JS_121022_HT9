window.onload = function () {

    let startPoint = document.querySelector(`.startPoint`);
    let counterStart = 10;
    let counterDiv = document.createElement(`div`);
    counterDiv.setAttribute(`style`, `font-size:10rem`);
    counterDiv.setAttribute(`class`, `animatedCounter`);
    counterDiv.append(counterStart);
    startPoint.append(counterDiv);

    function counter() {
        if (counterStart == 0) {
            alert(`ВИ дочекались знижки!`);
            clearInterval(counter);
        }
        else {
            counterStart--;
            counterDiv.append(counterStart);
            startPoint.append(counterDiv);
            counterDiv.innerText = counterStart;
        }
    }

    
    // setInterval(counter, 1000);
}