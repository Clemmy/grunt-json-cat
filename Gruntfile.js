'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        json_cat: {
            options: {
            },
            test: {
                src: ['src/*.json'],
                dest: 'dest/combined.json'
            }
        }
    });

    grunt.loadTasks('tasks');
};