// Vendor
var getConfig = require('hjs-webpack');
var React = require('react');
var FS = require('fs');
var Path = require('path');
var ncp = require('ncp').ncp

// Language
require('babel/register');

// Pages
var Home = require('./src/pages/home');
var About = require('./src/pages/about');
var Team = require('./src/pages/team');

// Static Assets
ncp('src/images', 'public/images')

// Helpers
var renderComponent = function(context, element) {
  return context.defaultTemplate({
    html: React.renderToString(React.createElement(element)),
    head: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">'
  });
};

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (context) {
    return {
      'index.html': renderComponent(context, Home),
      'about/index.html': renderComponent(context, About),
      'team/index.html': renderComponent(context, Team)
    };
  }
});
