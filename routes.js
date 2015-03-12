$(bindKeys);

function bindKeys(){};
$(document).on('keypress', function(e){
  console.log(e.keyCode)
  
	if (e.keyCode === 46){

	    test = new FullstopCont();
	    test.delayFlash();
	}

	if (e.keyCode === 59){
		v = new semiColon();
		v.semi();
		g = new fnendLoop();
		g.endloopfnKey();
	}

	if (e.keyCode === 123){
		c = new curlyBracketStart();
		c.curlystartLoop();
	}

	if (e.keyCode === 125){
		d = new curlyBracketend();
		d.curlystoploop();
	}

	if(e.keyCode === 13){
		e = new enter();
		e.ent();
	}

	if (e.keyCode === 40){
		f = new roundBracketStart();
		f.roundstartLoop();
	}

	if (e.keyCode === 41){
		f = new roundBracketEnd();
		f.endloopround();
	}
	if (e.keyCode === 91){
		f = new squareBracketStart();
		f.squarestartLoop();
	}

	if (e.keyCode === 93){
		f = new squareBracketEnd();
		f.endloopsquare();
	}

	if (e.keyCode === 102){
		g = new fnKey();
		g.fKeystartLoop();
	}


});
/*function getRandomLocation(){
  var height = $('#container').height();
  var width = $('#container').width();
  var left = Math.floor(Math.random() * (width - 1) + 1);
  var top = Math.floor(Math.random() * (height - 1) + 1);
  return {left: left, top: top}
}*/
