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

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var version = "0.0.0";

	var cov_1qcqhi23by = function () {
	  var path = "C:\\Users\\Calvin\\Documents\\Zing\\videojs-divide\\src\\plugin.js",
	      hash = 'e6e2fb859e658da8cc8338e37b0017c118cc80f5',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: "C:\\Users\\Calvin\\Documents\\Zing\\videojs-divide\\src\\plugin.js",
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
	          line: 31,
	          column: 4
	        },
	        end: {
	          line: 31,
	          column: 27
	        }
	      },
	      '3': {
	        start: {
	          line: 33,
	          column: 4
	        },
	        end: {
	          line: 33,
	          column: 25
	        }
	      },
	      '4': {
	        start: {
	          line: 36,
	          column: 4
	        },
	        end: {
	          line: 36,
	          column: 34
	        }
	      },
	      '5': {
	        start: {
	          line: 39,
	          column: 4
	        },
	        end: {
	          line: 42,
	          column: 7
	        }
	      },
	      '6': {
	        start: {
	          line: 46,
	          column: 0
	        },
	        end: {
	          line: 46,
	          column: 44
	        }
	      },
	      '7': {
	        start: {
	          line: 48,
	          column: 22
	        },
	        end: {
	          line: 55,
	          column: 1
	        }
	      },
	      '8': {
	        start: {
	          line: 49,
	          column: 22
	        },
	        end: {
	          line: 49,
	          column: 63
	        }
	      },
	      '9': {
	        start: {
	          line: 52,
	          column: 2
	        },
	        end: {
	          line: 54,
	          column: 3
	        }
	      },
	      '10': {
	        start: {
	          line: 53,
	          column: 4
	        },
	        end: {
	          line: 53,
	          column: 54
	        }
	      },
	      '11': {
	        start: {
	          line: 57,
	          column: 21
	        },
	        end: {
	          line: 74,
	          column: 1
	        }
	      },
	      '12': {
	        start: {
	          line: 60,
	          column: 22
	        },
	        end: {
	          line: 60,
	          column: 25
	        }
	      },
	      '13': {
	        start: {
	          line: 61,
	          column: 24
	        },
	        end: {
	          line: 61,
	          column: 27
	        }
	      },
	      '14': {
	        start: {
	          line: 63,
	          column: 25
	        },
	        end: {
	          line: 63,
	          column: 52
	        }
	      },
	      '15': {
	        start: {
	          line: 65,
	          column: 2
	        },
	        end: {
	          line: 73,
	          column: 3
	        }
	      },
	      '16': {
	        start: {
	          line: 66,
	          column: 16
	        },
	        end: {
	          line: 66,
	          column: 61
	        }
	      },
	      '17': {
	        start: {
	          line: 67,
	          column: 18
	        },
	        end: {
	          line: 67,
	          column: 94
	        }
	      },
	      '18': {
	        start: {
	          line: 69,
	          column: 4
	        },
	        end: {
	          line: 70,
	          column: 25
	        }
	      },
	      '19': {
	        start: {
	          line: 71,
	          column: 4
	        },
	        end: {
	          line: 72,
	          column: 27
	        }
	      },
	      '20': {
	        start: {
	          line: 76,
	          column: 22
	        },
	        end: {
	          line: 80,
	          column: 1
	        }
	      },
	      '21': {
	        start: {
	          line: 77,
	          column: 2
	        },
	        end: {
	          line: 77,
	          column: 32
	        }
	      },
	      '22': {
	        start: {
	          line: 78,
	          column: 2
	        },
	        end: {
	          line: 78,
	          column: 33
	        }
	      },
	      '23': {
	        start: {
	          line: 79,
	          column: 2
	        },
	        end: {
	          line: 79,
	          column: 24
	        }
	      },
	      '24': {
	        start: {
	          line: 94,
	          column: 15
	        },
	        end: {
	          line: 98,
	          column: 1
	        }
	      },
	      '25': {
	        start: {
	          line: 95,
	          column: 2
	        },
	        end: {
	          line: 97,
	          column: 5
	        }
	      },
	      '26': {
	        start: {
	          line: 96,
	          column: 4
	        },
	        end: {
	          line: 96,
	          column: 65
	        }
	      },
	      '27': {
	        start: {
	          line: 101,
	          column: 0
	        },
	        end: {
	          line: 101,
	          column: 33
	        }
	      },
	      '28': {
	        start: {
	          line: 104,
	          column: 0
	        },
	        end: {
	          line: 104,
	          column: 25
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 30,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 30,
	            column: 31
	          },
	          end: {
	            line: 34,
	            column: 3
	          }
	        },
	        line: 30
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 35,
	            column: 2
	          },
	          end: {
	            line: 35,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 35,
	            column: 16
	          },
	          end: {
	            line: 37,
	            column: 3
	          }
	        },
	        line: 35
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 38,
	            column: 2
	          },
	          end: {
	            line: 38,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 38,
	            column: 13
	          },
	          end: {
	            line: 43,
	            column: 3
	          }
	        },
	        line: 38
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 48,
	            column: 22
	          },
	          end: {
	            line: 48,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 48,
	            column: 43
	          },
	          end: {
	            line: 55,
	            column: 1
	          }
	        },
	        line: 48
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 57,
	            column: 21
	          },
	          end: {
	            line: 57,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 57,
	            column: 34
	          },
	          end: {
	            line: 74,
	            column: 1
	          }
	        },
	        line: 57
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 76,
	            column: 22
	          },
	          end: {
	            line: 76,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 76,
	            column: 43
	          },
	          end: {
	            line: 80,
	            column: 1
	          }
	        },
	        line: 76
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 94,
	            column: 15
	          },
	          end: {
	            line: 94,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 94,
	            column: 33
	          },
	          end: {
	            line: 98,
	            column: 1
	          }
	        },
	        line: 94
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 95,
	            column: 13
	          },
	          end: {
	            line: 95,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 95,
	            column: 19
	          },
	          end: {
	            line: 97,
	            column: 3
	          }
	        },
	        line: 95
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
	      '28': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0
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
	var defaults = (cov_1qcqhi23by.s[0]++, {
	  divides: []
	});
	var registerPlugin = (cov_1qcqhi23by.s[1]++, (cov_1qcqhi23by.b[0][0]++, videojs.registerPlugin) || (cov_1qcqhi23by.b[0][1]++, videojs.plugin));

	var Divide =
	/*#__PURE__*/
	function (_videojs$getComponent) {
	  _inheritsLoose(Divide, _videojs$getComponent);

	  function Divide(player, options) {
	    var _this;

	    cov_1qcqhi23by.f[0]++;
	    cov_1qcqhi23by.s[2]++;
	    _this = _videojs$getComponent.call(this, player, options) || this;
	    cov_1qcqhi23by.s[3]++;
	    _this.id = options.id;
	    return _this;
	  }

	  var _proto = Divide.prototype;

	  _proto.handleClick = function handleClick() {
	    cov_1qcqhi23by.f[1]++;
	    cov_1qcqhi23by.s[4]++;
	    videojs.log('Divide Clicked');
	  };

	  _proto.createEl = function createEl() {
	    cov_1qcqhi23by.f[2]++;
	    cov_1qcqhi23by.s[5]++;
	    return videojs.dom.createEl('div', {
	      className: 'vjs-test-divide',
	      id: 'divide-' + this.id_
	    });
	  };

	  return Divide;
	}(videojs.getComponent('ClickableComponent'));

	cov_1qcqhi23by.s[6]++;
	videojs.registerComponent('Divide', Divide);
	cov_1qcqhi23by.s[7]++;

	var renderDivides = function renderDivides(player, options) {
	  cov_1qcqhi23by.f[3]++;
	  var progressBar = (cov_1qcqhi23by.s[8]++, player.controlBar.progressControl.seekBar);
	  cov_1qcqhi23by.s[9]++;

	  for (var i = 0; i < options.divides.length; i++) {
	    cov_1qcqhi23by.s[10]++;
	    progressBar.addChild('Divide', {
	      id: String(i)
	    });
	  }
	};

	cov_1qcqhi23by.s[11]++;

	var styleDivides = function styleDivides(options) {
	  cov_1qcqhi23by.f[4]++;
	  var playerWidth = (cov_1qcqhi23by.s[12]++, 217);
	  var videoDuration = (cov_1qcqhi23by.s[13]++, 596);
	  var widthPerSecond = (cov_1qcqhi23by.s[14]++, playerWidth / videoDuration);
	  cov_1qcqhi23by.s[15]++;

	  for (var i = 0; i < options.divides.length; i++) {
	    var pos = (cov_1qcqhi23by.s[16]++, options.divides[i].startTime * widthPerSecond);
	    var width = (cov_1qcqhi23by.s[17]++, (options.divides[i].endTime - options.divides[i].startTime) * widthPerSecond);
	    cov_1qcqhi23by.s[18]++;
	    document_1.getElementById('divide-' + String(i)).style.left = String(pos) + 'px';
	    cov_1qcqhi23by.s[19]++;
	    document_1.getElementById('divide-' + String(i)).style.width = String(width) + 'px';
	  }
	};

	cov_1qcqhi23by.s[20]++;

	var onPlayerReady = function onPlayerReady(player, options) {
	  cov_1qcqhi23by.f[5]++;
	  cov_1qcqhi23by.s[21]++;
	  player.addClass('vjs-divide');
	  cov_1qcqhi23by.s[22]++;
	  renderDivides(player, options);
	  cov_1qcqhi23by.s[23]++;
	  styleDivides(options);
	};

	cov_1qcqhi23by.s[24]++;

	var divide = function divide(options) {
	  var _this2 = this;

	  cov_1qcqhi23by.f[6]++;
	  cov_1qcqhi23by.s[25]++;
	  this.ready(function () {
	    cov_1qcqhi23by.f[7]++;
	    cov_1qcqhi23by.s[26]++;
	    onPlayerReady(_this2, videojs.mergeOptions(defaults, options));
	  });
	};

	cov_1qcqhi23by.s[27]++;
	registerPlugin('divide', divide);
	cov_1qcqhi23by.s[28]++;
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
