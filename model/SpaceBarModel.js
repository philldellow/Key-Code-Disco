function SpaceBarModel(){
  var $raindrop;
  this.raindropSound = function(){
  return $("<audio></audio>").attr({
      'id':'raindrop',
      'src':'../MP3s/rain-01.mp3'
    })
  };
};
