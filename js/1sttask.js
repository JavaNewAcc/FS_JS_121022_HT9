window.onload = () => {

    let [...imgArr] = document.querySelectorAll('img');
    let div = document.createElement('div');
    let minHeight = 50000;
    let minWidth = 0;
    let counter = 1;

    imgArr.forEach(element => {
        if (element.naturalHeight < minHeight) {
            minHeight = element.naturalHeight;
            minWidth = element.naturalWidth;
        }
    });

    imgArr[0].parentElement.after(div);
    let aspectCorrector = (div.getBoundingClientRect().width) / minWidth;
    div.classList.add('text-center', 'mt-3');
    div.style.position = 'relative';
    let currentImg = document.createElement('img');
    currentImg.classList.add('col-12');
    currentImg.style.maxHeight = `${minHeight * aspectCorrector}px`
    div.append(currentImg);
    currentImg.setAttribute(`src`, `${imgArr[0].getAttribute('src')}`);

    function carousel() {
        currentImg.setAttribute(`src`, `${imgArr[counter].getAttribute('src')}`);
        counter++;
        if (counter == imgArr.length) { counter = 0 };
    }

    intervalID = setInterval(carousel, 3000);
}