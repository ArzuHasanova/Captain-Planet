    $(document).ready(function () {
      var $captainPlanet = $(".captain-planet");
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "Assets/captainplanet24.mp3");

      $("#musicControls")
        .on("click", ".theme-button", function () {
          audioElement.play();
        })
        .on("click", ".pause-button", function () {
          audioElement.pause();
        });

      $("#sizeControls")
        .on("click", ".normal-button", function () {
          $captainPlanet.animate({ height: "300px" });
        })
        .on("click", ".grow-button", function () {
          $captainPlanet.animate({ height: "500px" });
        })
        .on("click", ".shrink-button", function () {
          $captainPlanet.animate({ height: "100px" });
        });

      $("#visibilityControls")
        .on("click", ".vis-button", function () {
          $captainPlanet.animate({ opacity: "1" });
        })
        .on("click", ".invis-button", function () {
          $captainPlanet.animate({ opacity: "0.05" });
        });
      $(".vis-button").on("click", function () {
        $captainPlanet.animate({ opacity: "1" });
      });

      $(".invis-button").on("click", function () {
        $captainPlanet.animate({ opacity: "0.05" });
      });

      $("#moveControls")
        .on("click", ".up-button", function () {
          $captainPlanet.animate({ top: "-=200px" }, "normal");
        })
        .on("click", ".down-button", function () {
          $captainPlanet.animate({ top: "+=200px" }, "normal");
        })
        .on("click", ".left-button", function () {
          $captainPlanet.animate({ left: "-=200px" }, "normal");
        })
        .on("click", ".right-button", function () {
          $captainPlanet.animate({ left: "+=200px" }, "normal");
        })
        .on("click", ".back-button", function () {
          $captainPlanet.animate({ top: "50px", left: "80px" }, "fast");
        });

      $(document).keyup(function (e) {
        switch (e.which) {

          case 39:
            $captainPlanet.css({
              border: posFromTop > 515 ? "2px solid #ff4141" : "none",
            });
            $captainPlanet.animate({ left: "+=200px" }, "normal");
            break;

          case 40:
            $captainPlanet.animate({ top: "+=200px" }, "normal");
            break;
            
          case 37:
            $captainPlanet.animate({ left: "-=200px" }, "normal");
            break;

          case 38:
            $captainPlanet.animate({ top: "-=200px" }, "normal");
            break;

          default:
            break;
        }
      });
    });