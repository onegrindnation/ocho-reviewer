<script>

    import { parse } from "svelte/compiler";

</script>
<!-- svelte-ignore a11y-missing-attribute -->
<html>
    <head>
        <title>The Ocho - Reviewer</title>
    </head>
    <body>
        <div id="review-video"></div>
        <div id="dicussion">
        </div>
    </body>
    <script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady(pauseTime) {
        openReview();
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
          setTimeout(stopVideo, window.pauseTime);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

      window.pauseTime = 6000;

      function openReview() {
        let apiRequest = new XMLHttpRequest();
 
        // Making our connection 
        let url = 'http://localhost:8080/api/reviews/review/ObpDW+aMRpqVjgAAhqU5tw==';
        apiRequest.open("GET", url, true);

        // function execute after request is successful
        apiRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let review = JSON.parse(this.response);
                console.log(review);
                window.pauseTime = 2000;

                player = new YT.Player('review-video', {
                height: '390',
                width: '640',
                videoId: 'M7lc1UVf-VE',
                playerVars: {
                    'playsinline': 1
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
                });
            }
        }
        // Sending our request
        apiRequest.send();
    }
    </script>
</html>