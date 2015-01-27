"use strict";

module.exports = function(grunt) {
    var configObj = {},
        STATIC_PATH = './';

    // sass
    configObj.sass = {
        options: {
            outputStyle: 'compressed',
            sourcemap: true
        },
        dist: {
            files: [{
                expand: true,
                cwd: STATIC_PATH + 'src/',
                src: '*.scss',
                dest: STATIC_PATH + 'dist/',
                ext: '.css'
            }]
        }
    };

    // watch
    configObj.watch = {
        options: {
            interrupte: true,
            livereload: true,
            livereloadOnError: false
        },
        sass: {
            files: [STATIC_PATH + 'src/*.scss', STATIC_PATH + 'demo.html'],
            tasks: ['build']
        }
    };

    grunt.config.init(configObj);

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass']);
};
