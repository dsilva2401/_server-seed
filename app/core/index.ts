import {setup as definitionsSetup} from './definitions/index.ts';
import {setup as libsSetup} from './libs/index.ts';

// Init core object
	let core:any = {};

// Setup libs
	libsSetup(core);

// Setup definitions
	definitionsSetup(core);

// Export core
	export default core;