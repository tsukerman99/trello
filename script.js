var applicationFunctions = {}; 
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
				'<i class="material-icons" onclick="applicationFunctions.openModal()">more_horiz</i>' +
			'</button>' +
			'<div class="circle"></div>' +
			new Date().toDateString() +
			'<img class="img" src="images/img.png" >' +
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
	function getFile() {

		var xhr = new XMLHttpRequest();
			
		xhr.open('GET', 'data.json', true);
		xhr.send();

			
		xhr.onreadystatechange = function() { // (3)
			if (xhr.readyState != 4){
				return;
			}
			if (xhr.status ===0) {
				console.log (xhr.response);
			} else {
				console.error (xhr);
			}
		};
	}

	function init(){
		getFile(function(error, response){
			if (error) {
				return;
			}
			console.log(JSON.parse(response));
		});
	};
	applicationFunctions.openModal = function() {
		var options= {
			template: '<div class="changes">' + 
			'<input type="text" placeholder="изменить название">' + 
			'<i id="clear" class="material-icons">clear</i>' + 
			'<div class="description">' + 
				'<h1>Описание</h1>' + 
				'<textarea name="comment" cols="40" rows="3"></textarea>' + 
				'<input type="submit" value="Отправить">' + 
				'<input type="reset" value="Очистить">' + 
			'</div>' + 
			'</div>'
		};
		var modal = new ModalService(options);
		console.log(modal);
		modal.open();
	};

	init();
	
})();