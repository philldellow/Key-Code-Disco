function insertAudioTagcurly() { 
    $( "body" ).append( $( '<audio id = "curly"></audio>' ));
};

function insertMP3curly() {
	$('audio#curly').attr('src',"./MP3s/CurleyBracketsLoop.wav");
};

function playloopcurly() {
	$('audio#curly').attr('autoplay',"autoplay");
	$('audio#curly').attr('loop',"loop");
};

function endloopcurly() {
	$('audio#curly').remove();
};
