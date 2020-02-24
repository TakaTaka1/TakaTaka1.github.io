// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

const paths = {
  'src': {
    'scss': 'scss/*.scss',
  },
  'dest': {
    'css': '/Users/takaohoshino/TakaTaka1.github.io/css/',
  }
};


// style.scssをタスクを作成する
gulp.task("sass", function(done) {
  // style.scssファイルを取得
    gulp.src("./scss/*.scss")
      // Sassのコンパイルを実行
      .pipe(sass())
      // cssフォルダー以下に保存
      .pipe(gulp.dest("./css/"));
    done();
});
gulp.task('default', gulp.series( 'sass'));
