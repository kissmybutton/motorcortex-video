import Player from "@kissmybutton/motorcortex-player";
import MotorCortex from "@kissmybutton/motorcortex";
import MCVideo from "../dist/motorcortex-video.umd";
const VideoPlugin = MotorCortex.loadPlugin(MCVideo);

const host = document.getElementById("clip");
const VideoClip = new VideoPlugin.Clip(
  {
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    ],
    width: "1280px",
    height: "675px",
    muted: false,
    startFrom: 0,
  },
  {
    host, // or host: your-host
  }
);

const Playback = new VideoPlugin.Playback({
  selector: "!#video", // that's mandatory, it should always have the value "!#video" and it targets the video of the VideoPlugin.Clip
  duration: 325000, // the duration of the playback in milliseconds
});

VideoClip.addIncident(Playback, 0);
new Player({
  clip: VideoClip,
  theme: "mc-blue",
  showVolume: true,
  preview: true,
  pointerEvents: false,
});
