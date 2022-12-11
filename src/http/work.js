const { noOp, sleep, tsLog, longText } = require('../sharedLib');

async function processRequest(input, q) {
  // TODO: do something important
  await sleep(500);
  const output = { ts: new Date(), data: 'Hello World', text: longText() };
  const ctx = { input, output };

  setTimeout(() => {
    workByServer(ctx, q).catch(noOp);
  }, 0); // work on next tick

  return output;
}

async function workByServer(ctx, q) {
  try {
    tsLog('workByServer()...', ctx);
    if (Math.random() < 0.5) throw new Error('No, I cannot work right now!');
    await work(ctx);
    tsLog('workByServer()... done!', ctx);
  } catch (err) {
    tsLog('workByServer()... error', err.message, 'sending it to queue');
    q.publish('work', JSON.stringify(ctx));
  }
  return true;
}

module.exports = {
  processRequest,
  workByServer,
};
