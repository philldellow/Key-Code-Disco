$(bindKeys);

function bindKeys(){};
$(document).on('keypress', function(e){
  console.log(e.keyCode)
	if (e.keyCode === 46){

	    test = new FullstopCont();
	    test.delayFlash();
	}

else if (e.keyCode === 59){
		v = new semiColon();
		v.semi();
	}

  else if (e.keyCode === 123){
		c = new curlyBracketStart();
		c.curlystartLoop();
	}

  else if (e.keyCode === 125){
		d = new curlyBracketend();
		d.curlystoploop();
	}

  else if(e.keyCode === 13){
		e = new enter();
		e.ent();
	}

  else if (e.keyCode === 40){
		f = new roundBracketStart();
		f.roundstartLoop();
	}

  else if (e.keyCode === 41){
		f = new roundBracketEnd();
		f.endloopround();
	}
  else if (e.keyCode === 91){
		f = new squareBracketStart();
		f.squarestartLoop();
	}

  else if (e.keyCode === 93){
		f = new squareBracketEnd();
		f.endloopsquare();
	}
  else if(e.keyCode === 32){
    var spaceBarController = new SpaceBarController();
    spaceBarController.Display();
  }


});
