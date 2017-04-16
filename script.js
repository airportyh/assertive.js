const fs = require('fs');
const filename = process.argv[2];
const falafel = require('falafel');

if (!filename) {
  console.log('Please provide an input file.');
  process.exit(1);
}

// console.log('Reading', filename);

let code = fs.readFileSync(filename) + '';
code = falafel(code, function(node) {
  if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression') {
    // console.log('Number of params: ', node.params.length);
    node.body.body[0].update(
      `if (arguments.length !== ${node.params.length}) {
        throw new Error('Wrong number of arguments provided to function${node.id ? ' ' + node.id.name : ''}. ${node.params.length} expected. Got ' + arguments.length + '.');
      }\n` +
      node.body.body[0].source()
    );
    // console.log('Body: ', node.body.body[0]);
  }
  if (node.type == 'MemberExpression') {
    let prop = node.property.name;
    let obj = node.object.name;
    node.update(
      `(function() {
        if ('${prop}' in ${obj}) {
          return ${obj}.${prop};
        } else {
          throw new Error('Property ${prop} does not exist in ${obj}');
        }
      }())`
    );
  }
});

/*
function() {
  if ('glass' in obj) {
    return obj.glass;
  } else {
    throw new Error('Property glass does not exist in obj');
  }
}()
*/

console.log(code);
