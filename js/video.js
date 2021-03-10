// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }


   // 4. The API will call this function when the video player is ready.
   function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }

  function stopVideo() {
    player.stopVideo();
  }

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

  

