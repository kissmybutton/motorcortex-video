const MotorCortex = require("@kissmybutton/motorcortex");
const effects = require("../compositeAttributes").filter;

class VideoEffect extends MotorCortex.Effect {
  getScratchValue() {
    return {
      blur: 0,
      brightness: 1,
      contrast: 1,
      grayscale: 0,
      "hue-rotate": 0,
      invert: 0,
      opacity: 1,
      saturate: 1,
      sepia: 0,
    };
  }

  get _effectsUnits() {
    return {
      blur: "px",
      brightness: "",
      contrast: "",
      grayscale: "",
      "hue-rotate": "deg",
      invert: "",
      opacity: "",
      saturate: "",
      sepia: "",
    };
  }

  _objToFilterValue(obj) {
    let string = "";
    for (const filter in obj) {
      string += `${filter}(${obj[filter]}${this._effectsUnits[filter]}) `;
    }
    return string;
  }

  onProgress(f /*, m*/) {
    const targetValues = Object.assign({}, this.initialValue);
    for (let i = 0; i < effects.length; i++) {
      const effect = effects[i];
      if (this.initialValue[effect] !== this.targetValue[effect]) {
        targetValues[effect] =
          f * (this.targetValue[effect] - this.initialValue[effect]) +
          this.initialValue[effect];
      }
    }
    this.element.entity.ctx.filter = this._objToFilterValue(targetValues);
  }
}

module.exports = VideoEffect;
