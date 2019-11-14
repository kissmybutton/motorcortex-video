const MotorCortex = require("@kissmybutton/motorcortex");
const Player = require("@kissmybutton/motorcortex-player");
const VideoPluginDefinition = require("../src/main");
const VideoPlugin = MotorCortex.loadPlugin(VideoPluginDefinition);

const VideoClip = new VideoPlugin.Clip({
    host: document.getElementById("video-container"),
    id: 'videoClip'
});

const Playback1 = new VideoPlugin.Playback({}, {
    selector: "!#video",
    startFrom: 250000,
    duration: 5000
});

VideoClip.addIncident(Playback1, 500);

new Player({clip: VideoClip});