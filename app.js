(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./pages":2}],2:[function(require,module,exports){
/*!
 * batisseur
 * Copyright (c) 2014 Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */

'use strict';

/**
 * Exports.
 */

module.exports = {
	intro: require('./intro')
};
},{"./intro":3}],3:[function(require,module,exports){
/*!
 * batisseur
 * Copyright (c) 2014 Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */

'use strict';

/**
 * Private variables.
 */

var el = document.querySelector('#intro');
var canvasEl = document.querySelector('#intro .scene');
var context = canvasEl.getContext('2d');
var cx, cy;
var fusionTween;

/**
 * Module declaration.
 */

var intro = {};

/**
 *
 */
intro.init = function() {
	cx = Math.floor(canvasEl.width / 2);
	cy = Math.floor(canvasEl.height / 2);

	drawShapes();
	startAnimation();

	Loop.on('tick', intro.update);
	Loop.start();
};

/**
 *
 */
intro.update = function() {
	TWEEN.update();
};

function drawShapes() {
	context.strokeStyle = 'rgb(11, 254, 95)';
	context.lineJoin = 'round';
	context.lineWidth = 4;

	drawRect(cx - 200, cy - 50);
	drawCircle(cx, cy - 50);
	drawTriangle(cx + 100, cy - 50);
}

function drawRect(x, y) {
	context.beginPath();
	context.rect(x, y, 100, 100);
	context.stroke();
}

function drawCircle(x, y) {
	context.beginPath();
	context.arc(x, y + 50, 50, 2 * Math.PI, false);
	context.stroke();
}

function drawTriangle(x, y) {
	context.beginPath();
	context.moveTo(x + 50, y);
	context.lineTo(x + 100, y + 100);
	context.lineTo(x, y + 100);
	context.closePath();
	context.stroke();
}

function drawLogo(x, y) {
	context.strokeStyle = 'rgb(11, 254, 95)';
	context.lineJoin = 'round';
	context.lineWidth = 14;

	context.beginPath();
	context.moveTo(x - 5, y - 30);
	context.lineTo(x + 30, y + 30);
	context.arcTo(x + 500, y + 30, x + 35, y + 100, 35);
	context.lineTo(x - 40, y + 100);
	context.lineTo(x - 40, y + 30);
	context.closePath();
	context.stroke();
	context.beginPath();
	context.arc(x - 5, y - 30, 20, 1, 2, false);
	context.stroke();
}

function clear() {
	context.clearRect(0, 0, canvasEl.width, canvasEl.height);
}

function startAnimation() {
	fusionTween = new TWEEN.Tween({ x1: cx - 200, x2: cx + 100})
		.to({ x1: cx - 100, x2: cx }, 100)
		.delay(2000)
		.onUpdate(function () {
			clear();
			drawRect(this.x1, cy - 50);
			drawCircle(cx, cy - 50);
			drawTriangle(this.x2, cy - 50);
		})
		.onComplete(function() {
			clear();
			drawLogo(cx - 10, cy - 50);

			setTimeout(function() {
				el.classList.add('final');
			}, 500);
		})
		.start();
}

/**
 * Exports.
 */

module.exports = intro;
},{}]},{},[1])