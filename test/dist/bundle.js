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
	      hash = '63423ced608a2e83e7f1be3f2ff33032a3e3e770',
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
	          line: 28,
	          column: 25
	        },
	        end: {
	          line: 41,
	          column: 1
	        }
	      },
	      '3': {
	        start: {
	          line: 29,
	          column: 23
	        },
	        end: {
	          line: 29,
	          column: 34
	        }
	      },
	      '4': {
	        start: {
	          line: 30,
	          column: 13
	        },
	        end: {
	          line: 30,
	          column: 41
	        }
	      },
	      '5': {
	        start: {
	          line: 32,
	          column: 2
	        },
	        end: {
	          line: 32,
	          column: 21
	        }
	      },
	      '6': {
	        start: {
	          line: 34,
	          column: 2
	        },
	        end: {
	          line: 39,
	          column: 3
	        }
	      },
	      '7': {
	        start: {
	          line: 35,
	          column: 15
	        },
	        end: {
	          line: 35,
	          column: 43
	        }
	      },
	      '8': {
	        start: {
	          line: 37,
	          column: 4
	        },
	        end: {
	          line: 37,
	          column: 23
	        }
	      },
	      '9': {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 38,
	          column: 21
	        }
	      },
	      '10': {
	        start: {
	          line: 40,
	          column: 2
	        },
	        end: {
	          line: 40,
	          column: 31
	        }
	      },
	      '11': {
	        start: {
	          line: 43,
	          column: 22
	        },
	        end: {
	          line: 51,
	          column: 1
	        }
	      },
	      '12': {
	        start: {
	          line: 44,
	          column: 2
	        },
	        end: {
	          line: 44,
	          column: 32
	        }
	      },
	      '13': {
	        start: {
	          line: 47,
	          column: 2
	        },
	        end: {
	          line: 49,
	          column: 3
	        }
	      },
	      '14': {
	        start: {
	          line: 48,
	          column: 4
	        },
	        end: {
	          line: 48,
	          column: 11
	        }
	      },
	      '15': {
	        start: {
	          line: 50,
	          column: 2
	        },
	        end: {
	          line: 50,
	          column: 36
	        }
	      },
	      '16': {
	        start: {
	          line: 65,
	          column: 15
	        },
	        end: {
	          line: 69,
	          column: 1
	        }
	      },
	      '17': {
	        start: {
	          line: 66,
	          column: 2
	        },
	        end: {
	          line: 68,
	          column: 5
	        }
	      },
	      '18': {
	        start: {
	          line: 67,
	          column: 4
	        },
	        end: {
	          line: 67,
	          column: 65
	        }
	      },
	      '19': {
	        start: {
	          line: 72,
	          column: 0
	        },
	        end: {
	          line: 72,
	          column: 33
	        }
	      },
	      '20': {
	        start: {
	          line: 75,
	          column: 0
	        },
	        end: {
	          line: 75,
	          column: 25
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 28,
	            column: 25
	          },
	          end: {
	            line: 28,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 28,
	            column: 46
	          },
	          end: {
	            line: 41,
	            column: 1
	          }
	        },
	        line: 28
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 43,
	            column: 22
	          },
	          end: {
	            line: 43,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 43,
	            column: 43
	          },
	          end: {
	            line: 51,
	            column: 1
	          }
	        },
	        line: 43
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 65,
	            column: 15
	          },
	          end: {
	            line: 65,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 65,
	            column: 33
	          },
	          end: {
	            line: 69,
	            column: 1
	          }
	        },
	        line: 65
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 66,
	            column: 13
	          },
	          end: {
	            line: 66,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 66,
	            column: 19
	          },
	          end: {
	            line: 68,
	            column: 3
	          }
	        },
	        line: 66
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
	            line: 47,
	            column: 2
	          },
	          end: {
	            line: 49,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 47,
	            column: 2
	          },
	          end: {
	            line: 49,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 47,
	            column: 2
	          },
	          end: {
	            line: 49,
	            column: 3
	          }
	        }],
	        line: 47
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
	      '20': 0
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
	  segments: undefined
	});
	var registerPlugin = (cov_5yfkrdepa.s[1]++, (cov_5yfkrdepa.b[0][0]++, videojs.registerPlugin) || (cov_5yfkrdepa.b[0][1]++, videojs.plugin));
	cov_5yfkrdepa.s[2]++;

	var setupProgressBar = function setupProgressBar(player, options) {
	  cov_5yfkrdepa.f[0]++;
	  var videoElement = (cov_5yfkrdepa.s[3]++, player.el());
	  var ul = (cov_5yfkrdepa.s[4]++, document_1.createElement('ul'));
	  cov_5yfkrdepa.s[5]++;
	  ul.id = 'segments';
	  cov_5yfkrdepa.s[6]++;

	  for (var i = 0; i < options.segments.length; i++) {
	    var li = (cov_5yfkrdepa.s[7]++, document_1.createElement('li'));
	    cov_5yfkrdepa.s[8]++;
	    ul.appendChild(li);
	    cov_5yfkrdepa.s[9]++;
	    li.innerHTML = i;
	  }

	  cov_5yfkrdepa.s[10]++;
	  videoElement.appendChild(ul);
	};

	cov_5yfkrdepa.s[11]++;

	var onPlayerReady = function onPlayerReady(player, options) {
	  cov_5yfkrdepa.f[1]++;
	  cov_5yfkrdepa.s[12]++;
	  player.addClass('vjs-divide');
	  cov_5yfkrdepa.s[13]++;

	  if (!options.segments) {
	    cov_5yfkrdepa.b[1][0]++;
	    cov_5yfkrdepa.s[14]++;
	    return;
	  } else {
	    cov_5yfkrdepa.b[1][1]++;
	  }

	  cov_5yfkrdepa.s[15]++;
	  setupProgressBar(player, options);
	};

	cov_5yfkrdepa.s[16]++;

	var divide = function divide(options) {
	  var _this = this;

	  cov_5yfkrdepa.f[2]++;
	  cov_5yfkrdepa.s[17]++;
	  this.ready(function () {
	    cov_5yfkrdepa.f[3]++;
	    cov_5yfkrdepa.s[18]++;
	    onPlayerReady(_this, videojs.mergeOptions(defaults, options));
	  });
	};

	cov_5yfkrdepa.s[19]++;
	registerPlugin('divide', divide);
	cov_5yfkrdepa.s[20]++;
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
