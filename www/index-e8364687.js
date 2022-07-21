import './App-4328cdd3.js';
import './index-52596bb8.js';

var Hex;
(function (Hex) {
  function is(value) {
    const matchArray = (typeof value == "string" && value.match(/[0-9a-fA-F]/g)) || undefined;
    return (typeof value == "string" &&
      value.length > 3 &&
      value[0] == "#" &&
      ((matchArray === null || matchArray === void 0 ? void 0 : matchArray.length) == 3 || (matchArray === null || matchArray === void 0 ? void 0 : matchArray.length) == 6));
  }
  Hex.is = is;
})(Hex || (Hex = {}));

var Hsl;
(function (Hsl) {
  function is(value) {
    const values = typeof value == "string" && value.length > 11 ? value.substring(4, value.length - 1).split(",") : [];
    return (typeof value == "string" &&
      value.length > 11 &&
      value.substr(0, 4) == "hsl(" &&
      value.substr(value.length - 1, 1) == ")" &&
      values.length == 3 &&
      values.every((single, index) => {
        var _a, _b;
        let result = false;
        if (index == 0)
          result =
            !Number.isNaN(single) &&
              ((_a = single.match(/[0-9]/g)) === null || _a === void 0 ? void 0 : _a.length) == single.length &&
              Number(single) >= 0 &&
              Number(single) <= 360;
        else {
          const number = single.substr(0, single.length - 1);
          result =
            single[single.length - 1] == "%" &&
              !Number.isNaN(number) &&
              ((_b = number.match(/[0-9]/g)) === null || _b === void 0 ? void 0 : _b.length) == number.length &&
              Number(number) >= 0 &&
              Number(number) <= 100;
        }
        return result;
      }));
  }
  Hsl.is = is;
})(Hsl || (Hsl = {}));

const Names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};
var Name;
(function (Name) {
  Name.types = () => Object.keys(Names);
  function is(value) {
    return typeof value == "string" && Name.types().includes(value.toLowerCase());
  }
  Name.is = is;
})(Name || (Name = {}));

var Rgb;
(function (Rgb) {
  function is(value) {
    const values = typeof value == "string" && value.length > 9 ? value.substring(4, value.length - 1).split(",") : [];
    return (typeof value == "string" &&
      value.length > 9 &&
      value.substr(0, 4) == "rgb(" &&
      value.substr(value.length - 1, 1) == ")" &&
      values.length == 3 &&
      values.every((value) => {
        var _a;
        return !Number.isNaN(value) &&
          ((_a = value.match(/[0-9]/g)) === null || _a === void 0 ? void 0 : _a.length) == value.length &&
          Number(value) >= 0 &&
          Number(value) <= 255;
      }));
  }
  Rgb.is = is;
})(Rgb || (Rgb = {}));

