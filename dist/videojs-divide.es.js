/*! @name videojs-divide @version 0.0.0 @license MIT */
import videojs from 'video.js';
import document from 'global/document';

var version = "0.0.0";

var defaults = {
  divides: []
}; // Cross-compatibility for Video.js 5 and 6.

var registerPlugin = videojs.registerPlugin || videojs.plugin; // const dom = videojs.dom || videojs;

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

var renderProgressBar = function renderProgressBar(player, options) {
  var videoElement = player.el();
  var ProgressBar = document.createElement('div');
  ProgressBar.className = 'vjs-progress-bar'; // Looping divides

  var _loop = function _loop(i) {
    var divide = document.createElement('div');
    divide.id = 'd' + i.toString();
    divide.className = 'vjs-progress-bar-divide';
    divide.innerHTML = options.divides[i].pose;

    divide.onclick = function () {
      player.currentTime(options.divides[i].startTime);
    };

    ProgressBar.appendChild(divide);
  };

  for (var i = 0; i < options.divides.length; i++) {
    _loop(i);
  }

  videoElement.appendChild(ProgressBar);
};

var styleDivides = function styleDivides(player, options) {
  // 440
  var playerWidth = player.width();
  var videoDuration = 596; // width in px per second (used)

  var widthPerSecond = playerWidth / videoDuration;

  for (var i = 0; i < options.divides.length; i++) {
    var pos = options.divides[i].startTime * widthPerSecond;
    var width = options.divides[i].endTime - options.divides[i].startTime;
    document.getElementById('d' + i.toString()).style.left = pos.toString() + 'px';
    document.getElementById('d' + i.toString()).style.width = width.toString() + 'px';
  }
};

var onPlayerReady = function onPlayerReady(player, options) {
  player.addClass('vjs-divide');
  renderProgressBar(player, options);
  styleDivides(player, options);
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


var divide = function divide(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, videojs.mergeOptions(defaults, options));
  });
}; // Register the plugin with video.js.


registerPlugin('divide', divide); // Include the version number.

divide.VERSION = version;

export default divide;
