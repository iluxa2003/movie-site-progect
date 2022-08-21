import { fetchTrends } from './trendingFetch';

const trends = document.querySelector('[recent-movies]');
const movies = fetchTrends();
// console.log(movies.then(response=>response));
function movieCaptions(obj) {
  for (const movie of obj) {
    const newMovie = `
    <div class="photo">

<img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path }" alt="nothing" loading="lazy"/>

<div class="info">
<p class="info-item">
<b>For adults:<br>${movie.adults}</b>
</p>
<p class="info-item">
<b>Title:<br>${movie.title || movie.name}</b>
</p>
<p class="info-item">
<b>Original language:<br>${movie.original_language}</b>
</p>
<p class="info-item">
<b>popularity: <br>${movie.popularity}</b>
</p>
</div>
</div>
              `;
    trends.insertAdjacentHTML('beforeend', newMovie);
  }
}
async function trendingMovies() {
  movies.then(response => 
    // console.log(response)
    movieCaptions(response.results)
  );
}
trendingMovies();
// fetchTrends().then(response =>console.log(response))
// for (const movie of movies) {
//   const newMovie = `

//               `;
//   trends.insertAdjacentHTML('beforeend', newMovie);
// }
