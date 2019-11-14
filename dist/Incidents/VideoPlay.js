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

        video.currentTime = startFrom / 1000;
        video.play();

        return true;
    }

    stop() {
        this.element.entity.video.pause();
    }
}

module.exports = VideoPlay;
//# sourceMappingURL=VideoPlay.js.map