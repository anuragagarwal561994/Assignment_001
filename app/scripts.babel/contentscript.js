'use strict';

(function() {
  var shows = document.getElementsByClassName('caption');
  for (var i = 0, length = shows.length; i < length; i++) {
    console.log(shows[i].innerText);
  }
})();
