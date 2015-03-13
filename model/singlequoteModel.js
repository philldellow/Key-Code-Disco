function insertAudiosinglequote() {
$( "body" ).append( $( '<audio id ="singlequote"></audio>' ));
};

function insertMP3singlequote() {
	$("audio#singlequote").attr('src',"./MP3s/singlequote.wav");
};

function playsinglequote() {
	$('audio#singlequote').attr('autoplay',"autoplay");
};

function cleanUpTagssinglequote() {
	setTimeout(function(){
       $('audio#singlequote').remove();
    },7500);
};