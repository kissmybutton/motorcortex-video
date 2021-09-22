import { BrowserClip } from "@kissmybutton/motorcortex";
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

  onAfterRender() {
    const video = this.context.getElements("video")[0];
    video.muted = true;
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
    if (this.DescriptiveIncident.attachMediaElementSource) {
      video.crossOrigin = "anonymous";
      this.DescriptiveIncident.attachMediaElementSource(video);
    }
  }
}
