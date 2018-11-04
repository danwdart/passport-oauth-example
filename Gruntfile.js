module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        copy: {
            
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'results.txt',
                    quiet: false,
                    clearRequireCache: false,
                    clearCacheFilter: () => true,
                    noFail: false
                },
                src: ['**/*.spec.js'],
            }
        },
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
 
    // On watch events, if the changed file is a test file then configure mochaTest to only
    // run the tests from that file. Otherwise run all the tests
    var defaultTestSrc = grunt.config('mochaTest.test.src');
    grunt.event.on('watch', (action, filepath) => {
        grunt.config('mochaTest.test.src', defaultTestSrc);
        if (filepath.match('spec')) {
            grunt.config('mochaTest.test.src', filepath);
        }
    });

    // I could do these automatically using another plugin but this is for minimalism.

    grunt.registerTask('default', ['eslint', 'mochaTest', 'browserify:dist']);
    grunt.registerTask('test', ['eslint', 'mochaTest']);
  
};