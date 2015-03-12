var insertAudioTag = function(){
	$('body').append$("<audio></audio>");
};

var insertMP3 = function(){
	$('audio').append$("/MP3s/CurleyBracketsLoop.wav");
};

var play = $('audio').attr('autoplay','true');

var repeat  = true;

$(document).ready(insertAudioTag.insertMP3.play.repeat);
