// Require modules

var responsiveNav = require('responsive-nav');
var Flickity = require('flickity');

// Scripts

var nav = responsiveNav('.nav-collapse', {
	transition: 400,
	insert: 'after'
});

var flickity = new Flickity('.flickity', {
	contain: true,
	wrapAround: true
});
