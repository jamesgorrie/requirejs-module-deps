/* global module: false, process: false */
module.exports = function (grunt) {
  grunt.initConfig({
    requirejs: {
      options: {
        optimize: 'none'
      },
      common: {
        options: {
          baseUrl: 'src',
          dir: 'dist/javascripts',
          modules: [{
            name: 'core',
            create: true,
            include: ['util/a', 'util/b']
          }, {
            name: 'app',
            include: ['app/module'],
            exclude: ['core']
          }]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-requirejs');
};
