'use strict';

var chalk = require('chalk');
var _ = require('lodash');

module.exports = function (grunt) {

    grunt.registerMultiTask('json_cat', 'Grunt plugin that concatenates multiple JSON files', function () {

        var options = this.options({
            replacer: null,
            space: '\t'
        });

        _.forEach(this.files, function (file) {

            var json = {};
            var filesModifiedCounter = 0;

            _.forEach(file.src, function (filepath) {
                if (grunt.file.exists(filepath)) {
                    _.assign(json, grunt.file.readJSON(filepath));
                    grunt.verbose.writeln(chalk.green(filepath) + ' concatenated successfully.');
                    ++filesModifiedCounter;

                } else {
                    grunt.log.warn(filepath + ' could not be found. Skipping.');
                }
            });

            grunt.log.writeln('Concatenated ' + chalk.cyan('22') + ' files.');
            grunt.file.write(file.dest, JSON.stringify(json, options.replacer, options.space));
        });
    })
};