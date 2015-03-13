function insertAudiodollar() {
$( "body" ).append( $( '<audio id ="dollar"></audio>' ));
};

function insertMP3dollar() {
	$("audio#dollar").attr('src',"./MP3s/dollarsign.wav");
};

function playdollar() {
	$('audio#dollar').attr('autoplay',"autoplay");
};

function cleanUpTagsdollar() {
	setTimeout(function(){
       $('audio#dollar').remove();
    },7500);
};