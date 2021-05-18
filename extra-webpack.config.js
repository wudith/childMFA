const appName = require('./package.json').name;

  const config = {
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    output: {
      library: `${appName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${appName}`,   
    },       
    externals: {  
      'zone.js': 'Zone'
    }
  }; 

module.exports = config;