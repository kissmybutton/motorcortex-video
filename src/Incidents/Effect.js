import MC from "@kissmybutton/motorcortex";
import compositeAttributes from "../compositeAttributes";
const effects = compositeAttributes.filter;

export default class VideoEffect extends MC.Effect {
  getScratchValue() {
    return {
      opacity: 1,
      contrast: 1,
      saturate: 1,
      brightness: 1,
      blur: 0,
      sepia: 0,
      invert: 0,
      grayscale: 0,
      "hue-rotate": 0,
    };
  }

  effectsUnits(filter) {
    const filters = {
      opacity: "",
      contrast: "",
      saturate: "",
      brightness: "",
      blur: "px",
      sepia: "",
      invert: "",
      grayscale: "",
      "hue-rotate": "deg",
    };
    return filters[filter];
  }

  objToFilterValue(obj) {
    let string = "";
    for (const filter in obj) {
      string += `${filter}(${obj[filter]}${this.effectsUnits(filter)}) `;
    }
    return string;
  }

  onProgress(fraction) {
    const targetValues = Object.assign({}, this.initialValue);
    for (const i in effects) {
      const effect = effects[i];
      if (this.initialValue[effect] !== this.targetValue[effect]) {
        targetValues[effect] =
          fraction * (this.targetValue[effect] - this.initialValue[effect]) +
          this.initialValue[effect];
      }
    }
    this.element.entity.ctx.filter = this.objToFilterValue(targetValues);
  }
}
