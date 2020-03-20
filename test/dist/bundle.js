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
	      hash = 'c9eb2f9218c780cab11fce2497fca11068cda86b',
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
	          line: 10,
	          column: 23
	        },
	        end: {
	          line: 10,
	          column: 63
	        }
	      },
	      '2': {
	        start: {
	          line: 13,
	          column: 21
	        },
	        end: {
	          line: 17,
	          column: 1
	        }
	      },
	      '3': {
	        start: {
	          line: 14,
	          column: 16
	        },
	        end: {
	          line: 14,
	          column: 30
	        }
	      },
	      '4': {
	        start: {
	          line: 16,
	          column: 2
	        },
	        end: {
	          line: 16,
	          column: 40
	        }
	      },
	      '5': {
	        start: {
	          line: 22,
	          column: 4
	        },
	        end: {
	          line: 22,
	          column: 27
	        }
	      },
	      '6': {
	        start: {
	          line: 24,
	          column: 4
	        },
	        end: {
	          line: 24,
	          column: 25
	        }
	      },
	      '7': {
	        start: {
	          line: 25,
	          column: 4
	        },
	        end: {
	          line: 25,
	          column: 29
	        }
	      },
	      '8': {
	        start: {
	          line: 28,
	          column: 4
	        },
	        end: {
	          line: 28,
	          column: 47
	        }
	      },
	      '9': {
	        start: {
	          line: 31,
	          column: 4
	        },
	        end: {
	          line: 34,
	          column: 7
	        }
	      },
	      '10': {
	        start: {
	          line: 38,
	          column: 0
	        },
	        end: {
	          line: 38,
	          column: 44
	        }
	      },
	      '11': {
	        start: {
	          line: 40,
	          column: 22
	        },
	        end: {
	          line: 47,
	          column: 1
	        }
	      },
	      '12': {
	        start: {
	          line: 41,
	          column: 22
	        },
	        end: {
	          line: 41,
	          column: 55
	        }
	      },
	      '13': {
	        start: {
	          line: 44,
	          column: 2
	        },
	        end: {
	          line: 46,
	          column: 3
	        }
	      },
	      '14': {
	        start: {
	          line: 45,
	          column: 4
	        },
	        end: {
	          line: 45,
	          column: 85
	        }
	      },
	      '15': {
	        start: {
	          line: 49,
	          column: 21
	        },
	        end: {
	          line: 65,
	          column: 1
	        }
	      },
	      '16': {
	        start: {
	          line: 50,
	          column: 22
	        },
	        end: {
	          line: 50,
	          column: 79
	        }
	      },
	      '17': {
	        start: {
	          line: 52,
	          column: 24
	        },
	        end: {
	          line: 52,
	          column: 46
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
	          line: 64,
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
	          column: 94
	        }
	      },
	      '22': {
	        start: {
	          line: 60,
	          column: 4
	        },
	        end: {
	          line: 61,
	          column: 25
	        }
	      },
	      '23': {
	        start: {
	          line: 62,
	          column: 4
	        },
	        end: {
	          line: 63,
	          column: 27
	        }
	      },
	      '24': {
	        start: {
	          line: 67,
	          column: 22
	        },
	        end: {
	          line: 69,
	          column: 1
	        }
	      },
	      '25': {
	        start: {
	          line: 68,
	          column: 2
	        },
	        end: {
	          line: 68,
	          column: 32
	        }
	      },
	      '26': {
	        start: {
	          line: 71,
	          column: 15
	        },
	        end: {
	          line: 97,
	          column: 1
	        }
	      },
	      '27': {
	        start: {
	          line: 72,
	          column: 2
	        },
	        end: {
	          line: 74,
	          column: 5
	        }
	      },
	      '28': {
	        start: {
	          line: 73,
	          column: 4
	        },
	        end: {
	          line: 73,
	          column: 65
	        }
	      },
	      '29': {
	        start: {
	          line: 76,
	          column: 2
	        },
	        end: {
	          line: 79,
	          column: 5
	        }
	      },
	      '30': {
	        start: {
	          line: 77,
	          column: 4
	        },
	        end: {
	          line: 77,
	          column: 33
	        }
	      },
	      '31': {
	        start: {
	          line: 78,
	          column: 4
	        },
	        end: {
	          line: 78,
	          column: 32
	        }
	      },
	      '32': {
	        start: {
	          line: 81,
	          column: 19
	        },
	        end: {
	          line: 81,
	          column: 50
	        }
	      },
	      '33': {
	        start: {
	          line: 83,
	          column: 2
	        },
	        end: {
	          line: 96,
	          column: 5
	        }
	      },
	      '34': {
	        start: {
	          line: 84,
	          column: 16
	        },
	        end: {
	          line: 84,
	          column: 27
	        }
	      },
	      '35': {
	        start: {
	          line: 85,
	          column: 20
	        },
	        end: {
	          line: 85,
	          column: 36
	        }
	      },
	      '36': {
	        start: {
	          line: 86,
	          column: 29
	        },
	        end: {
	          line: 86,
	          column: 53
	        }
	      },
	      '37': {
	        start: {
	          line: 87,
	          column: 20
	        },
	        end: {
	          line: 87,
	          column: 52
	        }
	      },
	      '38': {
	        start: {
	          line: 88,
	          column: 19
	        },
	        end: {
	          line: 88,
	          column: 36
	        }
	      },
	      '39': {
	        start: {
	          line: 91,
	          column: 4
	        },
	        end: {
	          line: 95,
	          column: 5
	        }
	      },
	      '40': {
	        start: {
	          line: 92,
	          column: 6
	        },
	        end: {
	          line: 94,
	          column: 7
	        }
	      },
	      '41': {
	        start: {
	          line: 93,
	          column: 8
	        },
	        end: {
	          line: 93,
	          column: 60
	        }
	      },
	      '42': {
	        start: {
	          line: 100,
	          column: 0
	        },
	        end: {
	          line: 100,
	          column: 33
	        }
	      },
	      '43': {
	        start: {
	          line: 103,
	          column: 0
	        },
	        end: {
	          line: 103,
	          column: 25
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 13,
	            column: 21
	          },
	          end: {
	            line: 13,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 13,
	            column: 30
	          },
	          end: {
	            line: 17,
	            column: 1
	          }
	        },
	        line: 13
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 21,
	            column: 2
	          },
	          end: {
	            line: 21,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 21,
	            column: 31
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        },
	        line: 21
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 27,
	            column: 2
	          },
	          end: {
	            line: 27,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 27,
	            column: 16
	          },
	          end: {
	            line: 29,
	            column: 3
	          }
	        },
	        line: 27
	      },
	      '3': {
	        name: '(anonymous_3)',
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
	            column: 13
	          },
	          end: {
	            line: 35,
	            column: 3
	          }
	        },
	        line: 30
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 40,
	            column: 22
	          },
	          end: {
	            line: 40,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 40,
	            column: 43
	          },
	          end: {
	            line: 47,
	            column: 1
	          }
	        },
	        line: 40
	      },
	      '5': {
	        name: '(anonymous_5)',
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
	            line: 65,
	            column: 1
	          }
	        },
	        line: 49
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 67,
	            column: 22
	          },
	          end: {
	            line: 67,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 67,
	            column: 34
	          },
	          end: {
	            line: 69,
	            column: 1
	          }
	        },
	        line: 67
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 71,
	            column: 15
	          },
	          end: {
	            line: 71,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 71,
	            column: 33
	          },
	          end: {
	            line: 97,
	            column: 1
	          }
	        },
	        line: 71
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 72,
	            column: 13
	          },
	          end: {
	            line: 72,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 72,
	            column: 19
	          },
	          end: {
	            line: 74,
	            column: 3
	          }
	        },
	        line: 72
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 76,
	            column: 21
	          },
	          end: {
	            line: 76,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 76,
	            column: 32
	          },
	          end: {
	            line: 79,
	            column: 3
	          }
	        },
	        line: 76
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 83,
	            column: 27
	          },
	          end: {
	            line: 83,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 83,
	            column: 38
	          },
	          end: {
	            line: 96,
	            column: 3
	          }
	        },
	        line: 83
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 10,
	            column: 23
	          },
	          end: {
	            line: 10,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 10,
	            column: 23
	          },
	          end: {
	            line: 10,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 10,
	            column: 49
	          },
	          end: {
	            line: 10,
	            column: 63
	          }
	        }],
	        line: 10
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 92,
	            column: 6
	          },
	          end: {
	            line: 94,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 92,
	            column: 6
	          },
	          end: {
	            line: 94,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 92,
	            column: 6
	          },
	          end: {
	            line: 94,
	            column: 7
	          }
	        }],
	        line: 92
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 92,
	            column: 10
	          },
	          end: {
	            line: 92,
	            column: 116
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 92,
	            column: 10
	          },
	          end: {
	            line: 92,
	            column: 62
	          }
	        }, {
	          start: {
	            line: 92,
	            column: 66
	          },
	          end: {
	            line: 92,
	            column: 116
	          }
	        }],
	        line: 92
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
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0
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
	      '9': 0,
	      '10': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0]
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
	cov_1qcqhi23by.s[2]++;

	var convertToInt = function convertToInt(hms) {
	  cov_1qcqhi23by.f[0]++;
	  var split = (cov_1qcqhi23by.s[3]++, hms.split(':'));
	  cov_1qcqhi23by.s[4]++;
	  return +split[0] * 60 + +split[1];
	};

	var Divide =
	/*#__PURE__*/
	function (_videojs$getComponent) {
	  _inheritsLoose(Divide, _videojs$getComponent);

	  function Divide(player, options) {
	    var _this;

	    cov_1qcqhi23by.f[1]++;
	    cov_1qcqhi23by.s[5]++;
	    _this = _videojs$getComponent.call(this, player, options) || this;
	    cov_1qcqhi23by.s[6]++;
	    _this.id = options.id;
	    cov_1qcqhi23by.s[7]++;
	    _this.pose = options.pose;
	    return _this;
	  }

	  var _proto = Divide.prototype;

	  _proto.handleClick = function handleClick() {
	    cov_1qcqhi23by.f[2]++;
	    cov_1qcqhi23by.s[8]++;
	    videojs.log('Divide Clicked: ', this.pose);
	  };

	  _proto.createEl = function createEl() {
	    cov_1qcqhi23by.f[3]++;
	    cov_1qcqhi23by.s[9]++;
	    return videojs.dom.createEl('div', {
	      className: 'vjs-test-divide',
	      id: 'divide-' + this.id_
	    });
	  };

	  return Divide;
	}(videojs.getComponent('ClickableComponent'));

	cov_1qcqhi23by.s[10]++;
	videojs.registerComponent('Divide', Divide);
	cov_1qcqhi23by.s[11]++;

	var renderDivides = function renderDivides(player, options) {
	  cov_1qcqhi23by.f[4]++;
	  var progressBar = (cov_1qcqhi23by.s[12]++, player.controlBar.progressControl);
	  cov_1qcqhi23by.s[13]++;

	  for (var i = 0; i < options.divides.length; i++) {
	    cov_1qcqhi23by.s[14]++;
	    progressBar.addChild('Divide', {
	      id: String(i),
	      pose: options.divides[i].pose
	    });
	  }
	};

	cov_1qcqhi23by.s[15]++;

	var styleDivides = function styleDivides(player, options) {
	  cov_1qcqhi23by.f[5]++;
	  var playerWidth = (cov_1qcqhi23by.s[16]++, player.controlBar.progressControl.seekBar.el_.clientWidth);
	  var videoDuration = (cov_1qcqhi23by.s[17]++, player.cache_.duration);
	  var widthPerSecond = (cov_1qcqhi23by.s[18]++, playerWidth / videoDuration);
	  cov_1qcqhi23by.s[19]++;

	  for (var i = 0; i < options.divides.length; i++) {
	    var pos = (cov_1qcqhi23by.s[20]++, options.divides[i].startTime * widthPerSecond);
	    var width = (cov_1qcqhi23by.s[21]++, (options.divides[i].endTime - options.divides[i].startTime) * widthPerSecond);
	    cov_1qcqhi23by.s[22]++;
	    document_1.getElementById('divide-' + String(i)).style.left = String(pos) + 'px';
	    cov_1qcqhi23by.s[23]++;
	    document_1.getElementById('divide-' + String(i)).style.width = String(width) + 'px';
	  }
	};

	cov_1qcqhi23by.s[24]++;

	var onPlayerReady = function onPlayerReady(player) {
	  cov_1qcqhi23by.f[6]++;
	  cov_1qcqhi23by.s[25]++;
	  player.addClass('vjs-divide');
	};

	cov_1qcqhi23by.s[26]++;

	var divide = function divide(options) {
	  var _this2 = this;

	  cov_1qcqhi23by.f[7]++;
	  cov_1qcqhi23by.s[27]++;
	  this.ready(function () {
	    cov_1qcqhi23by.f[8]++;
	    cov_1qcqhi23by.s[28]++;
	    onPlayerReady(_this2, videojs.mergeOptions(defaults, options));
	  });
	  cov_1qcqhi23by.s[29]++;
	  this.on('playing', function () {
	    cov_1qcqhi23by.f[9]++;
	    cov_1qcqhi23by.s[30]++;
	    renderDivides(this, options);
	    cov_1qcqhi23by.s[31]++;
	    styleDivides(this, options);
	  });
	  var progress = (cov_1qcqhi23by.s[32]++, this.controlBar.progressControl);
	  cov_1qcqhi23by.s[33]++;
	  progress.on('mousemove', function () {
	    cov_1qcqhi23by.f[10]++;
	    var dom = (cov_1qcqhi23by.s[34]++, videojs.dom);
	    var seekBar = (cov_1qcqhi23by.s[35]++, progress.seekBar);
	    var mouseTimeDisplay = (cov_1qcqhi23by.s[36]++, seekBar.mouseTimeDisplay);
	    var toolTip = (cov_1qcqhi23by.s[37]++, mouseTimeDisplay.timeTooltip.el_);
	    var ttTime = (cov_1qcqhi23by.s[38]++, toolTip.innerText);
	    cov_1qcqhi23by.s[39]++;

	    for (var i = 0; i < options.divides.length; i++) {
	      cov_1qcqhi23by.s[40]++;

	      if ((cov_1qcqhi23by.b[2][0]++, convertToInt(ttTime) >= options.divides[i].startTime) && (cov_1qcqhi23by.b[2][1]++, convertToInt(ttTime) <= options.divides[i].endTime)) {
	        cov_1qcqhi23by.b[1][0]++;
	        cov_1qcqhi23by.s[41]++;
	        dom.insertContent(toolTip, options.divides[i].pose);
	      } else {
	        cov_1qcqhi23by.b[1][1]++;
	      }
	    }
	  });
	};

	cov_1qcqhi23by.s[42]++;
	registerPlugin('divide', divide);
	cov_1qcqhi23by.s[43]++;
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
