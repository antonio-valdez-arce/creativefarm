module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: [
              'libs/foundation/js/vendor/jquery.js', 
              'libs/foundation/js/foundation.min.js', 
              'creativefarm/js/script.js'],

        dest: '../dist/js/script.min.js'
      },
      modernizr: {
        options: {
          banner: '/* Modernizr v2.8.2 * www.modernizr.com * * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton * Available under the BSD and MIT licenses: www.modernizr.com/license/*/',
        },
        files: { 
          '../dist/js/vendor/modernizr.min.js' : 'libs/foundation/js/vendor/modernizr.js' 
        }
        
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'creativefarm/css/styles.css': ['creativefarm/sass/styles.scss'],       // 'destination': 'source'
         }
      }
    },

    concat: {
      options: {
        separator: '',
      },
      dist: {
        src: ['libs/foundation/css/foundation.min.css','creativefarm/css/styles.css'],
        dest: '../dist/css/styles.min.css',
      },
    },

    watch: {
      options: {
        spawn: false,
        livereload: true,
      },
      css: {
        files: ['creativefarm/sass/*.scss', 'creativefarm/js/*.js', '../src/Gruntfile.js'],
        tasks: ['uglify','sass','concat'],
      },
    },

  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['uglify','sass', 'concat', 'watch']);

};