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

var MC = require('@kissmybutton/motorcortex');

var VideoClip =
/*#__PURE__*/
function (_MC$API$DOMClip) {
  _inherits(VideoClip, _MC$API$DOMClip);

  function VideoClip() {
    _classCallCheck(this, VideoClip);

    return _possibleConstructorReturn(this, _getPrototypeOf(VideoClip).apply(this, arguments));
  }

  _createClass(VideoClip, [{
    key: "onAfterRender",
    value: function onAfterRender() {
      var _this = this;

      var video = this.context.getElements("video")[0];
      video.muted = true;
      var canvas = this.context.getElements("canvas")[0];
      var ctx = canvas.getContext('2d');
      video.addEventListener("loadedmetadata", function (e) {
        var canvasWidth = _this.attrs.width || 640;
        var canvasHeight = _this.attrs.height || 360; // console.log(canvasWidth / video.videoWidth, canvasHeight / video.videoHeight)

        canvas.style.transform = "scale(".concat(canvasWidth / video.videoWidth, ", ").concat(canvasHeight / video.videoHeight, ")");
        canvas.style['transform-origin'] = "top left";
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }, false);
      this.setCustomEntity("video", {
        video: video,
        canvas: canvas,
        ctx: ctx,
        startFrom: this.attrs.startFrom * 1000 || 0
      });
    }
  }, {
    key: "html",
    get: function get() {
      var _this2 = this;

      return "\n        <div>\n            <video id=\"video\" style=\"width:".concat(this.attrs.width || 640, "px;height:").concat(this.attrs.height || 360, "px;\" preload=\"auto\">\n                ").concat(this.attrs.sources.map(function (item, i) {
        return "\n                    <source src=\"".concat(item, "#t=").concat(_this2.attrs.startFrom || 0, "\"></source>\n                ");
      }).join(''), "\n            </video>\n            <canvas id=\"canvas\"></canvas>\n        </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n            #video{\n                display:none;\n            }\n        ";
    }
  }]);

  return VideoClip;
}(MC.API.DOMClip);

module.exports = VideoClip;
//# sourceMappingURL=VideoClip.js.map