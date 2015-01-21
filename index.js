module.exports = function(app, options) {
  // Set up all components
  app.component(null, require('./navigation'), options.ns);
};
