function insertAudioTag() { 
    $( "body" ).append( $( "<audio></audio>" ));
};

function insertMP3() {
	$('audio').attr('src',"./MP3s/semicolon-oh-yeah-1.wav");
};

function play() {
	$('audio').attr('autoplay',"autoplay");
};

