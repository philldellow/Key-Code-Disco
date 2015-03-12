function insertAudioTagfKey() { 
    $( "body" ).append( $( '<audio id = "fKey"></audio>' ));
};

function insertMP3fKey() {
	$('audio#fKey').attr('src',"./MP3s/fKey.mp3");
};

function playloopfKey() {
	$('audio#fKey').attr('autoplay',"autoplay");
	$('audio#fKey').attr('loop',"loop");
};

function fKeystopLoop() {
	$('audio#fKey').remove();
};
