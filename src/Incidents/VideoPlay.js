const MC = require("@kissmybutton/motorcortex");

class VideoPlay extends MC.API.MediaPlayback {
    play(millisecond) {
        // if (this.element.soundLoaded === false) {
        //     this.setBlock('loading sound');
        //     this.element.pubSub.sub(this.id, () => {
        //         this.unblock();
        //     });
        //     return false;
        // }
        let startFrom = 0;
        if (Object.prototype.hasOwnProperty.call(this.props, 'startFrom')) {
            startFrom = this.props.startFrom;
        }

        const video = this.element.entity.video;
        const ctx = this.element.entity.ctx;

        console.log('setting currentTime to ' + (startFrom + millisecond / 1000));
        video.currentTime = (startFrom + millisecond) / 1000;
        video.play();

        const drawFrame = (video) => {
            ctx.drawImage(video, 0, 0);

            this.timeout = setTimeout(function() {
                drawFrame(video);
            }, 10);
        }
        drawFrame(video);

        return true;
    }

    stop() {
        this.element.entity.video.pause();
        clearTimeout(this.timeout);
    }

    onProgress(f, millisecond) {
        let startFrom = 0;
        if (Object.prototype.hasOwnProperty.call(this.props, 'startFrom')) {
            startFrom = this.props.startFrom;
        }
        this.element.entity.video.currentTime = (startFrom + millisecond) / 1000;
        this.element.entity.ctx.drawImage(this.element.entity.video, 0, 0);
    }
}

module.exports = VideoPlay;
