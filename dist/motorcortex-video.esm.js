import { BrowserClip, MediaPlayback, Effect } from '@donkeyclip/motorcortex';

class VideoClip extends BrowserClip {
  get html() {
    this.width = this.attrs.width || 640;
    this.height = this.attrs.height || 360;
    this.startFrom = this.attrs.startFrom || 0;
    const videoStyle = "width:".concat(this.width, "px;height:").concat(this.height, "px;");
    const videoSources = this.attrs.sources.map(item => "<source src=\"".concat(item, "#t=").concat(this.startFrom, "\"></source>")).join("\n");
    return "\n      <div>\n          <video id=\"video\" style=\"".concat(videoStyle, "\" preload=\"auto\" playsinline>\n              ").concat(videoSources, "\n          </video>\n          <canvas id=\"canvas\"></canvas>\n      </div>\n    ");
  }

  get css() {
    return "\n      #video{\n        display:none;\n      }\n    ";
  }

  setVolume(volume) {
    this.video.volume = volume;
  }

  onAfterRender() {
    const video = this.context.getElements("video")[0];
    this.video = video;
    const canvas = this.context.getElements("canvas")[0];
    const ctx = canvas.getContext("2d");

    const loadedmetadataListener = () => {
      const scaleX = this.width / video.videoWidth;
      const scaleY = this.width / video.videoWidth;
      canvas.style.transform = "scale(".concat(scaleX, ", ").concat(scaleY, ")");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    };

    video.addEventListener("loadedmetadata", loadedmetadataListener, {
      once: true
    });
    this.setCustomEntity("video", {
      video,
      canvas,
      ctx,
      startFrom: this.startFrom
    }); // Audio

    if (this.attrs.audio === false) {
      video.muted = true;
    } else {
      const that = this;
      /*
        The execution of this code occurs moments before the DescriptiveClip of this RealClip actually gets accepted and attached to the Descriptive Tree it tries to enter.
        It occurs on the Descriptive Incident of the Root Clip of the tree it tries to enter.
        We don’t want to move the responsibility of the execution of the actual clips rendering anywhere else for the time being but we prefer keeping it to the Descriptive Clip Root level, as it is right now. For this the setTimeout(funct, 0) ensures that this block of code will be executed RIGHT after the Descriptive Clip gets accepted and attached to the Descriptive Tree. Sorry about that :slightly_smiling_face:
      */

      setTimeout(() => {
        video.crossOrigin = "anonymous";
        const res = that.DescriptiveIncident.volumeChangeSubscribe(that.id, that.setVolume.bind(that));
        that.setVolume(res);
      }, 0);
    }
  }

}

class VideoPlay extends MediaPlayback {
  play() {
    const video = this.element.entity.video;
    video.play();

    if (this.hasSetWaitingListener !== true) {
      video.addEventListener("waiting", this.waitingHandler.bind(this));
      this.hasSetWaitingListener = true;
    }

    if (this.hasSetCanplayListener !== true) {
      video.addEventListener("canplay", this.canplayHandler.bind(this));
      this.hasSetCanplayListener = true;
    }

    this.drawFrame(video);
    return true;
  }

  drawFrame(video) {
    const ctx = this.element.entity.ctx;
    ctx.drawImage(video, 0, 0);
    this.timeout = setTimeout(() => {
      this.drawFrame(video);
    }, 10);
  }

  waitingHandler() {
    this.setBlock("Video loading");
  }

  canplayHandler() {
    this.unblock();
  }

  stop() {
    this.element.entity.video.pause();
    clearTimeout(this.timeout);
  }

  onProgress(millisecond) {
    const startFrom = millisecond + this.element.entity.startFrom;
    this.element.entity.video.currentTime = (startFrom + millisecond) / 1000;
    this.element.entity.ctx.drawImage(this.element.entity.video, 0, 0);
  }

}

