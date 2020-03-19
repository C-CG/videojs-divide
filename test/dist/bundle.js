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
	      hash = '94b9c8427bd292a65ed609402c5fbc8378e46fbe',
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
	          line: 34,
	          column: 4
	        },
	        end: {
	          line: 34,
	          column: 29
	        }
	      },
	      '5': {
	        start: {
	          line: 37,
	          column: 4
	        },
	        end: {
	          line: 37,
	          column: 55
	        }
	      },
	      '6': {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 7
	        }
	      },
	      '7': {
	        start: {
	          line: 47,
	          column: 0
	        },
	        end: {
	          line: 47,
	          column: 44
	        }
	      },
	      '8': {
	        start: {
	          line: 49,
	          column: 22
	        },
	        end: {
	          line: 56,
	          column: 1
	        }
	      },
	      '9': {
	        start: {
	          line: 50,
	          column: 22
	        },
	        end: {
	          line: 50,
	          column: 55
	        }
	      },
	      '10': {
	        start: {
	          line: 53,
	          column: 2
	        },
	        end: {
	          line: 55,
	          column: 3
	        }
	      },
	      '11': {
	        start: {
	          line: 54,
	          column: 4
	        },
	        end: {
	          line: 54,
	          column: 85
	        }
	      },
	      '12': {
	        start: {
	          line: 58,
	          column: 21
	        },
	        end: {
	          line: 74,
	          column: 1
	        }
	      },
	      '13': {
	        start: {
	          line: 59,
	          column: 22
	        },
	        end: {
	          line: 59,
	          column: 79
	        }
	      },
	      '14': {
	        start: {
	          line: 61,
	          column: 24
	        },
	        end: {
	          line: 61,
	          column: 46
	        }
	      },
	      '15': {
	        start: {
	          line: 63,
	          column: 25
	        },
	        end: {
	          line: 63,
	          column: 52
	        }
	      },
	      '16': {
	        start: {
	          line: 65,
	          column: 2
	        },
	        end: {
	          line: 73,
	          column: 3
	        }
	      },
	      '17': {
	        start: {
	          line: 66,
	          column: 16
	        },
	        end: {
	          line: 66,
	          column: 61
	        }
	      },
	      '18': {
	        start: {
	          line: 67,
	          column: 18
	        },
	        end: {
	          line: 67,
	          column: 94
	        }
	      },
	      '19': {
	        start: {
	          line: 69,
	          column: 4
	        },
	        end: {
	          line: 70,
	          column: 25
	        }
	      },
	      '20': {
	        start: {
	          line: 71,
	          column: 4
	        },
	        end: {
	          line: 72,
	          column: 27
	        }
	      },
	      '21': {
	        start: {
	          line: 76,
	          column: 22
	        },
	        end: {
	          line: 78,
	          column: 1
	        }
	      },
	      '22': {
	        start: {
	          line: 77,
	          column: 2
	        },
	        end: {
	          line: 77,
	          column: 32
	        }
	      },
	      '23': {
	        start: {
	          line: 92,
	          column: 15
	        },
	        end: {
	          line: 112,
	          column: 1
	        }
	      },
	      '24': {
	        start: {
	          line: 93,
	          column: 2
	        },
	        end: {
	          line: 95,
	          column: 5
	        }
	      },
	      '25': {
	        start: {
	          line: 94,
	          column: 4
	        },
	        end: {
	          line: 94,
	          column: 65
	        }
	      },
	      '26': {
	        start: {
	          line: 96,
	          column: 2
	        },
	        end: {
	          line: 99,
	          column: 5
	        }
	      },
	      '27': {
	        start: {
	          line: 97,
	          column: 4
	        },
	        end: {
	          line: 97,
	          column: 33
	        }
	      },
	      '28': {
	        start: {
	          line: 98,
	          column: 4
	        },
	        end: {
	          line: 98,
	          column: 32
	        }
	      },
	      '29': {
	        start: {
	          line: 100,
	          column: 18
	        },
	        end: {
	          line: 100,
	          column: 57
	        }
	      },
	      '30': {
	        start: {
	          line: 102,
	          column: 2
	        },
	        end: {
	          line: 111,
	          column: 4
	        }
	      },
	      '31': {
	        start: {
	          line: 105,
	          column: 29
	        },
	        end: {
	          line: 105,
	          column: 53
	        }
	      },
	      '32': {
	        start: {
	          line: 106,
	          column: 20
	        },
	        end: {
	          line: 106,
	          column: 52
	        }
	      },
	      '33': {
	        start: {
	          line: 107,
	          column: 25
	        },
	        end: {
	          line: 107,
	          column: 42
	        }
	      },
	      '34': {
	        start: {
	          line: 108,
	          column: 4
	        },
	        end: {
	          line: 108,
	          column: 80
	        }
	      },
	      '35': {
	        start: {
	          line: 109,
	          column: 4
	        },
	        end: {
	          line: 109,
	          column: 48
	        }
	      },
	      '36': {
	        start: {
	          line: 115,
	          column: 0
	        },
	        end: {
	          line: 115,
	          column: 33
	        }
	      },
	      '37': {
	        start: {
	          line: 118,
	          column: 0
	        },
	        end: {
	          line: 118,
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
	            line: 35,
	            column: 3
	          }
	        },
	        line: 30
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 36,
	            column: 2
	          },
	          end: {
	            line: 36,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 36,
	            column: 16
	          },
	          end: {
	            line: 38,
	            column: 3
	          }
	        },
	        line: 36
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 39,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 39,
	            column: 13
	          },
	          end: {
	            line: 44,
	            column: 3
	          }
	        },
	        line: 39
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 49,
	            column: 22
	          },
	          end: {
	            line: 49,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 49,
	            column: 43
	          },
	          end: {
	            line: 56,
	            column: 1
	          }
	        },
	        line: 49
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 58,
	            column: 21
	          },
	          end: {
	            line: 58,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 58,
	            column: 42
	          },
	          end: {
	            line: 74,
	            column: 1
	          }
	        },
	        line: 58
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
	            line: 78,
	            column: 1
	          }
	        },
	        line: 76
	      },
	      '6': {
	        name: '(anonymous_6)',
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
	            line: 112,
	            column: 1
	          }
	        },
	        line: 92
	      },
	      '7': {
	        name: '(anonymous_7)',
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
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 96,
	            column: 21
	          },
	          end: {
	            line: 96,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 96,
	            column: 33
	          },
	          end: {
	            line: 99,
	            column: 3
	          }
	        },
	        line: 96
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 102,
	            column: 26
	          },
	          end: {
	            line: 102,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 102,
	            column: 38
	          },
	          end: {
	            line: 111,
	            column: 3
	          }
	        },
	        line: 102
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
	      '37': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0
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
	    cov_1qcqhi23by.s[4]++;
	    _this.pose = options.pose;
	    return _this;
	  }

	  var _proto = Divide.prototype;

	  _proto.handleClick = function handleClick() {
	    cov_1qcqhi23by.f[1]++;
	    cov_1qcqhi23by.s[5]++;
	    videojs.log('Divide Clicked: ', String(this.pose));
	  };

	  _proto.createEl = function createEl() {
	    cov_1qcqhi23by.f[2]++;
	    cov_1qcqhi23by.s[6]++;
	    return videojs.dom.createEl('div', {
	      className: 'vjs-test-divide',
	      id: 'divide-' + this.id_
	    });
	  };

	  return Divide;
	}(videojs.getComponent('ClickableComponent'));

	cov_1qcqhi23by.s[7]++;
	videojs.registerComponent('Divide', Divide);
	cov_1qcqhi23by.s[8]++;

	var renderDivides = function renderDivides(player, options) {
	  cov_1qcqhi23by.f[3]++;
	  var progressBar = (cov_1qcqhi23by.s[9]++, player.controlBar.progressControl);
	  cov_1qcqhi23by.s[10]++;

	  for (var i = 0; i < options.divides.length; i++) {
	    cov_1qcqhi23by.s[11]++;
	    progressBar.addChild('Divide', {
	      id: String(i),
	      pose: options.divides[i].pose
	    });
	  }
	};

	cov_1qcqhi23by.s[12]++;

	var styleDivides = function styleDivides(player, options) {
	  cov_1qcqhi23by.f[4]++;
	  var playerWidth = (cov_1qcqhi23by.s[13]++, player.controlBar.progressControl.seekBar.el_.clientWidth);
	  var videoDuration = (cov_1qcqhi23by.s[14]++, player.cache_.duration);
	  var widthPerSecond = (cov_1qcqhi23by.s[15]++, playerWidth / videoDuration);
	  cov_1qcqhi23by.s[16]++;

	  for (var i = 0; i < options.divides.length; i++) {
	    var pos = (cov_1qcqhi23by.s[17]++, options.divides[i].startTime * widthPerSecond);
	    var width = (cov_1qcqhi23by.s[18]++, (options.divides[i].endTime - options.divides[i].startTime) * widthPerSecond);
	    cov_1qcqhi23by.s[19]++;
	    document_1.getElementById('divide-' + String(i)).style.left = String(pos) + 'px';
	    cov_1qcqhi23by.s[20]++;
	    document_1.getElementById('divide-' + String(i)).style.width = String(width) + 'px';
	  }
	};

	cov_1qcqhi23by.s[21]++;

	var onPlayerReady = function onPlayerReady(player, options) {
	  cov_1qcqhi23by.f[5]++;
	  cov_1qcqhi23by.s[22]++;
	  player.addClass('vjs-divide');
	};

	cov_1qcqhi23by.s[23]++;

	var divide = function divide(options) {
	  var _this2 = this;

	  cov_1qcqhi23by.f[6]++;
	  cov_1qcqhi23by.s[24]++;
	  this.ready(function () {
	    cov_1qcqhi23by.f[7]++;
	    cov_1qcqhi23by.s[25]++;
	    onPlayerReady(_this2, videojs.mergeOptions(defaults, options));
	  });
	  cov_1qcqhi23by.s[26]++;
	  this.on('playing', function () {
	    cov_1qcqhi23by.f[8]++;
	    cov_1qcqhi23by.s[27]++;
	    renderDivides(this, options);
	    cov_1qcqhi23by.s[28]++;
	    styleDivides(this, options);
	  });
	  var seekBar = (cov_1qcqhi23by.s[29]++, this.controlBar.progressControl.seekBar);
	  cov_1qcqhi23by.s[30]++;
	  seekBar.on('mousemove', function () {
	    cov_1qcqhi23by.f[9]++;
	    var mouseTimeDisplay = (cov_1qcqhi23by.s[31]++, seekBar.mouseTimeDisplay);
	    var tooltip = (cov_1qcqhi23by.s[32]++, mouseTimeDisplay.timeTooltip.el_);
	    var tooltipValue = (cov_1qcqhi23by.s[33]++, tooltip.innerText);
	    cov_1qcqhi23by.s[34]++;
	    videojs.log('Seek Position: ', parseFloat(mouseTimeDisplay.el_.style.left));
	    cov_1qcqhi23by.s[35]++;
	    videojs.log('Tooltip Value: ', tooltipValue);
	  });
	};

	cov_1qcqhi23by.s[36]++;
	registerPlugin('divide', divide);
	cov_1qcqhi23by.s[37]++;
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
