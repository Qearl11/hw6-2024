var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
document.addEventListener("DOMContentLoaded", function () {
  var video = document.querySelector(".video"); // Assuming your video has the class "video"

  // Event listener for the play button
  document.querySelector("#play").addEventListener("click", function () {
    console.log("Play Video");
    video.play();
  });

  // Event listener for the pause button
  document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
  });

  // Event listener for the slower button
  document.querySelector("#slower").addEventListener("click", function () {
    console.log("Slow Down Video");
    video.playbackRate *= 0.95; // Slow down by 5%
    console.log("New speed is " + video.playbackRate);
  });

  // Event listener for the faster button
  document.querySelector("#faster").addEventListener("click", function () {
    console.log("Speed Up Video");
    video.playbackRate *= 1.05; // Speed up by 5%
    console.log("New speed is " + video.playbackRate);
  });

  // Event listener for the skip button
  document.querySelector("#skip").addEventListener("click", function () {
    console.log("Skip Ahead");
    if (video.currentTime < video.duration - 15) {
      video.currentTime += 15;
    } else {
      video.currentTime = 0;
      console.log("Going back to the beginning");
    }
    console.log("New location " + video.currentTime);
  });

  // Event listener for the mute button
  document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted) {
      console.log("Unmute Video");
      video.muted = false;
      this.textContent = "Mute";
    } else {
      console.log("Mute Video");
      video.muted = true;
      this.textContent = "Unmute";
    }
  });

  // Event listener for the volume slider
  document.querySelector("#slider").addEventListener("change", function () {
    console.log("Change Volume");
    video.volume = this.value / 100;
    console.log("Volume is " + video.volume);
  });

  // Event listener for the vintage button
  document.querySelector("#vintage").addEventListener("click", function () {
    console.log("Vintage Video");
    video.classList.add("oldSchool");
  });

  // Event listener for the orig button
  document.querySelector("#orig").addEventListener("click", function () {
    console.log("Original Video");
    video.classList.remove("oldSchool");
  });
});
