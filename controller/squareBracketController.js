function fKeyBracketStart() {

	this.fKeystartLoop = function(){
		insertAudioTagfKey();
		insertMP3fKey();
		playloopfKey();
	};
};

function fKeyBracketEnd() {
	
	this.endloopfKey = function(){
		fKeystopLoop();
	};

};