function finaleController() {

  var topLeftView = new topLeftFinaleView();
  var topRightView = new topRightFinaleView();
  var bottomLeftView = new bottomLeftFinaleView();
  var bottomRightView = new bottomRightFinaleView();

  var topLeftBox = new topLeftFinaleModel();
  var topRightBox = new topRightFinaleModel();
  var bottomLeftBox = new bottomLeftFinaleModel();
  var bottomRightBox = new bottomRightFinaleModel();

  var size = 10;

  this.partyTime = function() {
    var cycle = setInterval(function() {

      var newTopLeftBox = topLeftBox.generateBox(size);
      var newTopRightBox = topRightBox.generateBox(size);
      var newBottomLeftBox = bottomLeftBox.generateBox(size);
      var newBottomRightBox = bottomRightBox.generateBox(size);


      topLeftView.addBox(newTopLeftBox);
      topRightView.addBox(newTopRightBox);
      bottomLeftView.addBox(newBottomLeftBox);
      bottomRightView.addBox(newBottomRightBox);

      size += 5;
      stopIfDone(cycle);
    },50);
  };

  function stopIfDone(interval) {
    if (size > 500) {
      clearInterval(interval);
    }
  };

}
