var derby = require('derby');
var Model = derby.Model;

module.exports = Toast;

function Toast() {}
Toast.prototype.view = __dirname + '/views';
Toast.prototype.name = 'toast';

var defaultOptions = {
    sticky: true
  , timeout: 5000
};

Model.prototype.toast = function(type, message, options) {
  // Allow calling with: Toast.add({error: 'Shit just hit the fan'}, options);
  if(typeof type === 'object') {
    options = message;
    for(var key in type) {
      message = type[key];
      type = key;
    }
  }

  // Change type 'error' to 'danger', and everything unknown to 'info'
  if(type === 'error') type = 'danger';
  if(['danger', 'warning', 'info', 'success'].indexOf(type) === -1) type = 'info';

  var self = this;
  var sticky = options ? options.sticky : defaultOptions.sticky;
  var timeout = options.timeout || defaultOptions.timeout; 
  var toast = {
      id: this.id()
    , type: type
    , message: message
    , sticky: sticky
  };

  if(options && options.click) toast.click = options.click;

  this.root.unshift('_session.toast', toast, function() {
    if(sticky) return;
    setTimeout(function() {
      var toasts = self.root.get('_session.toast');
      var len = toasts.length;

      for(var i = 0; i < len; i++) {
        if(toasts[i].id === toast.id) return self.remove('_session.toast', i);
      }
    }, timeout);
  });
};

Toast.prototype.add = function(type, message, options) {
  this.model.root.toast(type, message, options);
};

Toast.prototype.remove = function(index) {
  var self = this;

  this.model.root.set('_session.toast.' + index + '.faded', true);
  setTimeout(function() {
    self.model.root.remove('_session.toast', index);
  }, 150);
};