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
		f = new fnendLoop();
		f.endloopfnKey();
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


	  if(e.keyCode == 45) {
	    finale = new finaleController
	    finale.partyTime();
	  }


	if (e.keyCode === 47){
	g = new slash();
	g.slash();
	}

	if (e.keyCode === 39){
		f= new singlequote();
		f.singlequote();
	}

	if (e.keyCode === 34){
		f= new doublequote();
		f.doublequote();
	}

	 if (e.keyCode === 102){
		f = new fnKey();
		f.fKeystartLoop();
	}




});
