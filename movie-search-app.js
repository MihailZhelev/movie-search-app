const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  document.getElementById("movielist").style.display = "block";
  document.getElementById("hide").style.display = "block";

  const search = document.querySelector("#search-box").value;
  const url = "http://www.omdbapi.com/?s=" + search + "&apikey=thewdb"

  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (movies) {
      let list = document.querySelector('#hide').innerHTML = movies.Search.map(v => `<li><strong>Title: </strong>${v.Title}
    <br> <strong>Year: </strong> ${v.Year} <br></li> 
    <button class="movies-button" onClick="addWatchList('${v.Title}')">Add to watchlist</button>`).join('')

      document.querySelectorAll(".movies-button").forEach(function (element) {
        element.style.fontSize = "medium";
        element.style.borderRadius = "5px";
        element.style.height = "30px";
      });
    });
});

function addWatchList(title) {

  document.getElementById("arrOfMovies").innerHTML = '<li>' + title + " "
    + '<br>' + '<button class="removeMovie">Remove movie</button> ' + document.getElementById("arrOfMovies").innerHTML + '</li>';

  document.getElementById("arrOfMovies").style.display = "block";
  document.getElementById("watchlist").style.display = "block";

  document.querySelector("#arrOfMovies").addEventListener('click', function (ev) {
    if (ev.target.classList.contains("removeMovie")) {
      ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
    }

  });
  document.querySelectorAll(".removeMovie").forEach(function (element) {
    element.style.fontSize = "medium";
    element.style.borderRadius = "5px";
    element.style.height = "30px";
  });
}

const storage = window.localStorage.getItem("username");
const localstorage = document.getElementById("localstorage").innerHTML = "user: " + storage;

const logout = document.getElementById("logout-btn");
logout.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/movie-search-app/login.html?";
});


