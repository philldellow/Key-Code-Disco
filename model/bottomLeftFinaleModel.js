function bottomLeftFinaleModel() {

  this.generateBox = function(size) {
    var div = document.createElement('DIV');
    div.id="bottomleft";
    div.style.height = size + 'px';
    div.style.width = size*2.5 + 'px';
    return div;
  };

}
