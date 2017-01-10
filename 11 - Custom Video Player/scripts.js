var videoPlayer = document.getElementsByTagName('video')[0];
var progress = document.querySelector('.progress');
var progressFilled = document.querySelector('.progress__filled');
var play = document.querySelector('.toggle');
var skip25 = document.querySelector('[data-skip="25"]');
var back10 = document.querySelector('[data-skip="-10"]');
var volume = document.getElementsByName('volume')[0];
var playbackRate = document.getElementsByName('playbackRate')[0];

videoPlayer.volume = 0.5
volume.onmousemove = () => {
  videoPlayer.volume = volume.value;
}

playbackRate.onmousemove = () => {
  videoPlayer.playbackRate = playbackRate.value;
}

play.onclick = () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    videoPlayer.paused = false;
    play.textContent = '❚❚';
  } else {
    videoPlayer.pause();
    videoPlayer.paused = true;
    play.textContent = '►';
  }
}

skip25.onclick = () => {
  videoPlayer.currentTime += 25;
}

back10.onclick = () => {
  videoPlayer.currentTime -= 10;
}
