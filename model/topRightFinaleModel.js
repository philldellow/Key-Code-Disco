function topRightFinaleModel() {

  this.generateBox = function(size) {
    var div = document.createElement('DIV');
    div.id="topright";
    div.style.height = size + 'px';
    div.style.width = size*2.5 + 'px';
    return div;
  };

}
