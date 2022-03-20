const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// compiles sass to css
function buildStyle() {
  return src("css/index.scss").pipe(sass()).pipe(dest("css"));
}

// watch sass file for changes and recompiles it at each update
function watchTask() {
  watch(["css/index.scss"], buildStyle);
}

// run the files
exports.default = series(buildStyle, watchTask);