# /*=======================================
# =               Stylus task             =
# =======================================*/

# Компилирует stylus файлы
# Подключает все необходимые css файлы из bower.json
# Кодирует небольшие картинки в base64
# Подставляет вендорные префиксы


gulp                = require "gulp"
browserSync         = require "browser-sync"
reload              = browserSync.reload
gulpif              = require "gulp-if"

stylus              = require "gulp-stylus"
autoprefixer        = require "gulp-autoprefixer"
combineMediaQueries = require "gulp-combine-media-queries"
addsrc              = require "gulp-add-src"
filter              = require "gulp-filter"
mainBowerFiles      = require "main-bower-files"
minify              = require "gulp-minify-css"
cssBase64           = require "gulp-css-base64"
concat              = require "gulp-concat"

config              = require("../config").stylus


gulp.task "stylus", ->
  gulp.src config.src
    .pipe do stylus
    .pipe do autoprefixer
    .pipe do combineMediaQueries
    .pipe addsrc.prepend(mainBowerFiles())
    .pipe cssBase64 maxWeightResource: config.base64.maxWeight
    .pipe filter "*.css"
    .pipe concat config.resultName
    .pipe gulpif global.production, minify compatibility: config.minify.compatibility, noAdvanced: true
    .pipe gulp.dest config.dest
    .pipe reload stream: yes