var compositeAttributes = {
  filter: ["blur", "brightness", "contrast", "drop-shadow", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"]
};

const effects = compositeAttributes.filter;
const effectsUnits = {
  opacity: "",
  contrast: "",
  saturate: "",
  brightness: "",
  blur: "px",
  sepia: "",
  invert: "",
  grayscale: "",
  "hue-rotate": "deg"
};
class VideoEffect extends Effect {
  getScratchValue() {
    return {
      opacity: 1,
      contrast: 1,
      saturate: 1,
      brightness: 1,
      blur: 0,
      sepia: 0,
      invert: 0,
      grayscale: 0,
      "hue-rotate": 0
    };
  }

  objToFilterValue(obj) {
    let string = "";

    for (const filter in obj) {
      string += "".concat(filter, "(").concat(obj[filter]).concat(effectsUnits[filter], ") ");
    }

    return string;
  }

  onProgress(ms) {
    const fraction = this.getFraction(ms);
    const targetValues = Object.assign({}, this.initialValue);

    for (const i in effects) {
      const effect = effects[i];

      if (this.initialValue[effect] !== this.targetValue[effect]) {
        targetValues[effect] = fraction * (this.targetValue[effect] - this.initialValue[effect]) + this.initialValue[effect];
      }
    }

    this.element.entity.ctx.filter = this.objToFilterValue(targetValues);
  }

}

var name = "@kissmybutton/motorcortex-video";
var version = "2.2.1";
var main = "dist/motorcortex-video.cjs.js";
var module = "dist/motorcortex-video.esm.js";
var browser = "dist/motorcortex-video.umd.js";
var repository = "https://github.com/kissmybutton/motorcortex-video";
var author = "KissMyButton PC (kissmybutton.gr) <opensource@kissmybutton.gr>";
var license = "MIT";
var engines = {
	node: ">=10"
};
var scripts = {
	"update:packages": "npm update --save/--save-dev",
	concurrently: "concurrently -c \"cyan.bold,magenta.bold\" --names \"JS,Styles\"",
	"lint:styles": "stylelint  --allow-empty-input \"src/**.css\" \"src/**/*.scss\" --config .stylelintrc.json",
	"lint:js": "eslint -c .eslintrc src/**/*.js",
	lint: "npm run concurrently \"npm:lint:js\" \"npm:lint:styles\"",
	"lint:fix": "npm run concurrently  \"npm:lint:js -- --fix\" \"npm:lint:styles -- --fix\"",
	build: "npm run build:lib && npm run build:demo",
	"build:lib": "rollup -c",
	start: "npm run build:lib && concurrently -c \"cyan.bold,magenta.bold\" \"npm:build:lib -- -w\"  \"npm:start:demo\" ",
	"start:demo": "webpack serve --config ./demo/webpack.config.js --mode=development --progress ",
	"build:demo": "webpack --mode=production --config ./demo/webpack.config.js",
	"test:prod": "npm run lint",
	"report-coverage": "cat ./coverage/lcov.info | coveralls",
	commit: "git-cz",
	prebuild: "rimraf dist",
	prepare: "husky install"
};
var keywords = [
	"motorcortex",
	"animation"
];
var release = {
	verifyConditions: [
		"@semantic-release/changelog",
		"@semantic-release/npm",
		"@semantic-release/github",
		"@semantic-release/git"
	],
	prepare: [
		"@semantic-release/changelog",
		"@semantic-release/npm",
		"@semantic-release/git"
	]
};
var config = {
	commitizen: {
		path: "cz-conventional-changelog"
	}
};
var devDependencies = {
	"@babel/cli": "7.17.10",
	"@babel/core": "7.17.10",
	"@babel/preset-env": "7.17.10",
	"@donkeyclip/motorcortex": "9.1.5",
	"@donkeyclip/motorcortex-player": "2.9.7",
	"@rollup/plugin-json": "4.1.0",
	"babel-eslint": "10.1.0",
	"babel-loader": "8.2.5",
	browserslist: "4.20.3",
	"caniuse-lite": "1.0.30001338",
	concurrently: "7.1.0",
	coveralls: "3.1.1",
	"css-loader": "6.7.1",
	"es6-promise": "4.2.8",
	eslint: "8.15.0",
	"eslint-config-prettier": "8.5.0",
	"eslint-plugin-babel": "5.3.1",
	"eslint-plugin-import": "2.26.0",
	"eslint-plugin-node": "11.1.0",
	"eslint-plugin-prettier": "4.0.0",
	"eslint-plugin-standard": "5.0.0",
	"exports-loader": "3.1.0",
	husky: "7.0.4",
	"imports-loader": "3.1.1",
	"json-stringify-safe": "5.0.1",
	"lint-staged": "12.4.1",
	npx: "10.2.2",
	prettier: "2.6.2",
	rimraf: "3.0.2",
	rollup: "2.72.1",
	"rollup-plugin-babel": "4.4.0",
	"rollup-plugin-commonjs": "10.1.0",
	"rollup-plugin-node-resolve": "5.2.0",
	"rollup-plugin-terser": "7.0.2",
	shelljs: "0.8.5",
	webpack: "5.72.0",
	"webpack-cli": "4.9.2",
	"webpack-dev-server": "4.9.0",
	"whatwg-fetch": "3.6.2"
};
var peerDependencies = {
	"@donkeyclip/motorcortex": ">=8 <10"
};
var pkg = {
	name: name,
	version: version,
	main: main,
	module: module,
	browser: browser,
	repository: repository,
	author: author,
	license: license,
	engines: engines,
	scripts: scripts,
	keywords: keywords,
	"lint-staged": {
	"*.{json,md,yml,yaml}": [
		"prettier --write"
	],
	"*.css": [
		"prettier --write",
		"stylelint  \"src/**.css\" --config .stylelintrc.json --fix"
	],
	"*.{js,jsx}": [
		"prettier --write",
		"eslint --fix"
	]
},
	release: release,
	config: config,
	devDependencies: devDependencies,
	peerDependencies: peerDependencies
};

var index = {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [{
    exportable: VideoPlay,
    name: "Playback"
  }, {
    exportable: VideoEffect,
    name: "VideoEffect",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          filter: {
            type: "object",
            props: {
              blur: {
                type: "number",
                min: 0,
                optional: true
              },
              brightness: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              },
              contrast: {
                type: "number",
                min: 0,
                optional: true
              },
              grayscale: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              },
              "hue-rotate": {
                type: "number",
                optional: true
              },
              invert: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              },
              opacity: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              },
              saturate: {
                type: "number",
                min: 0,
                optional: true
              },
              sepia: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              }
            }
          }
        }
      }
    }
  }],
  compositeAttributes,
  Clip: {
    exportable: VideoClip,
    attributesValidationRules: {
      sources: {
        optional: false,
        type: "array",
        min: 1,
        items: {
          type: "string"
        }
      },
      width: {
        optional: true,
        type: "number",
        integer: true,
        positive: true
      },
      height: {
        optional: true,
        type: "number",
        integer: true,
        positive: true
      },
      startFrom: {
        optional: true,
        type: "number",
        integer: true,
        min: 0
      },
      audio: {
        optional: true,
        type: "boolean",
        default: true
      }
    }
  },
  capabilities: {
    speed: false,
    preview: false
  },
  audio: "on"
};

export { index as default };
