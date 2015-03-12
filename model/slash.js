function insertAudioslash() {
$( "body" ).append( $( '<audio id ="slash"></audio>' ));
};

function insertMP3slash() {
	$("audio#slash").attr('src',"./MP3s/slash.mp3");
};

function playslash() {
	$('audio#slash').attr('autoplay',"autoplay");
};

function cleanUpTagsslash() {
	setTimeout(function(){
       $('audio#slash').remove();
    },2500);
};