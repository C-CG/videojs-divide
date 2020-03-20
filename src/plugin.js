import videojs from 'video.js';
import document from 'global/document';
import { version as VERSION } from '../package.json';

// Default options for the plugin.
const defaults = {
  divides: []
};

const registerPlugin = videojs.registerPlugin || videojs.plugin;

/* hh:mm:ss -> seconds */
const convertToInt = (hms) => {
  const split = hms.split(':');

  return (+split[0]) * 60 + (+split[1]);
};

/* Divide Component */
class Divide extends videojs.getComponent('ClickableComponent') {
  constructor(player, options) {
    super(player, options);
    // Options
    this.id = options.id;
    this.pose = options.pose;
  }
  handleClick() {
    videojs.log('Divide Clicked: ', this.pose);
  }
  createEl() {
    return videojs.dom.createEl('div', {
      className: 'vjs-test-divide',
      id: 'divide-' + this.id_
    });
  }
}

videojs.registerComponent('Divide', Divide);

const renderDivides = (player, options) => {
  const progressBar = player.controlBar.progressControl;
  // Looping the divides we got passed in

  for (let i = 0; i < options.divides.length; i++) {
    progressBar.addChild('Divide', { id: String(i), pose: options.divides[i].pose });
  }
};

const styleDivides = (player, options) => {
  const playerWidth = player.controlBar.progressControl.seekBar.el_.clientWidth;
  // Also need to get duration from the player
  const videoDuration = player.cache_.duration;
  // width in px per second
  const widthPerSecond = playerWidth / videoDuration;

  for (let i = 0; i < options.divides.length; i++) {
    const pos = options.divides[i].startTime * widthPerSecond;
    const width = (options.divides[i].endTime - options.divides[i].startTime) * widthPerSecond;

    document.getElementById('divide-' + String(i)).style.left =
      String(pos) + 'px';
    document.getElementById('divide-' + String(i)).style.width =
      String(width) + 'px';
  }
};

const onPlayerReady = (player) => {
  player.addClass('vjs-divide');
};

const divide = function(options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
  /* Runs when Player starts (player.on) */
  this.on('playing', function() {
    renderDivides(this, options);
    styleDivides(this, options);
  });
  /* Runs during interaction with the progressBar */
  const progress = this.controlBar.progressControl;

  progress.on('mousemove', function() {
    const dom = videojs.dom;
    const seekBar = progress.seekBar;
    const mouseTimeDisplay = seekBar.mouseTimeDisplay;
    const toolTip = mouseTimeDisplay.timeTooltip.el_;
    const ttTime = toolTip.innerText;
    /* Looping the divides and checking for matches based on toolTip times */

    for (let i = 0; i < options.divides.length; i++) {
      if (convertToInt(ttTime) >= options.divides[i].startTime && convertToInt(ttTime) <= options.divides[i].endTime) {
        dom.insertContent(toolTip, options.divides[i].pose);
      }
    }
  });
};

// Register the plugin with video.js.
registerPlugin('divide', divide);

// Include the version number.
divide.VERSION = VERSION;

export default divide;
