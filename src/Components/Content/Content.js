
const URL='https://rickandmortyapi.com/api/character'

let Character=[{}]

window.addEventListener('DOMContentLoaded', getApi(URL))

function getApi(URL) {
    fetch(URL)
    .then( response => response.json() )
    .then (data => {
        data.results.forEach(Character => {
            content(Character)
        });
    })
}

export function content(Character) {
     const Character=[
        {
       img:Character.image,
       name:Character.name
        },
    ] 
}
 