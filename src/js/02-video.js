import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

player.on('timeupdate', onPlay);

const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
    //  localStorage.setItem('videoplayer-current-time', JSON.parse(seconds));
    JSON.parse(currentTime.seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          'the time was less than 0 or greater than the video’s duration'
        );
        break;

      default:
        console.log('some other error occurred');

        break;
    }
  });
