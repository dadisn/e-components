module.exports = Register;

function Register() {}
Register.prototype = require('derby-login/components/base').prototype;

Register.prototype.view = __dirname + '/views/';
Register.prototype.name = 'auth:register';
Register.prototype.fields = ['email', 'password', 'confirm', 'groupId', 'isAdd'];