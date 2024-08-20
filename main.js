const { Worker } = require('worker_threads');

function sleep(ms) {
  const start = Date.now();
  let now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

process.on('exit', (code) => {
    console.log("onExit handler running")
    console.log("onExit handler done running")
});

new Worker('./worker.js');

setTimeout(async () => {
    console.log('calling process.exit(0)');
    process.exit(0)
}, 20);