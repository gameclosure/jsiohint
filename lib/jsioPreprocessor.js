var jsio = require('jsio');
jsio('import preprocessors.cls as cls');
jsio('import preprocessors.import as importc');


exports.preprocess = function(path, src) {
	var def = {
		path: path,
		src: src
	};
	cls(path, def);
	importc(path, def);
	return def.src
};
