import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime);

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log(seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
