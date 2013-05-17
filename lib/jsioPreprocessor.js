var jsio = require('jsio');
jsio('import preprocessors.cls as cls');
jsio('import preprocessors.import as importc');

var JSIO_IMPORT_RE = /^jsio\((?:"|')(?:from (?:[^\s]+) )?import ([^;\s]+);?(?:"|')\);$/;
var JSIO_IMPORT_AS_RE = /^jsio\((?:"|')(?:from (?:[^\s]+) )?import (?:.*) as ([^;"']+);?(?:"|')\);$/;

function stubJsioImports(body) {
    var lines = body.split("\n"), line, match, i;
    for (i = lines.length - 1; i >= 0; i--) {
        line = lines[i];

        match = line.match(JSIO_IMPORT_RE) || line.match(JSIO_IMPORT_AS_RE);

        if (match) {
            lines[i] = "var " + match[1].split(".")[0] + " = " + line;
        }
    }

    lines.unshift("var jsio, merge, Class, bind;");

    return lines.join("\n");
}

exports.preprocess = function (path, src) {
    var def = {
        path: path,
        src: src
    };
    importc(path, def);

    // Hacks to appease the linter
    return stubJsioImports(def.src);
};
