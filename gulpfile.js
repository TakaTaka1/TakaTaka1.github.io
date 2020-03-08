// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");
// Browser-sync
const browser = require("browser-sync").create();
// Plumber
const plumber = require("gulp-plumber");
// Browserify
var browserify = require('browserify');
// Vinyl-source-stream
var source     = require('vinyl-source-stream');

const paths = {
  'src': {
    'scss': 'scss/*.scss',
  },
  'dest': {
    'css': '/Users/takaohoshino/TakaTaka1.github.io/css/',
  }
};

// Browser-syncのタスクを作成する
gulp.task("build-server", function(done) {
    browser.init({
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });
    done();
});

// Observe files
gulp.task('watch-files', function(done) {
    gulp.watch("./*.html", gulp.task('browser-reload'));
    gulp.watch("./css/*.css", gulp.task('browser-reload'));
    gulp.watch("./js/*.js", gulp.task('browser-reload'));
    gulp.watch("./js/components/modules/*.vue", gulp.task('browser-reload'));
    gulp.watch("./js/components/modules/*.js", gulp.task('browser-reload'));
    done();
    console.log(('gulp watch started'));
});

// Reload all Browsers
gulp.task('browser-reload', function (done){
    browser.reload();
    done();
    console.log('Browser reload completed');
});

// style.scssをタスクを作成する
gulp.task("sass", function(done) {
  // style.scssファイルを取得
    gulp.src("./scss/*.scss")
      .pipe(plumber())
      // Sassのコンパイルを実行
      .pipe(sass())
      // cssフォルダー以下に保存
      .pipe(gulp.dest("./css/"));
      // .pipe(browser.reload({stream:true}));
    done();
});
gulp.task('default', gulp.series( 'sass','build-server','watch-files'));
