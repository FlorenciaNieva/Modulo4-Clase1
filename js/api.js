const baseURL = "https://rickandmortyapi.com/api";

const getCharacters = () => {
    fetch(`${baseURL}/character`) //promesa
        .then((response) => response.json()) // respuesta parseada
        .then((data) => showCharacters(data.results)) // data
        // .catch((error) => alert(error)); solamente para respuestas que vienen en rejected
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

const pagination = (page) => {
    fetch(`${baseURL}/character/?page=${page}`)
    .then((response) => response.json())
    .then((data) => showCharacters(data.results));
};

const getFilterCharacters = (params) => {
    fetch(`${baseURL}/character/?${params}`)
        .then((response) => response.json())
        .then((data) => showCharacters(data.results));
}

window.onload = () => getCharacters();