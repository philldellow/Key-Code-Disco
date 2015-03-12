function SpaceBarController(){
  var view = new SpaceBarView();
  var model = new SpaceBarModel();
  this.Display = function(){
    $raindrop = model.raindropSound();
    view.initialize($raindrop);
  };
};
