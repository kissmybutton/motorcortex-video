const MC = require("@kissmybutton/motorcortex");

class VideoClip extends MC.BrowserClip {
  get html() {
    return `
        <div>
            <video id="video" style="width:${
              this.attrs.width || 640
            }px;height:${this.attrs.height || 360}px;" preload="auto">
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
    const canvas = this.context.getElements("canvas")[0];
    const ctx = canvas.getContext("2d");

    video.addEventListener(
      "loadedmetadata",
      () => {
        const canvasWidth = this.attrs.width || 640;
        const canvasHeight = this.attrs.height || 360;
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
