import setupHTTPServer from './HTTPServer.ts';

export function setup (core:any) {
	// Init definitoins
		let definitions:any = {};

	// Setup definitions
		setupHTTPServer(definitions, core);

	// Export definitions
		core.definitions = definitions;
}