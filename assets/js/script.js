
const searchForm = document.querySelector('form');
let searchQuery = "";

const results = document.querySelector('#results');
const btn = document.getElementById('btn');

async function fetchAPI(){
    const baseURL = `https://api.edamam.com/search?q=christmas+${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`

    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data.hits);
    for (let i=0; i<19;i++){
        showResults(data.hits[i]);
    }   

}

function showResults(searchResults){
    
        results.innerHTML += `<div>
        <p>${searchResults.recipe.label}<p>
        <a href="${searchResults.recipe.url}" target ="_blank">Link<p>
        <img src="${searchResults.recipe.image}"
        </div>`;
    
}


searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    results.innerHTML='';
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
})