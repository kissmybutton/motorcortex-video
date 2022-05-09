import { MediaPlayback } from "@donkeyclip/motorcortex";

export default class VideoPlay extends MediaPlayback {
  play(/*millisecond*/) {
    const video = this.element.entity.video;

    // If the video is ready to play we don't need to block again
    if(video.readyState < 3){
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
    setTimeout(()=>this.unblock());
  }

  stop() {
    if(this.playPromise) {
      this.playPromise.then(()=>{
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
