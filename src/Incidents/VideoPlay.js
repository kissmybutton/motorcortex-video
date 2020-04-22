const MC = require("@kissmybutton/motorcortex");

class VideoPlay extends MC.API.MediaPlayback {
  play(/*millisecond*/) {
    const video = this.element.entity.video;
    const ctx = this.element.entity.ctx;

    // const playPromise = video.play();
    video.play();
    if (this.hasSetWaitingListener !== true) {
      video.addEventListener("waiting", this._waitingHandler.bind(this));
      this.hasSetWaitingListener = true;
    }
    if (this.hasSetCanplayListener !== true) {
      video.addEventListener("canplay", this._canplayHandler.bind(this));
      this.hasSetCanplayListener = true;
    }

    const drawFrame = (video) => {
      ctx.drawImage(video, 0, 0);

      this.timeout = setTimeout(function () {
        drawFrame(video);
      }, 10);
    };
    drawFrame(video);

    return true;
  }

  _waitingHandler() {
    // console.log("waiting");
    // console.log("and blocking");
    this.setBlock("Video loading");
  }

  _canplayHandler() {
    // console.log("unblocking");
    this.unblock();
  }

  stop() {
    this.element.entity.video.pause();
    clearTimeout(this.timeout);
  }

  onProgress(f, millisecond) {
    const startFrom = millisecond + this.element.entity.startFrom;
    this.element.entity.video.currentTime = (startFrom + millisecond) / 1000;
    this.element.entity.ctx.drawImage(this.element.entity.video, 0, 0);
  }
}

module.exports = VideoPlay;
