import axios from 'axios';

const getProducts = async (state1, state2) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character');
    // console.log(peticion);
    state1(peticion.data.results);
    state2(peticion.data.results);

    //await axios.get('').then(response => { console.log(response.data); }).catch(error => { console.log(error); })
}
const postProducts = async (setIsLoading) => {
    setIsLoading(true);
    document.body.style.pointerEvents = 'none'; //Desactiva clicks
    const peticion = await axios.post('https://reqres.in/api/posts', { title: "Hello World!", body: "This is a new post." })
        .then((response) => {
            setIsLoading(false);
            document.body.style.pointerEvents = 'all'; //Activa clicks
            console.log(response.data);
        });
}

export {
    getProducts,
    postProducts
}