var CommaRgb;
(function (CommaRgb) {
  function is(value) {
    const values = typeof value == "string" ? value.split(",") : [];
    return (values.length == 3 &&
      values.every((value) => {
        var _a;
        return !Number.isNaN(value) &&
          ((_a = value.match(/[0-9]/g)) === null || _a === void 0 ? void 0 : _a.length) == value.length &&
          Number(value) >= 0 &&
          Number(value) <= 255;
      }));
  }
  CommaRgb.is = is;
  function from(color) {
    let result;
    const colorWithoutSpace = typeof color == "string" ? color.replace(/ /g, "").toLowerCase() : undefined;
    if (!colorWithoutSpace)
      result = undefined;
    else if (CommaRgb.is(colorWithoutSpace))
      result = colorWithoutSpace;
    else if (Hex.is(colorWithoutSpace))
      result = fromHex(colorWithoutSpace);
    else if (Rgb.is(colorWithoutSpace))
      result = fromRgb(colorWithoutSpace);
    else if (Name.is(colorWithoutSpace))
      result = fromHex(Names[colorWithoutSpace]);
    else if (Hsl.is(colorWithoutSpace))
      result = fromHsl(colorWithoutSpace);
    return result;
  }
  CommaRgb.from = from;
  function fromHex(hex) {
    let result = "0,0,0";
    if (hex.length == 7)
      result = `${parseInt(hex.substr(1, 2), 16)},${parseInt(hex.substr(3, 2), 16)},${parseInt(hex.substr(5, 2), 16)}`;
    else if (hex.length == 4)
      result = fromHex(`#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`);
    return result;
  }
  CommaRgb.fromHex = fromHex;
  function fromRgb(rgb) {
    return rgb.substring(4, rgb.length - 1);
  }
  CommaRgb.fromRgb = fromRgb;
  function fromHsl(hsl) {
    let result = "";
    let h, s, l;
    let r, g, b;
    const HSL = hsl
      .substring(4, hsl.length - 1)
      .split(",")
      .map((value, index) => Number(index == 0 ? value : value.substr(0, value.length - 1)));
    if (HSL.length == 3) {
      h = HSL[0] / 360;
      s = HSL[1] / 100;
      l = HSL[2] / 100;
      if (s == 0)
        r = g = b = l;
      else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      result = `${Math.round(255 * r)},${Math.round(255 * g)},${Math.round(255 * b)}`;
    }
    return result;
  }
  CommaRgb.fromHsl = fromHsl;
  function hue2rgb(p, q, t) {
    let result = p;
    if (t < 0)
      t += 1;
    if (t > 1)
      t -= 1;
    if (t < 1 / 6)
      result = p + (q - p) * 6 * t;
    else if (t < 1 / 2)
      result = q;
    else if (t < 2 / 3)
      result = p + (q - p) * (2 / 3 - t) * 6;
    return result;
  }
})(CommaRgb || (CommaRgb = {}));

var Color;
(function (Color) {
  function is(value) {
    return (typeof value == "string" &&
      (CommaRgb.is(value) || Hex.is(value) || Hsl.is(value) || Name.is(value) || Rgb.is(value)));
  }
  Color.is = is;
  function from(value) {
    return is(value) ? value : undefined;
  }
  Color.from = from;
  Color.Names = Names;
  Color.Name = Name;
  Color.CommaRgb = CommaRgb;
  Color.Rgb = Rgb;
  Color.Hex = Hex;
  Color.Hsl = Hsl;
})(Color || (Color = {}));

function reduce(types, value) {
  return types.reduce((r, c) => typeof value == "object" && value != null && typeof value[c] == "string"
    ? Object.assign(Object.assign({}, r), { [c]: value[c] }) : r, {});
}
var Cosmetic;
(function (Cosmetic) {
  Cosmetic.types = Cosmetic;
  function from(value) {
    let result = {};
    if (typeof value == "object" && value) {
      result = {
        text: reduce(["background", "color"], value.text),
        border: reduce(["background", "color", "style", "radius", "width"], value.border),
        gap: typeof value.gap == "string" ? value.gap : undefined,
        dangerColor: typeof value.dangerColor == "string"
          ? value.dangerColor
          : typeof value.danger_color == "string"
            ? value.danger_color
            : undefined,
        fontFamily: typeof value.fontFamily == "string"
          ? value.fontFamily
          : typeof value.font_family == "string"
            ? value.font_family
            : undefined,
        background: typeof value.background == "string" ? value.background : undefined,
      };
      Object.keys(result).forEach((key) => {
        var _a;
        if (result[key] == undefined ||
          (typeof result[key] == "object" && result[key] && Object.keys((_a = result[key]) !== null && _a !== void 0 ? _a : {}).length == 0)) {
          delete result[key];
        }
      });
    }
    return result;
  }
  Cosmetic.from = from;
  Cosmetic.Color = Color;
})(Cosmetic || (Cosmetic = {}));

//# sourceMappingURL=index-e8364687.js.map