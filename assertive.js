
function AssertiveArray(n) {
  if (arguments.length === 1 && typeof arguments[0] === 'number') {
    this.arr = new Array(n);
  } else {
    this.arr = Array.slice.apply(arguments);
  }
}

Object.defineProperty(
  AssertiveArray.prototype,
  'length',
  {
    get: function() {
      return this.arr.length;
    }
  }
);

exports.AssertiveArray = AssertiveArray;
