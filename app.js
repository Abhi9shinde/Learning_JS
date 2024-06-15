const input = document.querySelector('#username');
const h1 = document.querySelector('h1');
input.addEventListener('input', function (e) {
    h1.innerText = `Welcome, ${input.value}`;
});