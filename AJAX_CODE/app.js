const form = document.querySelector('#search')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const dat = (form.elements.q.value);
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q= ${dat}`);
    (res.data[0].show.image.medium);
    const img = document.createElement('IMG');
    img.src = (res.data[0].show.image.medium);
    document.body.append(img);
})
