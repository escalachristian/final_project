function bindImageClick(id){
	var image = document.getElementById(id);
	image.addEventListener('click', function(){submitForm(id)}, false);
}

function submitForm(id){
	document.getElementById("url").value = document.getElementById(id).getAttribute('src');
	document.getElementById("recipe-page").submit();
}

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
			newContent += '<div class="recipe" data="'+ responseObject.recipes[i].ingredient +'">';
			//create img with alt location
			newContent += '<img id="image-' + i + '" src="' + responseObject.recipes[i].photo + '"';
			newContent += 'alt"=' + responseObject.recipes[i].name + '"/>';
			//write out location <a href="default.asp">
			//newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
			//write out date
			//newContent += responseObject.events[i].date + '</p>';
			//close the div tag
			newContent += '</div>';
		}

		//udate the page with our new content
		document.getElementById('content').innerHTML = newContent;
		
		for (var i=0; i<responseObject.recipes.length; i++) {
			bindImageClick("image-" + i);
		}

	//}
};

//prepare the request
xhr.open('GET', 'data/data.json', true);

xhr.send(null);

var searchButton = document.getElementById("ingredient");
searchButton.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    var tiles = document.getElementsByClassName("recipe");
    if (key === 13) { // 13 is enter
      var searchText = searchButton.value;
      for (var i=0; i< tiles.length; i++) {
      	if(tiles[i].getAttribute('data').toLowerCase()!= searchText.toLowerCase()) {
      		tiles[i].style.display = "none";
      	} else {
      		tiles[i].style.display = "inline-block";
      	}
      }
    } else if (key === 8 || key === 46) { // Backspace or Delete
    	for (var i=0; i< tiles.length; i++) {
        	tiles[i].style.display = "inline-block";	
      }
    }
}, false);


