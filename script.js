(function(){    
	var group = document.getElementsByClassName('group')[0];

	window.addCard = function (classTitle) {
		group = document.getElementsByClassName(classTitle)[0];
		var defaultCard = document.createElement('div');
		defaultCard.className = 'card';
		console.log(group);
		var lastChild = group.children[group.children.length - 1];
		defaultCard.draggable = true;
		defaultCard.ondragstart = function(event) {
			console.log(event);
		};
		defaultCard.id = classTitle + '-' + group.children.length;
		defaultCard.innerHTML = 
		'<div class="progress-bar">'+
			'<progress value="60" max="100"></progress>' +
			'<i id="clear" class="material-icons" onclick="removeElement(\'' + defaultCard.id + '\',\''+classTitle+'\')">clear</i>' +
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
		group.insertBefore(defaultCard, lastChild);

		window.removeElement = function(cardID, groupClassName) {
			// Removes an element from the document
			group = document.getElementsByClassName(groupClassName)[0];
			var element = document.getElementById(cardID);
			console.log(group, element);
			group.removeChild(element);
		};
	};
})();