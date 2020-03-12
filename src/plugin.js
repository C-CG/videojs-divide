import videojs from 'video.js';
import document from 'global/document';
import { version as VERSION } from '../package.json';

// Default options for the plugin.
const defaults = {
  segments: []
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

const testRender = (player, options) => {
  const videoElement = player.el();
  const ul = document.createElement('ul');

  ul.id = 'segments';
  ul.className = 'vjs-list';
  // Looping segments
  for (let i = 0; i < options.divides.length; i++) {
    const li = document.createElement('li');

    li.className = 'vjs-list-item';
    ul.appendChild(li);
    li.innerHTML = 'startTime: ' + options.divides[i].startTime;
  }
  videoElement.appendChild(ul);
};

const onPlayerReady = (player, options) => {
  player.addClass('vjs-divide');
  testRender(player, options);
  // If there are no segments, exit
  if (!options.segments) {
    return;
  }
  // setupProgressBar(player, options);
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
