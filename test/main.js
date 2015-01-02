/*global describe, it*/
'use strict';

var fs        = require('fs')
  , should    = require('should')
  , path      = require('path')
  , s3        = require('..')
  , assert    = require('assert')
  , s3Bucket  = process.env.S3_BUCKET;

if (!s3Bucket || !process.env.S3_KEY || !process.env.S3_SECRET) {
  console.log("S3_BUCKET, S3_KEY, and S3_SECRET env vars needed to run tests");
  process.exit(1);
}

var gutil = require('gulp-util'),
s3 = require('../');

describe('gulp-s3', function () {
  it('should evaluate true as true', function() {
    assert.strictEqual(true, true);
  })
});
