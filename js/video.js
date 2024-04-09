var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  var video = document.querySelector("video");
  video.autoplay = false;
  video.loop = false;

  // Volume display
  function updateVolume() {
    var volumeDisplay = document.getElementById("volume");
    volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%";
  }

  // Play Button
  document.getElementById("play").addEventListener("click", function () {
    video.play();
    updateVolume();
  });

  // Pause Button
  document.getElementById("pause").addEventListener("click", function () {
    video.pause();
  });

  // Slow Down
  document.getElementById("slower").addEventListener("click", function () {
    video.playbackRate *= 0.9; // Slow down video by 10%
    console.log("New speed is", video.playbackRate);
  });

  // Speed Up
  document.getElementById("faster").addEventListener("click", function () {
    video.playbackRate /= 0.9; // Speed up by inverse amount to slow down
    console.log("New speed is", video.playbackRate);
  });

  // Skip Ahead
  document.getElementById("skip").addEventListener("click", function () {
    if (video.currentTime + 10 > video.duration) {
      video.currentTime = 0;
      console.log("Going back to beginning");
    } else {
      video.currentTime += 10;
    }
    console.log("Current location", video.currentTime);
  });

  // Mute
  document.getElementById("mute").addEventListener("click", function () {
    video.muted = !video.muted;
    document.getElementById("mute").textContent = video.muted
      ? "Unmute"
      : "Mute";
  });

  // Volume Slider
  document.getElementById("slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    updateVolume();
  });

  // Styled - applies oldSchool class
  document.getElementById("vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
  });

  // Original - removes oldSchool class
  document.getElementById("orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
  });
});
