window.onload = () => {

    let [...imgArr] = document.querySelectorAll('img');
    let div = document.createElement('div');
    imgArr[0].parentElement.after(div);
    div.classList.add('text-center', 'w-100', 'm-auto');
    let currentImg = document.createElement('img');
    currentImg.classList.add('w-100', 'mt-3');
    let counter = 1;
    div.append(currentImg);
    currentImg.setAttribute(`src`, `${imgArr[0].getAttribute('src')}`);

    function carousel() {
        currentImg.setAttribute(`src`, `${imgArr[counter].getAttribute('src')}`);
        counter++;
        if (counter == imgArr.length) { counter = 0 };
    }

    setInterval(carousel, 3000);

}
