"use strict";

var VideoClip = require('./VideoClip');

var VideoPlay = require('./Incidents/VideoPlay');

var VideoEffect = require('./Incidents/Effect');

var compositeAttributes = require('./compositeAttributes');

module.exports = {
  npm_name: "@kissmybutton/motorcortex-video",
  incidents: [{
    exportable: VideoPlay,
    name: "Playback"
  }, {
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
                optional: true
              },
              brightness: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              },
              contrast: {
                type: "number",
                min: 0,
                optional: true
              },
              grayscale: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              },
              'hue-rotate': {
                type: "number",
                optional: true
              },
              invert: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              },
              opacity: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              },
              saturate: {
                type: "number",
                min: 0,
                optional: true
              },
              sepia: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              }
            }
          }
        }
      }
    }
  }],
  compositeAttributes: compositeAttributes,
  Clip: VideoClip,
  capabilities: {
    speed: false,
    preview: false
  }
};
//# sourceMappingURL=main.js.map