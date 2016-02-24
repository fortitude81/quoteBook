var app = angular.module('quoteBook');
			//data service object
app.service('dataService', function(){  // add property of 'service' from quoteBook module on mainctrl.js
	var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

  var userData = {};  //create an object

  this.getData = function() {	//adding method
  	return quotes;				// returns array
  };	

  this.addData = function(text, author) {
  	if (text && author) {		//verifies that data object (userData{};) has proper keys (text and author)
  		userData.text = text;
  		userData.author = author;
  		quotes.push(userData);  //push to end of quotes array
  	}
  	
  };

  this.removeData = function(text) {
  	for (var i = 0; i < quotes.length; i++) {  //loop through quotes array
      if (text === quotes[i].text) {
        quotes.splice(i, 1);          //then remove the proper quote from the array
      }
    }
  };
  

});