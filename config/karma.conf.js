/**
 * @author: tipe.io
 */

module.exports = function (config) {
  const configuration = {

    /**
     * Base path that will be used to resolve all patterns (e.g. files, exclude).
    */
    basePath: '',

    /**
     * Frameworks to use
     *
     * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['jasmine'],

    /**
     * List of files to exclude.
    */
    exclude: [],

    client: {
      captureConsole: false
    },

    /**
     * List of files / patterns to load in the browser
     *
     * we are building the test environment in ./spec-bundle.js
     */
    files: [
      { pattern: './config/spec-bundle.js', watched: false },
      { pattern: './src/assets/**/*', watched: false, included: false, served: true, nocache: false }
    ],

    /**
     * By default all assets are served at http://localhost:[PORT]/base/
     */
    proxies: {
      "/assets/": "/base/src/assets/"
    },

    /**
     * Preprocess matching files before serving them to the browser
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

    coverageReporter: {
      type: 'in-memory'
    },

    remapCoverageReporter: {
      'text-summary': null,
      json: './coverage/coverage.json',
      html: './coverage/html'
    },

    /**
     * Webpack please don't spam the console when running in karma!
     */
    webpackMiddleware: {
      /**
       * webpack-dev-middleware configuration
       * i.e.
       */
      logLevel: 'warn',
      /**
       * and use stats to turn off verbose output
       */
      stats: {
        /**
         * options i.e.
         */
        chunks: false
      }
    },

    /**
     * Test results reporter to use
     *
     * possible values: 'dots', 'progress'
     * available reporters: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: ['mocha', 'coverage', 'remap-coverage'],

    /**
     * Web server port.
     */
    port: 9876,

    /**
     * enable / disable colors in the output (reporters and logs)
     */
    colors: true,

    /**
     * Level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_WARN,

    /**
     * enable / disable watching file and executing tests whenever any file changes
     */
    autoWatch: true,

    /**
     * start these browsers
     * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: [
      'ChromeTravisCi'
    ],

    customLaunchers: {
      ChromeTravisCi: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },

    /**
     * Continuous Integration mode
     * if true, Karma captures browsers, runs the tests and exits
     */
    singleRun: false,

    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
  };

  if (process.env.TRAVIS) {
    configuration.browsers = [
      'ChromeTravisCi'
    ];
  }

  config.set(configuration);
};
