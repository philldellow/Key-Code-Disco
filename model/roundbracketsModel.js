function insertAudioTaground() { 
    $( "body" ).append( $( '<audio id = "round"></audio>' ));
};

function insertMP3round() {
	$('audio#round').attr('src',"./MP3s/looperman-l-0658685-0054606-thesavage-tuts-fave-125a.wav");
};

function playloopround() {
	$('audio#round').attr('autoplay',"autoplay");
	$('audio#round').attr('loop',"loop");
};

function roundstopLoop() {
	$('audio#round').remove();
};
