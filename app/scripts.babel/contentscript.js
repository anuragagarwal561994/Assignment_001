'use strict';

(function() {
  var shows = document.getElementsByClassName('caption');
  for (var i = 0, length = shows.length; i < length; i++) {
    fetchData(shows[i], shows[i].innerText);
  }

  function fetchData(element, title) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://www.omdbapi.com/?t=${title}`, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        var response = JSON.parse(xhr.responseText);
        element.innerText += ` (IMDB: ${response.imdbRating} / 10)`;
      }
    };
    xhr.send();
  }
})();
