'use strict';

(function() {
  var shows = getElements();
  for (var i = 0, length = shows.length; i < length; i++) {
    fetchData(shows[i], shows[i].innerText);
  }

  function getElements() {
    return document.getElementsByClassName('caption');
  }

  function fetchData(element, title) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://www.omdbapi.com/?t=${title}`, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        renderElement(element, JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }

  function renderElement(element, response) {
    element.innerText += ` (IMDB: ${response.imdbRating} / 10)`;
  }
})();
