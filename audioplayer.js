const audio = new Audio("https://c2.radioboss.fm:18071/stream");

$('#play-pause-button').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio.pause()
   }
})

audio.onended = function() {
     $("#play-pause-button").removeClass('fa-pause')
     $("#play-pause-button").addClass('fa-play')
}