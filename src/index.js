import VideoClip from "./VideoClip";
import VideoPlay from "./Incidents/VideoPlay";
import VideoEffect from "./Incidents/Effect";
import compositeAttributes from "./compositeAttributes";
import pkg from "../package.json";

export default {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [
    {
      exportable: VideoPlay,
      name: "Playback",
    },
    {
      exportable: VideoEffect,
      name: "VideoEffect",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            filter: {
              type: "object",
              props: {
                blur: {
                  type: "number",
                  min: 0,
                  optional: true,
                },
                brightness: {
                  type: "number",
                  min: 0,
                  max: 1,
                  optional: true,
                },
                contrast: {
                  type: "number",
                  min: 0,
                  optional: true,
                },
                grayscale: {
                  type: "number",
                  min: 0,
                  max: 1,
                  optional: true,
                },
                "hue-rotate": {
                  type: "number",
                  optional: true,
                },
                invert: {
                  type: "number",
                  min: 0,
                  max: 1,
                  optional: true,
                },
                opacity: {
                  type: "number",
                  min: 0,
                  max: 1,
                  optional: true,
                },
                saturate: {
                  type: "number",
                  min: 0,
                  optional: true,
                },
                sepia: {
                  type: "number",
                  min: 0,
                  max: 1,
                  optional: true,
                },
              },
            },
          },
        },
      },
    },
  ],
  compositeAttributes,
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
