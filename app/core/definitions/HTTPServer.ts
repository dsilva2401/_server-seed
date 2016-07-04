export default function setup (definitions:any, core:any) {

	class HTTPServer {

		// Attributes
			server: any;

		// Methods
			constructor () {
				this.server = core.libs.express();
			}
			start (port:number = 3000) {
				this.server.listen(port);
			}
	}

	definitions.HTTPServer = HTTPServer;
}