const VideoClip = require('./VideoClip');
const VideoPlay = require('./Incidents/VideoPlay');
const VideoEffect = require('./Incidents/Effect');
const compositeAttributes = require('./compositeAttributes');

module.exports = {
    npm_name: "@kissmybutton/motorcortex-video",
    incidents: [{
        exportable: VideoPlay,
        name: "Playback"
    }, {
        exportable: VideoEffect,
        name: "VideoEffect"
    }],
    compositeAttributes,
    Clip: VideoClip,
    capabilities: {
        speed: false
    }
}
