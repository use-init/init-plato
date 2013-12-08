/**
 * Complexity reports with Plato
 */
'use strict';

var config = require('../../config');

module.exports = {
	js: {
		options: {
			jshint: process.grunt.file.readJSON('.jshintrc'),
			exclude: /plugins\/.*\.js/
		},

		files: {
			reports: config.js.files
		}
	}
};
