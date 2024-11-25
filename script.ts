import { parse } from 'node-html-parser';

var root:any;
try {
    root = parse('body');
}
catch(err) {
    root = document.body;
}

async function fetchPokemon() {
    let data:string;
    
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => {
        return response.json() as any;
    })
    .then(data => {
        root.innerHTML = `<h1>${data.species.name}</h1><p>The Pokemon is ${data.species.name}. It is has a height of ${data.height} decimeters and a weight of ${data.weighht} hectograms.</p><img src=${data.sprites.front_default}>`;
        root.innerHTML = root.innerHTML + `<a href="${data.species.url}"><button>${data.species.name} Species JSON Data!</button></a>`;
    })
    .catch(error => {
        console.log("Error: " + error);
    });
 }
 fetchPokemon();