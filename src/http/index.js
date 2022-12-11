const { server, q } = require('./server');
const { tsLog } = require('../sharedLib');

main();

async function main() {
  tsLog('server...');

  await q.connect();

  server.listen(9016, () => {
    tsLog('server... ready at 9016');
  });

}