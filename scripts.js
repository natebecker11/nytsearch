var apiKey = 'bd3af344ec534cf297eb0fd6922d272e';
var queryURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bd3af344ec534cf297eb0fd6922d272e'



var getArticles = function(term, number, startYear, endYear) {
  $.get({
    url: queryURL + '&q=' + term
  })
    .then(function(response) {
      console.log(response);
      var articleArray = response.response.docs;
      for (i = 0; i < number; i++) {
        var thisArticle = articleArray[i];
        var headline = thisArticle.headline.main;
        var articleLink = thisArticle.web_url;
        console.log(headline + articleLink);
        var li = $('<li>');
        li.addClass('list-group-item')        
        var a = $('<a>');
        $(a).text(headline).attr('href', articleLink).appendTo($(li));
        $(li).appendTo('#articleBody');
      }
    })
}


$(document).on('click', '#searchBtn', function() {
  var number = $('#numberRecordsRet').val();
  var term = $('#searchTermIn').val().trim();
  if (!term) return;
  else {
    $('#articleBody').empty();
    getArticles(term, number);
  }
})