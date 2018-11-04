module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        // I could have used css modules here..
        cssmin: {
            target: {
                files: [
                    {
                        src: [
                            'node_modules/bootstrap/dist/css/bootstrap.min.css',
                            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                            'public/css/src/index.css'
                        ],
                        dest: 'public/css/index.css'
                    }
                ]
            }
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
                src: ['lib/**/*.spec.js', 'public/**/*.spec.js'],
            }
        },
        eslint: {
            options: {
                fix: true // auto-fix, oh yeah!
            },
            target: ['Gruntfile.js', 'server.js', 'config/**/*.js', 'lib/**/*.js', 'public/js/src/**/*.js'],
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
        // We could restart the server in watch but in the interests of time we won't
        watch: {
            lint: {
                files: ['Gruntfile.js', 'server.js', 'config/**/*.js', 'lib/**/*.js', 'public/js/src/**/*.js'],
                tasks: ['eslint']
            },
            js: {
                files: ['public/js/src/**/*.js'],
                tasks: ['eslint', 'browserify']
            },
            css: {
                // this could also be a glob if we had any more
                // for time we'll use one
                files: ['public/css/src/index.css'],
                tasks: ['cssmin']
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

    grunt.registerTask('default', ['eslint', 'mochaTest', 'cssmin', 'browserify:dist']);
    grunt.registerTask('test', ['eslint', 'mochaTest']);
};