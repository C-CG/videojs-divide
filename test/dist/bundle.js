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
	      hash = '142b7b429486d56986e6c6b3981cbc850d3b0342',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/calvingill/Documents/videojs-plugin/videojs-divide/src/plugin.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 6,
	          column: 17
	        },
	        end: {
	          line: 8,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 11,
	          column: 23
	        },
	        end: {
	          line: 11,
	          column: 63
	        }
	      },
	      '2': {
	        start: {
	          line: 29,
	          column: 26
	        },
	        end: {
	          line: 47,
	          column: 1
	        }
	      },
	      '3': {
	        start: {
	          line: 30,
	          column: 23
	        },
	        end: {
	          line: 30,
	          column: 34
	        }
	      },
	      '4': {
	        start: {
	          line: 31,
	          column: 22
	        },
	        end: {
	          line: 31,
	          column: 51
	        }
	      },
	      '5': {
	        start: {
	          line: 33,
	          column: 2
	        },
	        end: {
	          line: 33,
	          column: 45
	        }
	      },
	      '6': {
	        start: {
	          line: 35,
	          column: 2
	        },
	        end: {
	          line: 45,
	          column: 3
	        }
	      },
	      '7': {
	        start: {
	          line: 36,
	          column: 19
	        },
	        end: {
	          line: 36,
	          column: 48
	        }
	      },
	      '8': {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 38,
	          column: 35
	        }
	      },
	      '9': {
	        start: {
	          line: 39,
	          column: 4
	        },
	        end: {
	          line: 39,
	          column: 49
	        }
	      },
	      '10': {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 40,
	          column: 47
	        }
	      },
	      '11': {
	        start: {
	          line: 41,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 6
	        }
	      },
	      '12': {
	        start: {
	          line: 42,
	          column: 6
	        },
	        end: {
	          line: 42,
	          column: 55
	        }
	      },
	      '13': {
	        start: {
	          line: 44,
	          column: 4
	        },
	        end: {
	          line: 44,
	          column: 36
	        }
	      },
	      '14': {
	        start: {
	          line: 46,
	          column: 2
	        },
	        end: {
	          line: 46,
	          column: 40
	        }
	      },
	      '15': {
	        start: {
	          line: 49,
	          column: 21
	        },
	        end: {
	          line: 63,
	          column: 1
	        }
	      },
	      '16': {
	        start: {
	          line: 51,
	          column: 22
	        },
	        end: {
	          line: 51,
	          column: 36
	        }
	      },
	      '17': {
	        start: {
	          line: 52,
	          column: 24
	        },
	        end: {
	          line: 52,
	          column: 27
	        }
	      },
	      '18': {
	        start: {
	          line: 54,
	          column: 25
	        },
	        end: {
	          line: 54,
	          column: 52
	        }
	      },
	      '19': {
	        start: {
	          line: 56,
	          column: 2
	        },
	        end: {
	          line: 62,
	          column: 3
	        }
	      },
	      '20': {
	        start: {
	          line: 57,
	          column: 16
	        },
	        end: {
	          line: 57,
	          column: 61
	        }
	      },
	      '21': {
	        start: {
	          line: 58,
	          column: 18
	        },
	        end: {
	          line: 58,
	          column: 75
	        }
	      },
	      '22': {
	        start: {
	          line: 60,
	          column: 4
	        },
	        end: {
	          line: 60,
	          column: 83
	        }
	      },
	      '23': {
	        start: {
	          line: 61,
	          column: 4
	        },
	        end: {
	          line: 61,
	          column: 86
	        }
	      },
	      '24': {
	        start: {
	          line: 65,
	          column: 24
	        },
	        end: {
	          line: 71,
	          column: 1
	        }
	      },
	      '25': {
	        start: {
	          line: 66,
	          column: 19
	        },
	        end: {
	          line: 66,
	          column: 36
	        }
	      },
	      '26': {
	        start: {
	          line: 67,
	          column: 19
	        },
	        end: {
	          line: 67,
	          column: 43
	        }
	      },
	      '27': {
	        start: {
	          line: 68,
	          column: 18
	        },
	        end: {
	          line: 68,
	          column: 34
	        }
	      },
	      '28': {
	        start: {
	          line: 69,
	          column: 2
	        },
	        end: {
	          line: 69,
	          column: 29
	        }
	      },
	      '29': {
	        start: {
	          line: 70,
	          column: 2
	        },
	        end: {
	          line: 70,
	          column: 36
	        }
	      },
	      '30': {
	        start: {
	          line: 73,
	          column: 22
	        },
	        end: {
	          line: 78,
	          column: 1
	        }
	      },
	      '31': {
	        start: {
	          line: 74,
	          column: 2
	        },
	        end: {
	          line: 74,
	          column: 32
	        }
	      },
	      '32': {
	        start: {
	          line: 75,
	          column: 2
	        },
	        end: {
	          line: 75,
	          column: 37
	        }
	      },
	      '33': {
	        start: {
	          line: 76,
	          column: 2
	        },
	        end: {
	          line: 76,
	          column: 32
	        }
	      },
	      '34': {
	        start: {
	          line: 77,
	          column: 2
	        },
	        end: {
	          line: 77,
	          column: 26
	        }
	      },
	      '35': {
	        start: {
	          line: 92,
	          column: 15
	        },
	        end: {
	          line: 96,
	          column: 1
	        }
	      },
	      '36': {
	        start: {
	          line: 93,
	          column: 2
	        },
	        end: {
	          line: 95,
	          column: 5
	        }
	      },
	      '37': {
	        start: {
	          line: 94,
	          column: 4
	        },
	        end: {
	          line: 94,
	          column: 65
	        }
	      },
	      '38': {
	        start: {
	          line: 99,
	          column: 0
	        },
	        end: {
	          line: 99,
	          column: 33
	        }
	      },
	      '39': {
	        start: {
	          line: 102,
	          column: 0
	        },
	        end: {
	          line: 102,
	          column: 25
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 29,
	            column: 26
	          },
	          end: {
	            line: 29,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 29,
	            column: 47
	          },
	          end: {
	            line: 47,
	            column: 1
	          }
	        },
	        line: 29
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 41,
	            column: 21
	          },
	          end: {
	            line: 41,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 41,
	            column: 33
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        },
	        line: 41
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 49,
	            column: 21
	          },
	          end: {
	            line: 49,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 49,
	            column: 42
	          },
	          end: {
	            line: 63,
	            column: 1
	          }
	        },
	        line: 49
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 65,
	            column: 24
	          },
	          end: {
	            line: 65,
	            column: 25
	          }
	        },
	        loc: {
	          start: {
	            line: 65,
	            column: 36
	          },
	          end: {
	            line: 71,
	            column: 1
	          }
	        },
	        line: 65
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 73,
	            column: 22
	          },
	          end: {
	            line: 73,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 73,
	            column: 43
	          },
	          end: {
	            line: 78,
	            column: 1
	          }
	        },
	        line: 73
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 92,
	            column: 15
	          },
	          end: {
	            line: 92,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 92,
	            column: 34
	          },
	          end: {
	            line: 96,
	            column: 1
	          }
	        },
	        line: 92
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 93,
	            column: 13
	          },
	          end: {
	            line: 93,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 93,
	            column: 19
	          },
	          end: {
	            line: 95,
	            column: 3
	          }
	        },
	        line: 93
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 11,
	            column: 23
	          },
	          end: {
	            line: 11,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 11,
	            column: 23
	          },
	          end: {
	            line: 11,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 11,
	            column: 49
	          },
	          end: {
	            line: 11,
	            column: 63
	          }
	        }],
	        line: 11
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
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0
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
	var defaults = (cov_5yfkrdepa.s[0]++, {
	  divides: []
	});
	var registerPlugin = (cov_5yfkrdepa.s[1]++, (cov_5yfkrdepa.b[0][0]++, videojs.registerPlugin) || (cov_5yfkrdepa.b[0][1]++, videojs.plugin));
	cov_5yfkrdepa.s[2]++;

	var renderProgressBar = function renderProgressBar(player, options) {
	  cov_5yfkrdepa.f[0]++;
	  var videoElement = (cov_5yfkrdepa.s[3]++, player.el());
	  var ProgressBar = (cov_5yfkrdepa.s[4]++, document_1.createElement('div'));
	  cov_5yfkrdepa.s[5]++;
	  ProgressBar.className = 'vjs-progress-bar';
	  cov_5yfkrdepa.s[6]++;

	  var _loop = function _loop(i) {
	    var divide = (cov_5yfkrdepa.s[7]++, document_1.createElement('div'));
	    cov_5yfkrdepa.s[8]++;
	    divide.id = 'd' + i.toString();
	    cov_5yfkrdepa.s[9]++;
	    divide.className = 'vjs-progress-bar-divide';
	    cov_5yfkrdepa.s[10]++;
	    divide.innerHTML = options.divides[i].pose;
	    cov_5yfkrdepa.s[11]++;

	    divide.onclick = function () {
	      cov_5yfkrdepa.f[1]++;
	      cov_5yfkrdepa.s[12]++;
	      player.currentTime(options.divides[i].startTime);
	    };

	    cov_5yfkrdepa.s[13]++;
	    ProgressBar.appendChild(divide);
	  };

	  for (var i = 0; i < options.divides.length; i++) {
	    _loop(i);
	  }

	  cov_5yfkrdepa.s[14]++;
	  videoElement.appendChild(ProgressBar);
	};

	cov_5yfkrdepa.s[15]++;

	var styleDivides = function styleDivides(player, options) {
	  cov_5yfkrdepa.f[2]++;
	  var playerWidth = (cov_5yfkrdepa.s[16]++, player.width());
	  var videoDuration = (cov_5yfkrdepa.s[17]++, 596);
	  var widthPerSecond = (cov_5yfkrdepa.s[18]++, playerWidth / videoDuration);
	  cov_5yfkrdepa.s[19]++;

	  for (var i = 0; i < options.divides.length; i++) {
	    var pos = (cov_5yfkrdepa.s[20]++, options.divides[i].startTime * widthPerSecond);
	    var width = (cov_5yfkrdepa.s[21]++, options.divides[i].endTime - options.divides[i].startTime);
	    cov_5yfkrdepa.s[22]++;
	    document_1.getElementById('d' + i.toString()).style.left = pos.toString() + 'px';
	    cov_5yfkrdepa.s[23]++;
	    document_1.getElementById('d' + i.toString()).style.width = width.toString() + 'px';
	  }
	};

	cov_5yfkrdepa.s[24]++;

	var testProgressGet = function testProgressGet(player) {
	  cov_5yfkrdepa.f[3]++;
	  var controls = (cov_5yfkrdepa.s[25]++, player.controlBar);
	  var progress = (cov_5yfkrdepa.s[26]++, controls.progressControl);
	  var seekBar = (cov_5yfkrdepa.s[27]++, progress.seekBar);
	  cov_5yfkrdepa.s[28]++;
	  seekBar.addChild('Button');
	  cov_5yfkrdepa.s[29]++;
	  videojs.log('EL: ', seekBar.el());
	};

	cov_5yfkrdepa.s[30]++;

	var onPlayerReady = function onPlayerReady(player, options) {
	  cov_5yfkrdepa.f[4]++;
	  cov_5yfkrdepa.s[31]++;
	  player.addClass('vjs-divide');
	  cov_5yfkrdepa.s[32]++;
	  renderProgressBar(player, options);
	  cov_5yfkrdepa.s[33]++;
	  styleDivides(player, options);
	  cov_5yfkrdepa.s[34]++;
	  testProgressGet(player);
	};

	cov_5yfkrdepa.s[35]++;

	var divide = function divide(options) {
	  var _this = this;

	  cov_5yfkrdepa.f[5]++;
	  cov_5yfkrdepa.s[36]++;
	  this.ready(function () {
	    cov_5yfkrdepa.f[6]++;
	    cov_5yfkrdepa.s[37]++;
	    onPlayerReady(_this, videojs.mergeOptions(defaults, options));
	  });
	};

	cov_5yfkrdepa.s[38]++;
	registerPlugin('divide', divide);
	cov_5yfkrdepa.s[39]++;
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
