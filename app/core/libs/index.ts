import fs = require('fs');
import path = require('path');
import express = require('express');

export function setup (core:any) {
	// Init definitions
		let libs:any = {};

	// Setup libs
		libs.fs = fs;
		libs.path = path;
		libs.express = express;

	// Export libs
		core.libs = libs;
}