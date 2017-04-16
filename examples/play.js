var string = 'THe end of he world as we know it';
let chars = string.split('');
for (let i = 0; i < chars.length / 2; i++) {
  let temp = chars[i];
  chars[i] = chars[chars.length - i];
  chars[chars.length - 1] = temp;
}

let answer = chars.join('');
console.log(answer);
