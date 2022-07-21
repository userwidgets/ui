var GoogleFont;
(function (GoogleFont) {
  function is(value) {
    return (typeof value == "string" &&
      !/[</>"'`]/g.test(value) &&
      /^([a-zA-ZäöüåßÄÖÜÅ+ ])+(:(ital(,)?)?((wght@(([01],\d{3})(;[01],\d{3})*|((\d{3})(;\d{3})*))))?)?$/g.test(value));
  }
  GoogleFont.is = is;
  function getFont(value) {
    return is(value) ? value.split(":")[0].replace(/\+/g, " ") : undefined;
  }
  GoogleFont.getFont = getFont;
  function styleImportString(value) {
    return is(value)
      ? `@import url('https://fonts.googleapis.com/css2?family=${value.replace(/ /g, "+")}&display=swap`
      : undefined;
  }
  GoogleFont.styleImportString = styleImportString;
})(GoogleFont || (GoogleFont = {}));

export { GoogleFont as G };

//# sourceMappingURL=GoogleFont-ed2dd269.js.map