function insertAudioTagohyeah() {
    $( "body" ).append( $( '<audio id ="ohyeah"></audio>' ));
};

function insertMP3ohyeah() {
	$('audio#ohyeah').attr('src',"./MP3s/semicolon-oh-yeah-1.wav");
};

function playohyeah() {
	$('audio#ohyeah').attr('autoplay',"autoplay");
};

function insertSemiImageTag() {
  $('body').append( $('<img id="semi">'))
}

function insertSemiImage() {
  $('img#semi').attr("src", "./images/ohyeah.jpg")
}

function semiImageAnimate(){
  $('img#semi').animate({
    opacity: 0.90,
    marginLeft: "+=2000px",
    height: "500px",
    width: "500px",
  },1300)
}


function cleanUpTagsohyeah() {
	setTimeout(function(){
       $('img#semi').remove();
       $('audio#ohyeah').remove();
    },1500);
};

