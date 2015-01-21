module.exports = Navigation;

function Navigation() {}

Navigation.prototype.view = __dirname + '/views';
Navigation.prototype.style = __dirname + '/styles';
Navigation.prototype.name = 'navigation';

// Require in subcomponents

// Require in all actions
require('./actions');

// Init and create functions
Navigation.prototype.init = function(model) {

};

Navigation.prototype.create = function(model, dom) {

};

// Operations