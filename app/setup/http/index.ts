import core from '../../core/index.ts';

// HTTP Server
	export var httpServer = new core.definitions.HTTPServer();

// Define routes
	httpServer.server.get('/', function (req, res) {
		res.end(':|');
	});