

const addMovieBtn = document.querySelector("#add-movie-btn");
// console.log(addMovieBtn);

const searchBtn = document.querySelector('#search-btn');
// console.log(searchBtn);

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.querySelector("#movie-list");

    if(movieList.length === 0){
        movieList.classList.remove('visible');
    }else{
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    const filteredMovies = !filter ? movies : movies.filter( movie => movie.info.title.includes(filter));
    filteredMovies.forEach( (movie) => {
        const movieEle = document.createElement('li');
        // movieEle.textContent = movie.info.title;
        let text = movie.info.title + " - ";
        for(const key in movie.info){
            if(key !== 'title'){
                text = text + ` ${key} : ${movie.info[key]}`
            }
        }
        movieEle.textContent = text;
        movieList.append(movieEle);
    });

}

const addMovieHandler = () => {
    const title = document.querySelector("#title").value;
    const extraInfo = document.querySelector('#extra-name').value;
    const extraValue = document.querySelector('#extra-value').value;
    // console.log(title , extraInfo , extraValue);

    if(title.trim() === '' || extraInfo.trim() === '' || extraValue.trim() === ''){
        return;
    }

    const newMovie = {
        info:{
            title:title,
            [extraInfo] : extraValue
        },
        id : Math.random()
    }

    movies.push(newMovie);
    // console.log(movies);
    renderMovies();
}

const searchMovieHandler = () => {
    const filterMovie = document.querySelector('#filter-title').value;
    renderMovies(filterMovie);

}

// addMovieHandler();
const addMovie = addMovieBtn.addEventListener('click', addMovieHandler );
const searchMovie = searchBtn.addEventListener('click',searchMovieHandler);