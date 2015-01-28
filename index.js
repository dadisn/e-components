module.exports = function(app, options) {
  // Set up all components
  app.component(null, require('./navigation'), options.ns);
  app.component(null, require('./toast'), options.ns);
};
