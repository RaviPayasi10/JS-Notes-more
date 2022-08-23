
// Captures add nodal class div
const addMovieNodal = document.querySelector("#add-modal"); 
// const addMovieNodal = document.getElementById("add-modal");
// const addMovieNodal = document.body.children[1];
// All 3 above returns same node
// console.log(addMovieNodal);


// Capturs start adding movie button
const startAddMovieBtn = document.querySelector("header button");
// const startAddMovieBtn = document.querySelector("#btn-add");
// const startAddMovieBtn = document.querySelector("header").lastElementChild;
// console.log(startAddMovieBtn);

// Captures backdrop class, it is what makes background fade as we click on add movie
const backDrop = document.querySelector("#backdrop");
// const backDrop = document.getElementById("backdrop");
// const backDrop = document.body.firstElementChild;

const cancelAddMovieBtn = addMovieNodal.querySelector(".btn--passive");
// const cancelBtn = document.querySelector(".btn--passive");
// const cancelBtn = document.querySelector(".modal__actions").firstElementChild;
// console.log(cancelAddMovieBtn);

const confirmAddMovieBtn = addMovieNodal.querySelector(".btn--success");
// const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
// console.log(confirmAddMovieBtn);

const entryTextSection = document.querySelector("#entry-text");
// console.log(entryTextSection);

const movies = [];

const updateUI = () => {
    if(movies.length == 0){
        entryTextSection.style.display = "block";
    }else{
        entryTextSection.style.display = "none";
    }
}

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for(const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex,1);
    const rootList = document.getElementById("movie-list");
    rootList.children[movieIndex].remove();
}

const renderMovieObject = (id,title,imageUrl,rating) => {
    const newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt = "${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener("click", deleteMovieHandler.bind(null,id));
    const rootList = document.getElementById("movie-list");
    rootList.appendChild(newMovieElement);
}

const userInput = document.querySelectorAll("input");
// console.log(userInput);

// Function that toggles visible class in backdrop 
const toggleBackdrop = () => {
    backDrop.classList.toggle("visible");
}

// Function that adds/removes (toggles) visible class in addMovieModal
const toggleMovieModal = () => {
    addMovieNodal.classList.toggle("visible");
    toggleBackdrop();
}

// Toggles both visible class in both backdrop and movie modal
const backdropClickHandler = () => {
    toggleMovieModal();
}

const cancelAddMovie = () => {
    toggleMovieModal();
    clearUserInput();
}

const clearUserInput = () => {
    for(const usrInp of userInput){
        usrInp.value = "";
    }
}

const addMovieHandler = () => {
    const titleValue = userInput[0].value;
    const imgUrl = userInput[1].value;
    const rating = userInput[2].value;

    if(titleValue.trim() === "" || imgUrl.trim() === "" || rating.trim() === ""
    || +rating < 1 || +rating > 5){
        alert("Please enter valid values");
    }

    const newMovie = {
        id:Math.random().toString(),
        title:titleValue,
        img:imgUrl,
        rating:rating
    }

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearUserInput();
    renderMovieObject(newMovie.id,newMovie.title,newMovie.img,newMovie.rating);
    updateUI();
}

startAddMovieBtn.addEventListener("click", toggleMovieModal);
backDrop.addEventListener("click",backdropClickHandler);
cancelAddMovieBtn.addEventListener("click",cancelAddMovie);
confirmAddMovieBtn.addEventListener("click",addMovieHandler);
