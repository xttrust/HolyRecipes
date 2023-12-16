const searchForms = document.querySelectorAll('.search-function');
let searchQuery = "";
let mealType = "";
let dishType = "";
let results;
let baseURL;

const resultsHTML = document.querySelector('#results');
const btn = document.getElementById('button-search');

async function fetchAPI() {
    baseURL = `https://api.edamam.com/search?q=christmas+${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`

    if (mealType != "") {
        baseURL += `&mealType=${mealType}`
    }

    if (dishType != "") {
        baseURL += `&dishType=${dishType}`
    }


    const response = await fetch(baseURL);
    const data = await response.json();

    results = data.hits;

    for (let i = 0; i < results.length; i++) {
        showResults(results[i]);
    }

    console.log(results)


}

function showResults(results) {

    let ingredientLines = "";
    let instructionLines = "";
    let ingredients = results.recipe.ingredientLines;
    let instructions = results.recipe.instructionLines;

    for (let i = 0; i < ingredients.length; i++) {
        ingredientLines += `<li> ${ingredients[i]} </li>`
    }



    if (instructions && instructions.length > 0) {
        for (let i = 0; i < instructions.length; i++) {
            instructionLines += `<li> ${instructions[i]} </li>`;
        }


        resultsHTML.innerHTML += `<div>
            <h2>${results.recipe.label}</h2>
            <a href="${results.recipe.url}" target ="_blank">Link<p><a/>


            <h3> 'Ingredient Line Values' </h3>
            <ol>
                ${ingredientLines}
            </ol>
            <h3> 'Instruction Line Values' </h3>
            <ol>
                ${instructionLines}
            </ol>
            <img src="${results.recipe.image}"
        </div>`;
    }
}


searchForms.forEach(searchForm => {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        resultsHTML.innerHTML = '';
        searchQuery = e.target.querySelector('input').value;
        // mealType = e.target.querySelector('#mealType').value;
        // dishType = e.target.querySelector('#dishType').value;
        fetchAPI();
    })
})


// Functionality to change navbar styles when page is hovered 
$(document).ready(function () {

    $(window).scroll(function () {
        // style when scrolling 
        if ($(window).scrollTop() > 50) {
            $('#navbar').removeClass('bg-transparent').addClass('bg-scroll')
            // style when scrolled to top
        } else {
            $('#navbar').removeClass('bg-scroll').addClass('bg-transparent');
        }
    });
});