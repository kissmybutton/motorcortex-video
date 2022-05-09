import VideoClip from "./VideoClip";
import VideoPlay from "./Incidents/VideoPlay";
import pkg from "../package.json";

export default {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [
    {
      exportable: VideoPlay,
      name: "Playback",
    },
  ],
  Clip: {
    exportable: VideoClip,
    attributesValidationRules: {
      sources: {
        optional: false,
        type: "array",
        min: 1,
        items: {
          type: "string",
        },
      },
      width: {
        optional: true,
        type: "number",
        integer: true,
        positive: true,
      },
      height: {
        optional: true,
        type: "number",
        integer: true,
        positive: true,
      },
      startFrom: {
        optional: true,
        type: "number",
        integer: true,
        min: 0,
      },
      audio: {
        optional: true,
        type: "boolean",
        default: true,
      },
    },
  },
  capabilities: {
    speed: false,
    preview: false,
  },
  audio: "on",
};
