;(function(){
    var cards = [
        '<div class="header" >petux</div>',
        '<div class="footer" onclick="addCard()" >add card...</div>'
    ];

    var defaultCard = document.createElement('<div class="card"></div>')
    var group = document.getElementsByClassName('group')[0];
   group.innerHTML = cards;
 

   window.addCard = function () {
        cards.splice(cards.length - 1, 0, defaultCard);
        group.innerHTML = cards;

   }
})();