import { BrowserClip } from "@donkeyclip/motorcortex";
export default class VideoClip extends BrowserClip {
  get html() {
    this.width = this.attrs.width || 640;
    this.height = this.attrs.height || 360;
    this.startFrom = this.attrs.startFrom || 0;

    const videoStyle = `width:${this.width}px;height:${this.height}px;`;
    const videoSources = this.attrs.sources
      .map((item) => `<source src="${item}#t=${this.startFrom}"></source>`)
      .join("\n");

    return `
      <div>
          <video id="video" style="${videoStyle}" preload="auto">
              ${videoSources}
          </video>
          <canvas id="canvas"></canvas>
      </div>
    `;
  }

  get css() {
    return `
      #video{
        display:none;
      }
    `;
  }

  setVolume(volume) {
    // debugger
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
      canvas.style.transform = `scale(${scaleX}, ${scaleY})`;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    };

    video.addEventListener("loadedmetadata", loadedmetadataListener, {
      once: true,
    });

    this.setCustomEntity("video", {
      video,
      canvas,
      ctx,
      startFrom: this.startFrom,
    });
    // Audio
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
        const res = that.DescriptiveIncident.volumeChangeSubscribe(
          that.id + Math.random(),
          that.setVolume.bind(that)
        );
        that.setVolume(res);
      }, 0);
    }
  }
}
