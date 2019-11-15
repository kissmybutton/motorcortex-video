const MC = require('@kissmybutton/motorcortex');

class VideoClip extends MC.API.DOMClip {
    get html() {
        return `
        <div>
            <video id="video" style="width:640px;height:360px;">
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></source>
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
        const ctx = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 600;

        this.setCustomEntity("video", {
            video,
            canvas,
            ctx
        });
    }
}

module.exports = VideoClip;
//# sourceMappingURL=VideoClip.js.map