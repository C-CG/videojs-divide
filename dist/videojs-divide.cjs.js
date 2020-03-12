/*! @name videojs-divide @version 0.0.0 @license MIT */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var videojs = _interopDefault(require('video.js'));
var document = _interopDefault(require('global/document'));

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

var renderDivides = function renderDivides(player, options) {
  var videoElement = player.el();
  var ul = document.createElement('ul');
  ul.id = 'divides';
  ul.className = 'vjs-list'; // Looping divides

  var _loop = function _loop(i) {
    var li = document.createElement('li');
    li.className = 'vjs-list-item';
    li.innerHTML = 'startTime: ' + options.divides[i].startTime;

    li.onclick = function () {
      setTimeout(player.currentTime(options.divides[i].startTime));
    };

    ul.appendChild(li);
  };

  for (var i = 0; i < options.divides.length; i++) {
    _loop(i);
  }

  videoElement.appendChild(ul);
};

var onPlayerReady = function onPlayerReady(player, options) {
  player.addClass('vjs-divide');
  renderDivides(player, options);
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

module.exports = divide;
