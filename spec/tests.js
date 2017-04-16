const { AssertiveArray } = require('../assertive');

describe('AssertiveArray', function() {

  it('initialize', function() {
    let arr = new AssertiveArray(0);
    expect(arr.length).toEqual(0);
    arr = new AssertiveArray(1);
    expect(arr.length).toEqual(1);
    arr = new AssertiveArray(2);
    expect(arr.length).toEqual(2);
  });

  it('initializes with multiple values', function() {
    let arr = new Array(1, 2, 3, 4);
    expect(arr.length).toEqual(4);
    expect()
  });

});
