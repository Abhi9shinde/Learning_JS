const btn1 = document.querySelector('#btn1');
const h1 = document.querySelector('h1');
btn1.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor = `RGB(${r},${g},${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    if (r < 70 && g < 70 && b < 70) {
        h1.style.color = 'white';
    }
    else {
        h1.style.color = 'black';
    }
})


