function insertAudioTagWolo() {
    $( "body" ).append( $( '<audio id = "wolo"></audio>' ));
};

function insertMP3Wolo() {
  $('audio#wolo').attr('src',"./MP3s/wololo.mp3");
};

function playWolo() {
  $('audio#wolo').attr('autoplay',"autoplay");
};

function insertWoloImageTag() {
  $('body').append( $('<img id = "wolo">') )
};

function insertWoloImage() {
  // var left = "" + Math.floor((Math.random() * 700) + 1); + ""
  // $('img#wolo').css('left',left)
  $('img#wolo').attr('src',"./images/wololo.gif")
  $('img#wolo').attr('style',"width:100px;height:100px")
};


function endWolo() {
    setTimeout(function(){
       $('img#wolo').remove();
       $('audio#wolo').remove();
    },1200);
};
