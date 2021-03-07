// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

window.onload 
function randomIndex() {
  
  var select = document.getElementById('ipd');
  var items = select.getElementsByTagName('option');
  var index = Math.floor(Math.random() * items.length +1);
  alert(index);
  select.selectedIndex = index;
}

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
window.onYouTubeIframeAPIReady = function(){
  player = new YT.Player('player', {
    videoId: '2f8Q70JZM9w',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    }
  });

   // 4. The API will call this function when the video player is ready.
   function onPlayerReady(event) {
     alert('test');
    event.target.playVideo();
    event.target.mute();
  }

  function toggleSound() {
    if (player.isMuted()) {
      player.unMute()
    } else {
      player.mute()
  }
  }

$('#button').on('click', function(){    
          toggleSound();     
    
  }); 

  
  function changeCountry(value){

  
  
  document.getElementById("newyork").onclick = function() {
      
      //change src value
      document.getElementById('ytVideo').src = "https://www.youtube.com/embed/eZe4Q_58UTU?modestbranding=1&autoplay=1&autohide=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1&";
      //vidsrc = "https://www.youtube.com/embed/eZe4Q_58UTU?modestbranding=1&autoplay=1&autohide=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1&";
      //playthevideo

    }

    document.getElementById("seoul").onclick = function() {
      //change src value
      document.getElementById('ytVideo').src = "https://www.youtube.com/embed/in9Z8_elhaA?modestbranding=1&autoplay=1&autohide=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1";
      //playthevideo

    }

    document.getElementById("tokyo").onclick = function() {
      //change src value
      document.getElementById('ytVideo').src = "https://www.youtube.com/embed/n3Dru5y3ROc?modestbranding=1&autoplay=1&autohide=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1";
      //playthevideo

    }

    document.getElementById("canada").onclick = function() {
      //change src value
      document.getElementById('ytVideo').src = "https://www.youtube.com/embed/30oX9ZNj598?modestbranding=1&autoplay=1&autohide=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1";
      //playthevideo

    }

    document.getElementById("amsterdam").onclick = function() {
      //change src value
      document.getElementById('ytVideo').src = "https://www.youtube.com/embed/E07rTPgIvn0?modestbranding=1&autoplay=1&autohide=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1";
      //playthevideo

    }
    document.getElementById("dublin").onclick = function() {
      //change src value
      document.getElementById('ytVideo').src = "https://www.youtube.com/embed/z1S3pHGjhpg?modestbranding=1&autoplay=1&autohide=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1";
      //playthevideo

    }
    document.getElementById("london").onclick = function() {
      //change src value
      document.getElementById('ytVideo').src = "https://www.youtube.com/embed/__Eo-dvEH7g?modestbranding=1&autoplay=1&autohide=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1";
      //playthevideo

    }

  }
  function muteVideo() {
    player.mute();
  }

function unmute() {
    player.unmute();
  }


  $('#volButton').on('click', function change(){
    if( $(this).hasClass('mute') ){
      $(this).removeClass('mute');
      $(this).text('Mute');
      muteVideo();
    } else {
      $(this).addClass('mute');
      $(this).text('Unmute');
      ubnmuteVideo();
    }

  });

  function change(el)
  {

      if ( el.value === "Mute" ){
          el.value = "Unmute";}
          
  
      else {
          el.value = "Mute";
          player.unmute();}



  }

}
