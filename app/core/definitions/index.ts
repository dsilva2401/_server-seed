import setupHTTPServer from './HTTPServer.ts';
import setupHTTPRouter from './HTTPRouter.ts';

export function setup (core:any) {
	// Init definitoins
		let definitions:any = {};

	// Setup definitions
		setupHTTPServer(definitions, core);
		setupHTTPRouter(definitions, core);

	// Export definitions
		core.definitions = definitions;
}