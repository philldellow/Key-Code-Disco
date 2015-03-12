function insertAudioTaground() { 
    $( "body" ).append( $( '<audio id = "round"></audio>' ));
};

function insertMP3round() {
	$('audio#round').attr('src',"./MP3s/looperman-l-1441718-0080653-dandyrecord-strings-reggaeton.wav");
};

function playloopround() {
	$('audio#round').attr('autoplay',"autoplay");
	$('audio#round').attr('loop',"loop");
};

function roundstopLoop() {
	$('audio#round').remove();
};
