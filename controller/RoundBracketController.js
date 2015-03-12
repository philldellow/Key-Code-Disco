function roundBracketStart() {

	this.roundstartLoop = function(){
		insertAudioTaground();
		insertMP3round();
		playloopround();
	};
};

function roundBracketEnd() {
	
	this.endloopround = function(){
		roundstopLoop();
	};

};
