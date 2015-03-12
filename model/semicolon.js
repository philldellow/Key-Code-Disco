var insertAudioTag = function(){
	$('body').append$("<audio></audio>");
};

var insertMP3 = function(){
	$('audio').attr$('src',"/MP3s/semicolon-oh-yeah-1.wav");
};

var play = $('audio').attr('autoplay',"autoplay");

var repeat  = false;

var semiColon = $(document).ready(function(){
	insertAudioTag.insertMP3.play.repeat});