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
	      hash = 'c923f628187c456d25f3b03052ad7a55cc95bce5',
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
	          column: 19
	        },
	        end: {
	          line: 44,
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
	          column: 13
	        },
	        end: {
	          line: 31,
	          column: 41
	        }
	      },
	      '5': {
	        start: {
	          line: 33,
	          column: 2
	        },
	        end: {
	          line: 33,
	          column: 21
	        }
	      },
	      '6': {
	        start: {
	          line: 34,
	          column: 2
	        },
	        end: {
	          line: 34,
	          column: 28
	        }
	      },
	      '7': {
	        start: {
	          line: 36,
	          column: 2
	        },
	        end: {
	          line: 42,
	          column: 3
	        }
	      },
	      '8': {
	        start: {
	          line: 37,
	          column: 15
	        },
	        end: {
	          line: 37,
	          column: 43
	        }
	      },
	      '9': {
	        start: {
	          line: 39,
	          column: 4
	        },
	        end: {
	          line: 39,
	          column: 35
	        }
	      },
	      '10': {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 40,
	          column: 23
	        }
	      },
	      '11': {
	        start: {
	          line: 41,
	          column: 4
	        },
	        end: {
	          line: 41,
	          column: 64
	        }
	      },
	      '12': {
	        start: {
	          line: 43,
	          column: 2
	        },
	        end: {
	          line: 43,
	          column: 31
	        }
	      },
	      '13': {
	        start: {
	          line: 46,
	          column: 22
	        },
	        end: {
	          line: 54,
	          column: 1
	        }
	      },
	      '14': {
	        start: {
	          line: 47,
	          column: 2
	        },
	        end: {
	          line: 47,
	          column: 32
	        }
	      },
	      '15': {
	        start: {
	          line: 48,
	          column: 2
	        },
	        end: {
	          line: 48,
	          column: 30
	        }
	      },
	      '16': {
	        start: {
	          line: 50,
	          column: 2
	        },
	        end: {
	          line: 52,
	          column: 3
	        }
	      },
	      '17': {
	        start: {
	          line: 51,
	          column: 4
	        },
	        end: {
	          line: 51,
	          column: 11
	        }
	      },
	      '18': {
	        start: {
	          line: 68,
	          column: 15
	        },
	        end: {
	          line: 72,
	          column: 1
	        }
	      },
	      '19': {
	        start: {
	          line: 69,
	          column: 2
	        },
	        end: {
	          line: 71,
	          column: 5
	        }
	      },
	      '20': {
	        start: {
	          line: 70,
	          column: 4
	        },
	        end: {
	          line: 70,
	          column: 65
	        }
	      },
	      '21': {
	        start: {
	          line: 75,
	          column: 0
	        },
	        end: {
	          line: 75,
	          column: 33
	        }
	      },
	      '22': {
	        start: {
	          line: 78,
	          column: 0
	        },
	        end: {
	          line: 78,
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
	            column: 19
	          },
	          end: {
	            line: 29,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 29,
	            column: 40
	          },
	          end: {
	            line: 44,
	            column: 1
	          }
	        },
	        line: 29
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 46,
	            column: 22
	          },
	          end: {
	            line: 46,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 46,
	            column: 43
	          },
	          end: {
	            line: 54,
	            column: 1
	          }
	        },
	        line: 46
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 68,
	            column: 15
	          },
	          end: {
	            line: 68,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 68,
	            column: 33
	          },
	          end: {
	            line: 72,
	            column: 1
	          }
	        },
	        line: 68
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 69,
	            column: 13
	          },
	          end: {
	            line: 69,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 69,
	            column: 19
	          },
	          end: {
	            line: 71,
	            column: 3
	          }
	        },
	        line: 69
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
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 50,
	            column: 2
	          },
	          end: {
	            line: 52,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 50,
	            column: 2
	          },
	          end: {
	            line: 52,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 50,
	            column: 2
	          },
	          end: {
	            line: 52,
	            column: 3
	          }
	        }],
	        line: 50
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
	      '22': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0]
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
	  segments: []
	});
	var registerPlugin = (cov_5yfkrdepa.s[1]++, (cov_5yfkrdepa.b[0][0]++, videojs.registerPlugin) || (cov_5yfkrdepa.b[0][1]++, videojs.plugin));
	cov_5yfkrdepa.s[2]++;

	var testRender = function testRender(player, options) {
	  cov_5yfkrdepa.f[0]++;
	  var videoElement = (cov_5yfkrdepa.s[3]++, player.el());
	  var ul = (cov_5yfkrdepa.s[4]++, document_1.createElement('ul'));
	  cov_5yfkrdepa.s[5]++;
	  ul.id = 'segments';
	  cov_5yfkrdepa.s[6]++;
	  ul.className = 'vjs-list';
	  cov_5yfkrdepa.s[7]++;

	  for (var i = 0; i < options.divides.length; i++) {
	    var li = (cov_5yfkrdepa.s[8]++, document_1.createElement('li'));
	    cov_5yfkrdepa.s[9]++;
	    li.className = 'vjs-list-item';
	    cov_5yfkrdepa.s[10]++;
	    ul.appendChild(li);
	    cov_5yfkrdepa.s[11]++;
	    li.innerHTML = 'startTime: ' + options.divides[i].startTime;
	  }

	  cov_5yfkrdepa.s[12]++;
	  videoElement.appendChild(ul);
	};

	cov_5yfkrdepa.s[13]++;

	var onPlayerReady = function onPlayerReady(player, options) {
	  cov_5yfkrdepa.f[1]++;
	  cov_5yfkrdepa.s[14]++;
	  player.addClass('vjs-divide');
	  cov_5yfkrdepa.s[15]++;
	  testRender(player, options);
	  cov_5yfkrdepa.s[16]++;

	  if (!options.segments) {
	    cov_5yfkrdepa.b[1][0]++;
	    cov_5yfkrdepa.s[17]++;
	    return;
	  } else {
	    cov_5yfkrdepa.b[1][1]++;
	  }
	};

	cov_5yfkrdepa.s[18]++;

	var divide = function divide(options) {
	  var _this = this;

	  cov_5yfkrdepa.f[2]++;
	  cov_5yfkrdepa.s[19]++;
	  this.ready(function () {
	    cov_5yfkrdepa.f[3]++;
	    cov_5yfkrdepa.s[20]++;
	    onPlayerReady(_this, videojs.mergeOptions(defaults, options));
	  });
	};

	cov_5yfkrdepa.s[21]++;
	registerPlugin('divide', divide);
	cov_5yfkrdepa.s[22]++;
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
