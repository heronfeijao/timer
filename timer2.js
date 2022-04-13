const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key.name === 'b') {
    process.stdout.write('BEEP!\n');
  } else if (key.name > 0 && key.name < 10) {
    const time = parseInt(key.name);
    if (time === 1) process.stdout.write(`Setting timer for ${time} second...`);
    if (time > 1) process.stdout.write(`Setting timer for ${time} seconds...`);
    setTimeout(() => {
      process.stdout.write('BEEP!\n');
    }, time * 1000);
  }
});
console.log('ctrl + c: exit\nb: BEEP!\n 1-9: Set timer.');