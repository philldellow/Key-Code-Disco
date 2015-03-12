function insertAudioTagcurly() { 
    $( "body" ).append( $( '<audio id = "curly"></audio>' ));
};

function insertMP3curly() {
	$('audio#curly').attr('src',"./MP3s/looperman-l-0448131-0065520-megapaul-dongeled-90bpm-b.wav");
};

function playloopcurly() {
	$('audio#curly').attr('autoplay',"autoplay");
	$('audio#curly').attr('loop',"loop");
};

function endloopcurly() {
	$('audio#curly').remove();
};
