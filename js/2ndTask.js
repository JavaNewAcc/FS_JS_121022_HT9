window.onload = () => {

    let [...imgArr] = document.querySelectorAll('img');
    let div = document.createElement('div');
    let minHeight = 5000;
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

    let backBtn = document.createElement(`button`);
    backBtn.classList.add('col-2', 'button', 'backBtnHover')
    div.appendChild(backBtn);
    backBtn.style.position = 'absolute';
    backBtn.style.left = '0px';
    backBtn.style.height = '100%';


    let frwrdBtn = document.createElement(`button`);
    frwrdBtn.classList.add('col-2', 'button', 'frwrdBtnHover')
    div.appendChild(frwrdBtn);
    frwrdBtn.style.position = 'absolute';
    frwrdBtn.style.right = '0px';
    frwrdBtn.style.height = '100%';

    function carousel() {
        if (document.getElementsByClassName('resumeBtn').length == 0) {
            currentImg.setAttribute(`src`, `${imgArr[counter].getAttribute('src')}`);
            counter++;
            if (counter == imgArr.length) { counter = 0 };
        }
        else {
            currentImg.setAttribute(`src`, `${imgArr[counter].getAttribute('src')}`); if (counter == imgArr.length) { counter = 0 };
        }
    }

    let resumeBtn = document.createElement(`button`);
    resumeBtn.classList.add('col-1', 'button', 'resumeBtn');
    resumeBtn.style.position = 'absolute';
    resumeBtn.style.left = `47%`;
    resumeBtn.style.top = `47%`;
    resumeBtn.style.backgroundImage = "url('./img/PlayBtn.png')";
    resumeBtn.style.backgroundSize = 'contain'
    resumeBtn.style.backgroundRepeat = 'norepeat';
    resumeBtn.style.borderRadius = '10px';

    resumeBtn.style.height = '60px';
    resumeBtn.style.width = '60px';


    intervalID = setInterval(carousel, 3000);

    frwrdBtn.addEventListener('click', function () { counter++; if (counter == imgArr.length) { counter = 0 }; clearInterval(intervalID); div.appendChild(resumeBtn); carousel(); });

    backBtn.addEventListener('click', function () { counter--; if (counter < 0) { counter = imgArr.length - 1 }; clearInterval(intervalID); div.appendChild(resumeBtn); carousel(); });

    resumeBtn.addEventListener('click', function () { div.removeChild(resumeBtn); counter++; if (counter == imgArr.length) { counter = 0 }; intervalID = setInterval(carousel, 3000); })
}
