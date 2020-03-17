import videojs from 'video.js';
import document from 'global/document';
import { version as VERSION } from '../package.json';

// Default options for the plugin.
const defaults = {
  divides: []
};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 *           A Video.js player object.
 *
 * @param    {Object} [options={}]
 *           A plain object containing options for the plugin.
 */

class Divide extends videojs.getComponent('ClickableComponent') {
  constructor(player, options) {
    super(player, options);
    // Get Options (when needed)
    this.id = options.id;
  }
  handleClick() {
    videojs.log('Divide Clicked');
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
  const progressBar = player.controlBar.progressControl.seekBar;
  // Looping the divides we got passed in

  for (let i = 0; i < options.divides.length; i++) {
    progressBar.addChild('Divide', { id: String(i) });
  }
};

const styleDivides = (options) => {
  // Needs to be: player.controlBar.progressControl.seekBar.clientWidth
  // Pass (player, options)
  const playerWidth = 217;
  const videoDuration = 596;
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

const onPlayerReady = (player, options) => {
  player.addClass('vjs-divide');
  renderDivides(player, options);
  styleDivides(options);
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function divide
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const divide = function(options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
registerPlugin('divide', divide);

// Include the version number.
divide.VERSION = VERSION;

export default divide;
