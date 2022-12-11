const { tsLog, queue } = require('../sharedLib');
const { workByWorker } = require('./work');

main();

async function main() {
  tsLog('worker...');

  const q = queue();
  await q.connect();

  q.subscribe('work', async (msg) => {
    tsLog('worker got message', msg, '...');
    await workByWorker(JSON.parse(msg));
    tsLog('worker got message', msg, '...done!');
  });

  tsLog('worker... ready');
}
