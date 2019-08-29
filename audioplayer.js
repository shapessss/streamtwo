function aud_play_pause() {
  var myAudio = document.getElementById("https://c2.radioboss.fm:18071/stream");
  if (myAudio.paused) {
    $('#stateicon').removeClass('fa fa-play');
    $('#stateicon').addClass('fa fa-pause');
    myAudio.play();
  } else {
    $('#stateicon').removeClass('fa fa-pause');
    $('#stateicon').addClass('fa fa-play');
    myAudio.pause();
 }