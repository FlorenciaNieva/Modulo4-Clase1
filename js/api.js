const baseURL = "https://rickandmortyapi.com/api";

const getCharacters = () => {
    fetch(`${baseURL}/character`) //promesa
        .then((response) => response.json()) // respuesta parseada
        .then((data) => showCharacters(data.results)); // data
};

const getCharacterById = (id) => {
    fetch(`${baseURL}/character/${id}`) //promesa
        .then((response) => response.json()) // respuesta parseada
        .then((data) => id ? showCharacterDetail(data) : showCharacters(data.results)
    ); // data
};

// const getLocation = (location) => {
//   fetch(`${baseURL}/location/${location}`) //promesa
//     .then((response) => response.json()) // respuesta parseada
//     .then((data) => console.log(data)); // data
// };

window.onload = getCharacters();