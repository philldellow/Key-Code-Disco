
function insertApplause(){
  $("body").append($('<audio id = "partyTime"></audio>'));
};

function insertMP3Applause(){
  $("audio#partyTime").attr('src',"./MP3s/Applause.wav");
};

function playApplause(){
  $('audio#partyTime').attr('autoplay','autoplay');
};

function cleanUpTagsApplause(){
  setTimeout(function(){
    $('audio#partyTime').remove();
  },7500);
};
