import Notiflix from 'notiflix';
function movieSearch(name) {
  const search = fetch(``).then(
    response => {
      //   console.log(response);
      if (!response.ok) {
        return Notiflix.Notify.failure(
          'Oops, there is no movie with that name'
        );
      } else {
        return response.json();
      }
    }
  );

  return search;
}
export { movieSearch };
