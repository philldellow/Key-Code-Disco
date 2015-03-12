function insertAudioHighhat() {
$( "body" ).append( $( '<audio id ="highhat"></audio>' ));
};

function insertMP3Highhat() {
	$("audio#highhat").attr('src',"./MP3s/highhat.mp3");
};

function playHighhat() {
	$('audio#highhat').attr('autoplay',"autoplay");
};

function cleanUpTags() {
	setTimeout(function(){
       $('audio#highhat').remove();
    },1500);
};