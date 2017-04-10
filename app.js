var youtubeURL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key: 'AIzaSyB2w0GGF1nl7F3kXmGgmg0rCELfjQ2J4QA',
    q: searchTerm,
    type: 'video',
    maxResults: 15
  };

  $.getJSON(youtubeURL, query, callback);
}

function displayYoutubeSearchData(data) {
  var resultElement = '';
  if (data) {
    for (var i = 0, max = data.items.length; i < max; i++){
      resultElement += '<p><img src="' + data.items[i].snippet.thumbnails.medium.url + '"></p>';
    }
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYoutubeSearchData);
  });
}

$(function(){watchSubmit();});