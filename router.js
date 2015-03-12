$(bindKeys);

function bindKeys(){};
$(document).on('keypress', function(e){
  console.log(e.keyCode)

  if (e.keyCode === 46){
	    test = new FullstopCont();
	    test.delayFlash();
      test.startWolo();
	}

  if (e.keyCode === 59){
		v = new semiColon();
		v.semi();
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
  if(e.keyCode === 32){
    var spaceBarController = new SpaceBarController();
    spaceBarController.Display();
  }


});
