/*
 * grunt-appcache
 * http://canvace.com/
 *
 * Copyright (c) 2013 Canvace Srl
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/**/*.js',
                '<%= nodeunit.tests %>',
            ],
            options: {
                jshintrc: '.jshintrc',
            },
        },

        clean: {
            tests: ['tmp'],
        },
        nodeunit: {
            tests: ['test/*_test.js'],
        },


        appcache: {
            options: {                
                version: 'v1.0'
            },
            test: {             
                dest: 'tmp/appcache.manifest',
                cache: {
                    patterns: [ 'test/expected/read/revision.json',
                                'test/fixtures/read/revision.manifest']                    
                  }
            }
        },
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');    

    grunt.registerTask('test', ['clean', 'appcache', 'nodeunit']);
    grunt.registerTask('default', ['jshint', 'test']);
    grunt.registerTask('app', ['appcache']);

};
