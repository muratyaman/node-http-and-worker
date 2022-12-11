const redis = require('redis');

const tsLog = (...args) => console.log.apply(null, [new Date(), args]);

const noOp = () => { tsLog('noOp') };

function queue() {
  return redis.createClient({ url: 'redis://127.0.0.1:6379' });
}

async function sleep(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function longText() {
  const L = 10 + Math.floor(Math.random() * 10);
  let n = 0.0;
  let s = '';
  for (let i = 1; i <= L; i++) {
    n = Math.random();
    s += String(n);
  }
  return s;
}

module.exports = {
  longText,
  noOp,
  queue,
  sleep,
  tsLog,
};
