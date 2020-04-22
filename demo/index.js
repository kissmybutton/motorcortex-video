import Player from "@kissmybutton/motorcortex-player";
import MotorCortex from "@kissmybutton/motorcortex";
import MCVideo from "../dist/motorcortex-video.umd";
const VideoPlugin = MotorCortex.loadPlugin(MCVideo);

const host = document.getElementById("clip");
const clip = new MotorCortex.Clip({
  css:"#video{width:100%;height:100%;position:relative;}",
  html:"<div id='video'></div>",
  host,
  containerParams:{width:"100%",height:"100%"},
});
const VideoClip = new VideoPlugin.Clip({
    sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    ],
    width: "640px",
    height: "360px",
    muted:false,
    startFrom: 0
}, {
    selector:"#video" // or host: your-host
});

const Playback = new VideoPlugin.Playback({
    selector: "!#video", // that's mandatory, it should always have the value "!#video" and it targets the video of the VideoPlugin.Clip 
    duration: 325000 // the duration of the playback in milliseconds
});

VideoClip.addIncident(Playback, 0);
clip.addIncident(VideoClip,0);
new Player({
  clip: clip,
  theme: "mc-blue",
  showVolume:true,
  preview: true,
  pointerEvents: false,
});
