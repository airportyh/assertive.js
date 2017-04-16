let obj = {
  name: 'Bob'
};

(function() {
        if ('log' in console) {
          return console.log;
        } else {
          throw new Error('Property log does not exist in console');
        }
      }())((function() {
        if ('glass' in obj) {
          return obj.glass;
        } else {
          throw new Error('Property glass does not exist in obj');
        }
      }()));

