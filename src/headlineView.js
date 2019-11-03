(function(exports) {

  function HeadlineView(headline) {
    this.headline = headline
  }

  HeadlineView.prototype.returnSummary = function() {
    return "<h2>" + this.headline.title + "</h2>" + '<img src="' +
            this.headline.thumbnail + '"><p>' +
            this.headline.summary + '</p><a href="' +
            this.headline.url + '">Read more...</a><p><a href="#">Home Page</a></p>'
  }

  exports.HeadlineView = HeadlineView
})(this)
