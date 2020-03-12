/*! @name videojs-divide @version 0.0.0 @license MIT */
(function (QUnit, sinon, videojs) {
	'use strict';

	QUnit = QUnit && QUnit.hasOwnProperty('default') ? QUnit['default'] : QUnit;
	sinon = sinon && sinon.hasOwnProperty('default') ? sinon['default'] : sinon;
	videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var minDoc = {};

	var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal :
	    typeof window !== 'undefined' ? window : {};


	var doccy;

	if (typeof document !== 'undefined') {
	    doccy = document;
	} else {
	    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }
	}

	var document_1 = doccy;

	var version = "0.0.0";

	var cov_5yfkrdepa = function () {
	  var path = '/Users/calvingill/Documents/videojs-plugin/videojs-divide/src/plugin.js',
	      hash = 'a84b9f94fe37bb4dc76db116ce0133c82b3ad086',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/calvingill/Documents/videojs-plugin/videojs-divide/src/plugin.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 5,
	          column: 17
	        },
	        end: {
	          line: 5,
	          column: 19
	        }
	      },
	      '1': {
	        start: {
	          line: 8,
	          column: 23
	        },
	        end: {
	          line: 8,
	          column: 63
	        }
	      },
	      '2': {
	        start: {
	          line: 25,
	          column: 22
	        },
	        end: {
	          line: 27,
	          column: 1
	        }
	      },
	      '3': {
	        start: {
	          line: 26,
	          column: 2
	        },
	        end: {
	          line: 26,
	          column: 32
	        }
	      },
	      '4': {
	        start: {
	          line: 41,
	          column: 15
	        },
	        end: {
	          line: 45,
	          column: 1
	        }
	      },
	      '5': {
	        start: {
	          line: 42,
	          column: 2
	        },
	        end: {
	          line: 44,
	          column: 5
	        }
	      },
	      '6': {
	        start: {
	          line: 43,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 65
	        }
	      },
	      '7': {
	        start: {
	          line: 48,
	          column: 0
	        },
	        end: {
	          line: 48,
	          column: 33
	        }
	      },
	      '8': {
	        start: {
	          line: 51,
	          column: 0
	        },
	        end: {
	          line: 51,
	          column: 25
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 25,
	            column: 22
	          },
	          end: {
	            line: 25,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 25,
	            column: 43
	          },
	          end: {
	            line: 27,
	            column: 1
	          }
	        },
	        line: 25
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 41,
	            column: 15
	          },
	          end: {
	            line: 41,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 41,
	            column: 33
	          },
	          end: {
	            line: 45,
	            column: 1
	          }
	        },
	        line: 41
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 42,
	            column: 13
	          },
	          end: {
	            line: 42,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 42,
	            column: 19
	          },
	          end: {
	            line: 44,
	            column: 3
	          }
	        },
	        line: 42
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 8,
	            column: 23
	          },
	          end: {
	            line: 8,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 8,
	            column: 23
	          },
	          end: {
	            line: 8,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 8,
	            column: 49
	          },
	          end: {
	            line: 8,
	            column: 63
	          }
	        }],
	        line: 8
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0
	    },
	    b: {
	      '0': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var defaults = (cov_5yfkrdepa.s[0]++, {});
	var registerPlugin = (cov_5yfkrdepa.s[1]++, (cov_5yfkrdepa.b[0][0]++, videojs.registerPlugin) || (cov_5yfkrdepa.b[0][1]++, videojs.plugin));
	cov_5yfkrdepa.s[2]++;

	var onPlayerReady = function onPlayerReady(player, options) {
	  cov_5yfkrdepa.f[0]++;
	  cov_5yfkrdepa.s[3]++;
	  player.addClass('vjs-divide');
	};

	cov_5yfkrdepa.s[4]++;

	var divide = function divide(options) {
	  var _this = this;

	  cov_5yfkrdepa.f[1]++;
	  cov_5yfkrdepa.s[5]++;
	  this.ready(function () {
	    cov_5yfkrdepa.f[2]++;
	    cov_5yfkrdepa.s[6]++;
	    onPlayerReady(_this, videojs.mergeOptions(defaults, options));
	  });
	};

	cov_5yfkrdepa.s[7]++;
	registerPlugin('divide', divide);
	cov_5yfkrdepa.s[8]++;
	divide.VERSION = version;

	var Player = videojs.getComponent('Player');
	QUnit.test('the environment is sane', function (assert) {
	  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
	  assert.strictEqual(typeof sinon, 'object', 'sinon exists');
	  assert.strictEqual(typeof videojs, 'function', 'videojs exists');
	  assert.strictEqual(typeof divide, 'function', 'plugin is a function');
	});
	QUnit.module('videojs-divide', {
	  beforeEach: function beforeEach() {
	    // Mock the environment's timers because certain things - particularly
	    // player readiness - are asynchronous in video.js 5. This MUST come
	    // before any player is created; otherwise, timers could get created
	    // with the actual timer methods!
	    this.clock = sinon.useFakeTimers();
	    this.fixture = document_1.getElementById('qunit-fixture');
	    this.video = document_1.createElement('video');
	    this.fixture.appendChild(this.video);
	    this.player = videojs(this.video);
	  },
	  afterEach: function afterEach() {
	    this.player.dispose();
	    this.clock.restore();
	  }
	});
	QUnit.test('registers itself with video.js', function (assert) {
	  assert.expect(2);
	  assert.strictEqual(typeof Player.prototype.divide, 'function', 'videojs-divide plugin was registered');
	  this.player.divide(); // Tick the clock forward enough to trigger the player to be "ready".

	  this.clock.tick(1);
	  assert.ok(this.player.hasClass('vjs-divide'), 'the plugin adds a class to the player');
	});

}(QUnit, sinon, videojs));
