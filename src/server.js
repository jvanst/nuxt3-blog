import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const assets = sirv('static', {
  maxAge: 31536000,
  immutable: true
});

polka()
  .use(
      compression({ threshold: 0 }),
      assets,
      sapper.middleware()
  )
  .listen(PORT, err => {
      if (err) console.log('error', err);
  });