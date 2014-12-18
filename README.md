# gulp-s3 [![NPM version][npm-image]][npm-url]

> s3 plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-s3-util` as a development dependency:

```shell
npm install --save-dev gulp-s3-util
```

Setup your aws.json file
```javascript
{
  "key": "AKIAI3Z7CUAFHXXXXXXX",
  "secret": "acYxWRu5RRa6CwzQuhdXEfTpbQA+1XQJ7XXXXXXX",
  "bucket": "dev.example.com",
  "region": "eu-west-1"
}
```

Then, use it in your `gulpfile.js`:
```javascript
var s3 = require("gulp-s3-util");

aws = JSON.parse(fs.readFileSync('./aws.json'));
gulp.src('./dist/**')
    .pipe(s3(aws));
```

## API


#### options.headers

Type: `Array`          
Default: `[]`

Headers to set to each file uploaded to S3

```javascript
var options = { headers: {'Cache-Control': 'max-age=315360000, no-transform, public'} }
gulp.src('./dist/**')
    .pipe(s3(aws, options));
```

#### options.gzippedOnly

Type: `Boolean`          
Default: `false`

Only upload files with .gz extension, additionally it will remove the .gz suffix on destination filename and set appropriate Content-Type and Content-Encoding headers.

```javascript
var gulp = require("gulp");
var s3 = require("gulp-s3-util");
var gzip = require("gulp-gzip");
var options = { gzippedOnly: true };

gulp.src('./dist/**')
.pipe(gzip())
.pipe(s3(aws, options));

});
```

#### options.uploadPath

Type: `String`
Default: `''`

S3 prefix to add to each uploaded file.

```javascript
var options = { uploadPath: '/dev/assets/' }
gulp.src('./dist/**')
    .pipe(s3(aws, options));
```

#### options.asyncLimit

Type: `Number`
Default: `4`

Limits the number of concurrent uploads to S3.

```javascript
var options = { asyncLimit: 8 }
gulp.src('./dist/**')
    .pipe(s3(aws, options));
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-s3-util

