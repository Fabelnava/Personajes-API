const API = "https://jsonplaceholder.typicode.com/users";

const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            llenarDatos(json);
        })

        .catch((error) => {
            console.log("Error", error);
        })

};


const llenarDatos = (dato) => {
    let html = "";
    dato.forEach((pj) => {

        html += '<div class="card" style="width: 18rem;">'
        html += `<img src="${pj.id}" class="card-img-top" alt="...">`
        html += '<div class="card-body">'
        html += `<h5 class="card-title">${pj.name}</h5>`
        html += `<p class="card-text">${pj.username}</p>`
        html += `<p class="card-text">${pj.city}</p>`
        html += `<p class="card-text">${pj.phone}</p>`
        html += `<a href="#" class="btn btn-primary">${pj.email}</a>`
        html += '</div>'
        html += '</div>'

    });

    document.getElementById("datosPersonajes").innerHTML = html;

};
getData(API);
