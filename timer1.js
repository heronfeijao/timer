let inputs = process.argv.slice(2);

const sortedInputs = (array) => {
  const mapped = array.map(num => parseInt(num));
  const filteredOut = mapped.filter(num => {
    return num > 0 && !isNaN(num);
  });
  return filteredOut;
};

const sorted = sortedInputs(inputs);

let timer = 0;

for (let input of sorted) {
  setTimeout(() => {
    if (input === 1) {
      return (process.stdout.write('BEEP! ' + input + ' second\n'));
    } else {
      return (process.stdout.write('BEEP! ' + input + ' seconds\n'));
    }
  }, timer + parseInt(input) * 1000);
}