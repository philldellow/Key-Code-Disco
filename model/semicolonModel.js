function insertAudioTagohyeah() { 
    $( "body" ).append( $( '<audio id ="ohyeah"></audio>' ));
};

function insertMP3ohyeah() {
	$('audio#ohyeah').attr('src',"./MP3s/semicolon-oh-yeah-1.wav");
};

function playohyeah() {
	$('audio#ohyeah').attr('autoplay',"autoplay");
};

