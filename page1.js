
        var video = document.getElementById("myVideo");
        var btn = document.getElementById("myBtn");
        
        function myFunction() {
          if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
          } else {
            video.pause();
            btn.innerHTML = "Play";
          }
        }


        // document.addEventListener('DOMContentLoaded', init);

        // function init() {
        //     [...document.querySelectorAll('.waitload')]
        //     .map(e => e.classList.remove('waitload'));
        // }
