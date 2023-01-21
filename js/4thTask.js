window.onload = () => {

    let modalWindowBg = document.querySelector('.modWinBg');

    let modWinOpener = document.querySelector('.modWinOpener');

    let modalWindow = document.querySelector('.modWin');

    function modalPlacing() {
        modalWindow.style.top = `${window.visualViewport.height / 2 - modalWindow.scrollHeight / 2}px`;

        modalWindow.style.left = `${window.visualViewport.width / 2 - modalWindow.scrollWidth / 2}px`;
    }

    modWinOpener.addEventListener('click', function () { modalWindowBg.style.display = 'block'; modalPlacing() });

    let modWinClose = document.querySelector('.closeBtn');
    modWinClose.addEventListener('click', function () { modalWindowBg.style.display = 'none' });

    let modWinBg = document.querySelector('.modWinBg');
    modWinBg.addEventListener('click', function (event) {
        if (event.target == modWinBg) {
            modalWindowBg.style.display = 'none';
        }
    })
}