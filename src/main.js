const VideoClip = require('./VideoClip');
const VideoPlay = require('./Incidents/VideoPlay');

module.exports = {
    npm_name: "@kissmybutton/motorcortex-video",
    incidents: [
        {
            exportable: VideoPlay,
            name: "Playback"
        }
    ],
    Clip: VideoClip
}