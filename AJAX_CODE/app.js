const form = document.querySelector('#search')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const dat = (form.elements.q.value);
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q= ${dat}`);
    console.dir(res);
    const img = document.createElement('IMG');
    img.src = (res.data[0].show.image.medium);
    const name = document.createElement('h2');
    name.textContent = (res.data[0].show.name);
    document.body.append(img);
    document.body.append(name);

})
