import server from './config/server';
import debug from 'debug';

const log  = debug('app:Index');

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  log(`app running on port ${PORT}`);
});