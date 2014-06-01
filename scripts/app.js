/*!
 * batisseur
 * Copyright (c) 2014 Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var pages = require('./pages');

/**
 * Module declaration.
 */

var app = {};

/**
 * Initialize the application and shows intro
 */
app.init = function() {
	pages.intro.init();
};

/**
 * Global export.
 */

window.app = app;