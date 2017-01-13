const videoPlayer = document.getElementsByTagName('video')[0];
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const play = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const volume = document.getElementsByName('volume')[0];
const playbackRate = document.getElementsByName('playbackRate')[0];
var playProgressRate = null;
var unPlayed = true;
var progressStatus = 0;

videoPlayer.addEventListener('timeupdate', updateStatusBar);
progress.addEventListener('click', scrub);

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
    unPlayed = false;
  } else {
    videoPlayer.pause();
    videoPlayer.paused = true;
    play.textContent = '►';
  }
}

function updateStatusBar() {
  const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

function scrub(event) {
  var scrubTime = (event.offsetX / progress.offsetWidth) * videoPlayer.duration;
  videoPlayer.currentTime = scrubTime;
}

skipButtons.forEach(button => button.addEventListener('click', skip));
var skip = () => {
  let skiptime = parseFloat(this.dataset.skip);
  videoPlayer.currentTime += skiptime;
  progressStatus += (playProgressRate * skiptime);
  progressFilled.style.flexBasis = `${progressStatus}%`;
}
