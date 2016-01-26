
$(document).ready(function(){
// ***********************************************
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"
var quote = function(data) {
  $('.quote').append('<p id="text">' + data.quoteText+ '</p>');
  if (data.quoteAuthor === "") {
    data.quoteAuthor = "Unknown";
  }
  $('.quote').append('<p id="author">' + data.quoteAuthor + '</p>');

  $("#t").attr("href", "http://twitter.com/home?status="+data.quoteText+" "+data.quoteAuthor);
  $("#f").attr("href", "http://www.facebook.com/sharer/sharer.php?u="+data.quoteLink);
}
// ***************************************************
$("#new").click(	
	function(){
			$("p").replaceWith($.getJSON(url, quote));

	})
// ***************************************************
})

