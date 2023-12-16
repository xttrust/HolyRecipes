const searchForms = document.querySelectorAll('.search-function');
let searchQuery = "";
// let mealType = "";
let dishType = "";
let results;
let baseURL;

let resultsHTML = document.querySelector('#results');
let recipeButtons = document.querySelectorAll('.recipe-button')
let ingredientButtons = document.querySelectorAll('.ingredient-button')
let recipeCollapses = document.querySelectorAll('.recipe-collapse')
let ingredientCollapses = document.querySelectorAll('.ingredient-collapse')


function fetchAPI() {
    // Define a callback function name (replace CALLBACK_FUNCTION_NAME)
    const callbackFunctionName = 'handleEdamamResponse';

    // Create a script element
    const script = document.createElement('script');

    // Define the API URL with the callback parameter
    let apiURL = `https://api.edamam.com/search?q=christmas+${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20&tag=christmas&callback=${callbackFunctionName}`;

    if (dishType != "") {
        apiURL += `&dishType=${dishType}`
    }
    // Set the script source to the API URL
    script.src = apiURL;

    console.log(apiURL)

    // Append the script element to the document head
    document.head.appendChild(script);
}


function handleEdamamResponse(data) {
    // Process the data here
    results = data.hits;
    console.log(results);

    for (let i = 0; i < results.length; i++) {
        showResults(results[i]);
    }
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

        resultsHTML.innerHTML += `<div class="card">
        <img src="${results.recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${results.recipe.label}</h5>
            <p class="card-text">${results.recipe.summary}</p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Recipe
            </button>
            <div class="collapse" id="collapseExample">
            <div class="card card-body">
            <h5 class="card-title">Ingredients</h5>
                <ol>
                    ${ingredientLines}
                </ol>
            <h5 class="card-title">Instructions</h5>
                <ol>
                    ${instructionLines}
                </ol>
            </div>
            `
    }    
}


searchForms.forEach(searchForm => {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        resultsHTML.innerHTML = '';
        searchQuery = e.target.querySelector('input').value;
        // mealType = e.target.querySelector('#mealType').value;
        dishType = e.target.querySelector('#dishType').value;
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

// Feature recipes modal

// Function to show the modal for Recipe 1
function showRecipeModal1() {
    $('#recipeModal1').modal('show');
}

// Function to show the modal for Recipe 2
function showRecipeModal2() {
    $('#recipeModal2').modal('show');
}

// Function to close Recipe Modal 1
function closeRecipeModal1() {
    $('#recipeModal1').modal('hide');
}

// Function to close Recipe Modal 2
function closeRecipeModal2() {
    $('#recipeModal2').modal('hide');
}

// Event listener for close buttons
$(document).ready(function () {
    $('.btn2').click(function () {
        closeRecipeModal1();
    });

    $('.btn1').click(function () {
        closeRecipeModal2();
    });
});
