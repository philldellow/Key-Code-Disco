function bottomRightFinaleView() {

  var seedBox = document.getElementById('bottomright');
  var largestBox = seedBox;

  this.clearScreen = function() {
    seedBox.innerHTML = '';
  };

  this.addBox = function(box) {
    largestBox.appendChild(box);
    largestBox = box;
  };

}
