const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

$('#home-btn').addEventListener('click', () => getCharacters());

const showView = (view) => {
    $$(".view").forEach((view) => view.classList.add("visually-hidden"));
    $(`#${view}`).classList.remove("visually-hidden");
};

let page = 1;

const showCharacters = (characters) => {
    $("#characters-container").innerHTML = "";
    if (characters) {
        showView('characters-container');
        for (let { image, name, id } of characters) {
        $("#characters-container").innerHTML += `
            <div class="card col-3 m-1">
            <img src="${image}" class="card-img-top mt-2" alt="character-picture" />
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
            </div>
            <a href="#" class='btn btn-info mb-2' onclick=getCharacterById(${id})>See details</a>
        </div>
        `;
        }
    } else {
        showView('no-results');
    }
};

const showCharacterDetail = ({
    name,
    image,
    status,
    species,
    gender,
    origin,
}) => {
    showView("character-detail");
    $("#character-detail").innerHTML = `
    <div class="card col-4">
        <img src="${image}" class="card-img-top mt-2" alt="character-picture" />
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <ul>
                <li>Estado: ${status}</li>
                <li>Especie: ${species}</li>
                <li>Genero: ${gender}</li>
                <li>Origen: ${origin.name}</li>
            </ul>
        </div>
        <a href="#" class='btn btn-danger mb-2' onclick="showView('characters-container')">Go back</a>
    </div>`;
};

// PAGINACIÓN
const goNext = () => {
    if (page < 42) {
        page = page + 1;
        pagination(page);
        $('#page-number').innerHTML = `${page}`;
    }
}

const goPrew = () => {
    if (page > 1) {
        page = page - 1;
        pagination(page);
        $('#page-number').innerHTML = `${page}`;
    }
}

// Desplaza la página hacia el inicio al hacer click en los botones
const pageTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave (scroll suave)
    });
}

$('#page-number').innerHTML = `${page}`;

$('#prew-btn').addEventListener('click', () => {
    goPrew()
    pageTop();
});

$('#next-btn').addEventListener('click', () => {
    goNext()
    pageTop();
});

//FILTROS DE BUSQUEDA
const filterCharacter = () => {
    let params = {
        name: $('#name-input').value,
        gender: $('#gender-select').value,
        status: $('#status-select').value,
    };
    getFilterCharacters(new URLSearchParams(params).toString());
}

$('#filters-btn').addEventListener('click', () => filterCharacter());