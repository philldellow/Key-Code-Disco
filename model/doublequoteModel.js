function insertAudiodoublequote() {
$( "body" ).append( $( '<audio id ="doublequote"></audio>' ));
};

function insertMP3doublequote() {
	$("audio#doublequote").attr('src',"./MP3s/doublequote.wav");
};

function playdoublequote() {
	$('audio#doublequote').attr('autoplay',"autoplay");
};

function cleanUpTagsdoublequote() {
	setTimeout(function(){
       $('audio#doublequote').remove();
    },7500);
};