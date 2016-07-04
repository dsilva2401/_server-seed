export default function setup (definitions:any, core:any) {

	class HTTPServer {

		// Attributes
			server: any;

		// Methods
			constructor () {
				this.server = core.libs.express();
			}
	}

	definitions.HTTPServer = HTTPServer;
}