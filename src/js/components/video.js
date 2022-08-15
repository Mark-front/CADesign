const playBtn = document.querySelector('.play-btn');
const video = document.querySelector('.company-video');
let played = false;
function playPause(video, played) {
  if (played) {
    video.pause();
    played = !played;
  } else {
    video.play();
    played = !played;
  }

  return played;
}
playBtn.addEventListener('click', () => {
  played = playPause(video, played);
  playBtn.classList.toggle('video__play--hidden');
});

video.addEventListener('click', () => {
  played = playPause(video, played);
  playBtn.classList.toggle('video__play--hidden');
});