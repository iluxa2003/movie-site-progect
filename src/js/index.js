fetch("https://api.themoviedb.org/3/trending/all/day?api_key=f1c9e198351fb99a7484d861b34f1dff")
.then(response => {
    console.log(response.json());  
})
// .then(posts=>console.log(posts))