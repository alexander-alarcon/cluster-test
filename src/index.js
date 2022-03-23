const cluster = require('cluster');

const debug = require('debug')('server');

if (cluster.isMaster) {
  const cpuCount = require('os').cpus().length;
  debug(`Number of CPUs is ${cpuCount}`);
  debug(`Master ${process.pid} is running`);
  for (let index = 0; index < cpuCount; index++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    debug(`worker ${worker.id} died`);
    cluster.fork();
  });
} else {
  debug(`Worker ${process.pid} started`);
  const app = require('./server');

  app.listen(3000, () => {
    debug(`Server running on port 3000`);
  });
}
