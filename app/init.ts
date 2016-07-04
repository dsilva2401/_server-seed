///<reference path='../typings/index.d.ts' />

/*import core from './core/index.ts';

let app:any = {};

app.core = core;

var appServer = new core.definitions.HTTPServer();

appServer.server.get('/', function (req, res) {
	res.end(':D');
});

appServer.server.listen(3000);

export default app;*/

import { setup as setupApp, start as startApp } from './setup/index.ts';

startApp();