var videoPlayer = document.getElementsByTagName('video')[0];
var play = document.querySelector('.player__button');
var isPlaying = false;

play.onclick = () => {
  if (isPlaying) {
    videoPlayer.pause();
    isPlaying = false;
    play.textContent = '►';
  } else {
    videoPlayer.play();
    isPlaying = true;
    play.textContent = '♊';
  }
}
