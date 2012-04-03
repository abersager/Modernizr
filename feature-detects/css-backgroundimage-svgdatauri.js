// tests for support of SVG background images in data URIs

var testDeclaration = ' #modernizr { background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzUiIGhlaWdodD0iMjc1Ij48L3N2Zz4%3D); } ';

Modernizr.testStyles(testDeclaration, function (elem, rule) {
  var result = false;
  if (Modernizr.svg) {
    try {
      result = !!((window.getComputedStyle ?
                    getComputedStyle(elem, null) :
                    elem.currentStyle)['backgroundImage']);
    }
    catch (e) {
      // Firefox 3 throws NS_ERROR_DOM_NOT_SUPPORTED_ERR
    }
  }
  Modernizr.addTest('bgimagesvgdatauri', result);
});
