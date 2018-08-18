(function(){    
	var group = document.getElementsByClassName('group')[0];

	window.addCard = function () {
		var defaultCard = document.createElement('div');
		defaultCard.className = 'card';
		var lastChild = group.children[group.children.length - 1];
		group.insertBefore(defaultCard, lastChild);

		
		defaultCard.innerHTML = 
		'<div class="progress-bar">'+
			'<progress value="60" max="100"></progress>' +
			'<i id="clear" class="material-icons">clear</i>' +
		'</div>' +
		'<div class="title">' +
			'<p>Title 1</p>' + 
		'</div>' +
		'<div class="button">' +
			'<button class="more">' +
				'<i class="material-icons">more_horiz</i>' +
			'</button>' +
			'<div class="circle"></div>' +
			new Date().toDateString() +
			'<img class="img" src="images/img.jpg" >' +
		'</div>';

		function removeElement(card) {
			// Removes an element from the document
			var element = document.getElementById(elementId);
			element.parentNode.removeChild(element);
		}
	};
})();