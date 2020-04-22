const MC = require("@kissmybutton/motorcortex");

class VideoClip extends MC.API.DOMClip {
  get html() {
    return `
        <div style="display:flex;align-items:center;justify-content:center;">
            <video id="video" style="width:${
              this.attrs.width || "640px"
            };height:${this.attrs.height || "360px"};" preload="auto">
                ${this.attrs.sources
                  .map(
                    (item /*, i*/) => `
                    <source src="${item}#t=${
                      this.attrs.startFrom || 0
                    }"></source>
                `
                  )
                  .join("")}
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
    if (this.attrs.muted !== undefined) {
      video.muted = this.attrs.muted;
    }
    const canvas = this.context.getElements("canvas")[0];
    const ctx = canvas.getContext("2d");

    video.addEventListener(
      "loadedmetadata",
      () => {
        const canvasWidth = parseFloat(this.attrs.width) || 640;
        const canvasHeight = parseFloat(this.attrs.height) || 360;
        canvas.style.transform = `scale(${canvasWidth / video.videoWidth}, ${
          canvasHeight / video.videoHeight
        })`;
        // canvas.style['transform-origin'] = "top left";
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      },
      false
    );

    this.setCustomEntity("video", {
      video,
      canvas,
      ctx,
      startFrom: this.attrs.startFrom * 1000 || 0,
    });
  }
}

module.exports = VideoClip;
