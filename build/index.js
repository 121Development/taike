import { handler } from './handler.js';
import { env } from './env.js';
import { Application, Router } from './deps.ts';


const path = env('SOCKET_PATH', false);
const host = env('HOST', '0.0.0.0');
const port = env('PORT', !path && '3000');

// TODO: add compression middleware
const server = new Application().use(handler);

// add a route that lives separately from the SvelteKit app
const router = new Router();
router.get('/healthcheck', (ctx) => {
  ctx.response.body = 'ok';
});
server.use(router.routes());
server.use(router.allowedMethods());

server.addEventListener('listen', () => {
	console.log(`Listening on http://${addr}`);
});

const addr = path || `${host}:${port}`;
server.listen(addr).catch((err) => {
	console.error('error', err);
});

export { host, path, port, server };
