const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  get_movie_id(searchBox.value.trim());
  searchBox.value = "";
});
const apiKey = "8724becde7c0df7ebd021d05d6b3802f";
function get_movie_id(movieTitle) {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length > 0) {
        const movieId = data.results[0].id;
        console.log("Movie ID:", movieId);
        get_movie_rating(movieId);
      } else {
        console.log("Movie not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function get_movie_rating(MOVIE_ID) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".movie_name").innerHTML = data.title;
      document.querySelector(".movie_rating").innerHTML =
        data.vote_average.toFixed(1);
      document.querySelector(".movie_budget").innerHTML =
        (data.budget / 1000000).toFixed(2) + " million";
      document.querySelector(".movie_collections").innerHTML =
        (data.revenue / 1000000).toFixed() + " million";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
