function FullstopCont() {

  var view = new FullstopView();

  this.delayFlash = function(){
    view.redBackground();
    setTimeout(function(){
      setTimeout(function(){
        view.whiteBackground();
        },600);
      view.blueBackground();
      },600);

  };

    this.startWolo = function(){
      insertAudioTagWolo();
      insertWoloImageTag();
      insertWoloImage();
      insertMP3Wolo();
      playWolo();
      endWolo();
    };


}


