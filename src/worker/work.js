const { tsLog } = require('../sharedLib');
const { work } = require('../sharedWork');

async function workByWorker(ctx) {
  try {
    tsLog('workByWorker()...', ctx);
    await work(ctx);
    tsLog('workByWorker()... done!', ctx);
  } catch (err) {
    tsLog('workByWorker()... error', err.message);
  }
}

module.exports = {
  workByWorker,
};
