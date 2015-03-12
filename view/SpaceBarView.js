function SpaceBarView(){
  this.initialize = function($raindrop){
    $('body').append($raindrop);
    $raindrop.attr;
    document.getElementById('raindrop').play();
    setTimeout(function(){$('audio#raindrop').remove();},1200);
  };
};
