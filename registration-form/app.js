document.querySelector('.banner-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.container').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.main').style.background = ' background:url(images/background2.jpg) center no-repeat';
});

document.querySelector('.btn1').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.container').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.banner').style.cssText = 'background:url(images/background1.jpg) center no-repeat;';
});

