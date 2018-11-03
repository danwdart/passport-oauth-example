module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        eslint: {
            target: ['Gruntfile.js', 'server.js', 'config/**/*.js', 'lib/**/*.js', 'publid/js/src/**/*.js'],
        },
        browserify: {
            dist: {
                files: {
                    'public/js/index.js': 'public/js/src/index.js'
                },
                options: {
                    transform: [
                        [
                            'babelify',
                            {
                                presets: [
                                    '@babel/preset-env'
                                ]
                            }
                        ]
                    ],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        watch: {
            lint: {
                files: ['Gruntfile.js', 'server.js', 'config/**/*.js', 'lib/**/*.js', 'publid/js/src/**/*.js'],
                tasks: ['eslint']
            },
            compile: {
                files: ['public/js/src/**/*.js'],
                tasks: ['eslint', 'browserify']
            }
        }
    });
  
    // I could do these automatically using another plugin but this is for minimalism.

    grunt.registerTask('default', ['eslint', 'browserify:dist']);
    grunt.registerTask('test', ['eslint']);
  
};