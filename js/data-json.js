// create XMLHttpRequest object
var xhr = new XMLHttpRequest();

// when  response has loaded 
xhr.onload = function() {
	//if (xhr.status === 200) {
		responseObject = JSON.parse(xhr.responseText);

		// build up a string with a new content (can also use DOM manipulation)
		var newContent = '';
		for (var i = 0; i < responseObject.recipes.length; i++) {
			//create opening div tag
			newContent += '<div class="recipe">';
			//create img with alt location
			newContent += '<a href="recipe.html"><img src="' + responseObject.recipes[i].photo + '"';
			newContent += 'alt"=' + responseObject.recipes[i].name + '"/></a>';
			//write out location <a href="default.asp">
			//newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
			//write out date
			//newContent += responseObject.events[i].date + '</p>';
			//close the div tag
			newContent += '</div>';
		}

		//udate the page with our new content
		document.getElementById('content').innerHTML = newContent;

	//}
};

//prepare the request
xhr.open('GET', 'data/data.json', true);

xhr.send(null);

