import axios from 'axios';

const getProducts = async (state1,state2) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character');
    // console.log(peticion);
    state1(peticion.data.results);
    state2(peticion.data.results);

    //await axios.get('').then(response => { console.log(response.data); }).catch(error => { console.log(error); })
}

export {
    getProducts
}