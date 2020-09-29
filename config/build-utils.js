const ts = require('typescript');
const path = require('path');
const fs = require('fs');
const helpers = require('./helpers');

const DEFAULT_METADATA = {
  title: "Angular Electron",
  description: "Angular Electron",
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer(),
  HMR: helpers.hasProcessFlag('hot'),
  WATCH: helpers.hasProcessFlag('watch'),
  tsConfigPath: 'tsconfig.webpack.json',

  /**
   * This suffix is added to the environment.ts file, if not set the default environment file is loaded (development)
   * To disable environment files set this to null
   */
  envFileSuffix: ''
};

function readTsConfig(tsConfigPath) {
  const configResult = ts.readConfigFile(tsConfigPath, ts.sys.readFile);
  return ts.parseJsonConfigFileContent(configResult.config, ts.sys,
    path.dirname(tsConfigPath), undefined, tsConfigPath);
}

function getEnvFile(suffix) {
  if (suffix && suffix[0] !== '.') {
    suffix = '.' + suffix;
  }

  if (suffix === null) {
    return;
  }

  let fileName = helpers.root(`src/environments/environment${suffix}.ts`);
  if (fs.existsSync(fileName)) {
    return fileName;
  } else if (fs.existsSync(fileName = helpers.root('src/environments/environment.ts'))) {
    console.warn(`Could not find environment file with suffix ${suffix}, loading default environment file`);
    return fileName;
  } else {
    throw new Error('Environment file not found.')
  }
}

function ngcWebpackSetup(prod, metadata) {
  if (!metadata) {
    metadata = DEFAULT_METADATA;
  }

  const buildOptimizer = prod && metadata.AOT;
  const sourceMap = true; // TODO: apply based on tsconfig value?
  const ngcWebpackPluginOptions = {
    skipCodeGeneration: !metadata.AOT,
    sourceMap
  };

  const environment = getEnvFile(metadata.envFileSuffix);
  if (environment) {
    ngcWebpackPluginOptions.hostReplacementPaths = {
      [helpers.root('src/environments/environment.ts')]: environment
    }
  }

  if (!prod && metadata.WATCH) {
    // Force commonjs module format for TS on dev watch builds.
    ngcWebpackPluginOptions.compilerOptions = {
      module: 'es2020'
    };
  }

  const buildOptimizerLoader = {
    loader: '@angular-devkit/build-optimizer/webpack-loader',
    options: {
      sourceMap
    }
  };

  const loaders = [
    {
      test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
      use: buildOptimizer ? [ buildOptimizerLoader, '@ngtools/webpack' ] : [ '@ngtools/webpack' ]
    },
    ...buildOptimizer
      ? [ { test: /\.js$/, use: [ buildOptimizerLoader ] } ]
      : []
  ];

  return {
    loaders,
    plugin: ngcWebpackPluginOptions
  };
}


exports.DEFAULT_METADATA = DEFAULT_METADATA;
exports.readTsConfig = readTsConfig;
exports.getEnvFile = getEnvFile;
exports.ngcWebpackSetup = ngcWebpackSetup;