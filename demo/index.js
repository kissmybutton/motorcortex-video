import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import VideoPluginDefinition from "../src/";
const VideoPlugin = loadPlugin(VideoPluginDefinition);

const MyClip = new HTMLClip({
  host: document.getElementById("clip"),
  id: "my-root-clip",
  html: `<div id="video-container"></div>`,
  css: `
    #video-container{
        width: 1280px;
        height: 720px;
    }
  `,
  containerParams: {
    width: "1280px",
    height: "720px",
  },
});

const VideoClip = new VideoPlugin.Clip(
  {
    sources: [
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    ],
    startFrom: 120,
    width: 1280,
    height: 720,
    // audio: false,
  },
  {
    selector: "#video-container",
    id: "videoClip",
  }
);

const Playback = new VideoPlugin.Playback({
  selector: "!#video",
  duration: 25000,
});

MyClip.addIncident(VideoClip, 0);
VideoClip.addIncident(Playback, 500);

new Player({ clip: MyClip });
