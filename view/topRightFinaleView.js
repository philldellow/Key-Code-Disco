function topRightFinaleView() {

  var seedBox = document.getElementById('topright');
  var largestBox = seedBox;

  this.clearScreen = function() {
    seedBox.innerHTML = '';
  };

  this.addBox = function(box) {
    largestBox.appendChild(box);
    largestBox = box;
  };

}
