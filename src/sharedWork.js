const { sleep, tsLog } = require('./sharedLib');

async function work(ctx) {
  try {
    tsLog('work()...', ctx);
    await sleep();
    tsLog('work()... done!', ctx);
  } catch (err) {
    tsLog('work()... error', err.message);
  }
}

module.exports = {
  work,
};
