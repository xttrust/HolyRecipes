
// const searchForm = document.querySelector('form');
// let searchQuery = "";
// let mealType ="";
// let dishType="";
// let baseURL;

// const results = document.querySelector('#results');
// const btn = document.getElementById('btn');

// async function fetchAPI(){
//     baseURL = `https://api.edamam.com/search?q=christmas+${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`
    
//     if(mealType!=""){
//         baseURL+=`&mealType=${mealType}`
//     }

//     if(dishType!=""){
//         baseURL+=`&dishType=${dishType}`
//     }
    

//     const response = await fetch(baseURL);
//     const data = await response.json();
//     console.log(data.hits);
//     for (let i=0; i<19;i++){
//         showResults(data.hits[i]);
//     }   
//     console.log(baseURL);

// }

// function showResults(searchResults){
    
//     results.innerHTML += `<div>
//     <p>${searchResults.recipe.label}<p>
//     <a href="${searchResults.recipe.url}" target ="_blank">Link<p>
//     <img src="${searchResults.recipe.image}"
//     </div>`;
    
// }


// searchForm.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     results.innerHTML='';
//     searchQuery = e.target.querySelector('input').value;
//     mealType = e.target.querySelector('#mealType').value
//     dishType = e.target.querySelector('#dishType').value
//     console.log(dishType)
//     fetchAPI();
// })

$(document).ready(function() {
    
    $(window).scroll(function() {
        // style when scrolling 
        if ($(window).scrollTop() > 50) {
            $('#navbar').removeClass('bg-transparent').addClass('bg-scroll')
        // style when scrolled to top
        } else {
            $('#navbar').removeClass('bg-scroll').addClass('bg-transparent');
        }
    });
});

