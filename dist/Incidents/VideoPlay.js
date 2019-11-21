"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MC = require("@kissmybutton/motorcortex");

var VideoPlay =
/*#__PURE__*/
function (_MC$API$MediaPlayback) {
  _inherits(VideoPlay, _MC$API$MediaPlayback);

  function VideoPlay() {
    _classCallCheck(this, VideoPlay);

    return _possibleConstructorReturn(this, _getPrototypeOf(VideoPlay).apply(this, arguments));
  }

  _createClass(VideoPlay, [{
    key: "play",
    value: function play(millisecond) {
      var _this = this;

      var video = this.element.entity.video;
      var ctx = this.element.entity.ctx;
      var playPromise = video.play();

      if (this.hasSetWaitingListener !== true) {
        video.addEventListener('waiting', this._waitingHandler.bind(this));
        this.hasSetWaitingListener = true;
      }

      if (this.hasSetCanplayListener !== true) {
        video.addEventListener('canplay', this._canplayHandler.bind(this));
        this.hasSetCanplayListener = true;
      }

      var drawFrame = function drawFrame(video) {
        ctx.drawImage(video, 0, 0);
        _this.timeout = setTimeout(function () {
          drawFrame(video);
        }, 10);
      };

      drawFrame(video);
      return true;
    }
  }, {
    key: "_waitingHandler",
    value: function _waitingHandler() {
      console.log('waiting');
      console.log('and blocking');
      this.setBlock('Video loading');
    }
  }, {
    key: "_canplayHandler",
    value: function _canplayHandler() {
      console.log('unblocking');
      this.unblock();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.element.entity.video.pause();
      clearTimeout(this.timeout);
    }
  }, {
    key: "onProgress",
    value: function onProgress(f, millisecond) {
      var startFrom = millisecond + this.element.entity.startFrom;
      this.element.entity.video.currentTime = (startFrom + millisecond) / 1000;
      this.element.entity.ctx.drawImage(this.element.entity.video, 0, 0);
    }
  }]);

  return VideoPlay;
}(MC.API.MediaPlayback);

module.exports = VideoPlay;
//# sourceMappingURL=VideoPlay.js.map