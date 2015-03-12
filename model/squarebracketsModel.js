function insertAudioTagsquare() { 
    $( "body" ).append( $( '<audio id = "square"></audio>' ));
};

function insertMP3square() {
	$('audio#square').attr('src',"./MP3s/squareBrackets.wav");
};

function playloopsquare() {
	$('audio#square').attr('autoplay',"autoplay");
	$('audio#square').attr('loop',"loop");
};

function squarestopLoop() {
	$('audio#square').remove();
};
