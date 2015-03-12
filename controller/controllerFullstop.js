function FullstopCont() {

  var view = new FullstopView();

  this.delayFlash = function(){
    view.redBackground();
    setTimeout(function(){
      view.whiteBackground();
      },150);

  };

}
