function topLeftFinaleView() {

  var seedBox = document.getElementById('topleft');
  var largestBox = seedBox;

  this.clearScreen = function() {
    seedBox.innerHTML = '';
  };

  this.addBox = function(box) {
    largestBox.appendChild(box);
    largestBox = box;
  };

}
