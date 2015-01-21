module.exports = function(PreRun) {
  PreRun.prototype.foobar = foobar;
};

function foobar() {
  console.log('Foobar');
}