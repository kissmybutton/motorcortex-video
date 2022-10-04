import { BrowserClip, MediaPlayback } from '@donkeyclip/motorcortex';

class VideoClip extends BrowserClip {
  get html() {
    this.width = this.attrs.width || 640;
    this.height = this.attrs.height || 360;
    this.startFrom = this.attrs.startFrom || 0;
    const videoStyle = `width:${this.width}px;height:${this.height}px;`;
    const videoSources = this.attrs.sources.map(item => `<source src="${item}#t=${this.startFrom}"></source>`).join("\n");
    return `
      <div>
        <video id="video" style="${videoStyle}" preload="metadata" ${this.attrs.audio !== true ? "muted" : ""} playsinline>
          ${videoSources}
        </video>
      </div>
    `;
  }

  get css() {
    return ``;
  }

  setVolume(volume) {
    this.video.volume = volume;
  }

  onAfterRender() {
    const video = this.context.getElements("video")[0];
    this.video = video;
    this.setCustomEntity("video", {
      video,
      startFrom: this.startFrom
    }); // Audio

    if (this.attrs.audio !== true) {
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
    const video = this.element.entity.video; // If the video is ready to play we don't need to block again

    if (video.readyState < 3) {
      this.waitingHandler();
    }

    this.playPromise = video.play();

    if (this.hasSetWaitingListener !== true) {
      video.addEventListener("waiting", this.waitingHandler.bind(this));
      this.hasSetWaitingListener = true;
    }

    if (this.hasSetCanplayListener !== true) {
      video.addEventListener("canplay", this.canplayHandler.bind(this));
      video.addEventListener('canplaythrough', this.canplayHandler.bind(this));
      video.addEventListener('playing', this.canplayHandler.bind(this));
      video.addEventListener('ready', this.canplayHandler.bind(this));
      this.hasSetCanplayListener = true;
    }

    return true;
  }

  waitingHandler() {
    this.setBlock("Video loading");
  }

  canplayHandler() {
    setTimeout(() => this.unblock());
  }

  stop() {
    if (this.playPromise) {
      this.playPromise.then(() => {
        this.element.entity.video.pause();
      });
    }
  }

  onProgress(millisecond) {
    this.unblock();
    const startFrom = millisecond + this.element.entity.startFrom;
    this.element.entity.video.currentTime = (startFrom + millisecond) / 1000;
  }

}

var name = "@kissmybutton/motorcortex-video";
var version = "2.2.2";
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
	lint: "eslint -c .eslintrc src/**/*.js",
	"lint:fix": "npm:lint -- --fix",
	build: "npm run build:lib && npm run build:demo",
	"build:lib": "rollup -c",
	start: "npm run build:lib && concurrently -c \"cyan.bold,magenta.bold\" \"npm:build:lib -- -w\"  \"npm:start:demo\" ",
	"start:demo": "webpack serve --config ./demo/webpack.config.js --mode=development --progress ",
	"build:demo": "webpack --mode=production --config ./demo/webpack.config.js",
	"test:prod": "npm run lint",
	"report-coverage": "cat ./coverage/lcov.info | coveralls",
	prebuild: "rimraf dist",
	prepare: "husky install"
};
var keywords = [
	"motorcortex",
	"video",
	"motorcortex-plugin"
];
var devDependencies = {
	"@babel/cli": "7.19.3",
	"@babel/core": "7.19.3",
	"@babel/preset-env": "7.19.3",
	"@donkeyclip/motorcortex": "9.4.1",
	"@donkeyclip/motorcortex-player": "2.10.5",
	"@rollup/plugin-json": "4.1.0",
	"babel-eslint": "10.1.0",
	"babel-loader": "8.2.5",
	browserslist: "4.21.4",
	"caniuse-lite": "1.0.30001415",
	concurrently: "7.4.0",
	coveralls: "3.1.1",
	"css-loader": "6.7.1",
	"es6-promise": "4.2.8",
	eslint: "8.24.0",
	"eslint-config-prettier": "8.5.0",
	"eslint-plugin-babel": "5.3.1",
	"eslint-plugin-import": "2.26.0",
	"eslint-plugin-node": "11.1.0",
	"eslint-plugin-prettier": "4.2.1",
	"eslint-plugin-standard": "5.0.0",
	"exports-loader": "4.0.0",
	husky: "8.0.1",
	"imports-loader": "4.0.1",
	"json-stringify-safe": "5.0.1",
	"lint-staged": "13.0.3",
	npx: "10.2.2",
	prettier: "2.7.1",
	rimraf: "3.0.2",
	rollup: "2.79.1",
	"rollup-plugin-babel": "4.4.0",
	"rollup-plugin-commonjs": "10.1.0",
	"rollup-plugin-node-resolve": "5.2.0",
	"rollup-plugin-terser": "7.0.2",
	shelljs: "0.8.5",
	webpack: "5.74.0",
	"webpack-cli": "4.10.0",
	"webpack-dev-server": "4.11.1",
	"whatwg-fetch": "3.6.2"
};
var peerDependencies = {
	"@donkeyclip/motorcortex": "^9.1.5"
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
	"*.{json,md,yml,yaml,css}": [
		"prettier --write"
	],
	"*.{js,jsx}": [
		"prettier --write",
		"eslint --fix"
	]
},
	devDependencies: devDependencies,
	peerDependencies: peerDependencies
};

var index = {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [{
    exportable: VideoPlay,
    name: "Playback"
  }],
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
