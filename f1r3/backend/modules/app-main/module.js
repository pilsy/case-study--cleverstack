var injector    = require( 'injector' )
  , Sequelize   = require( 'sequelize' )
  , Models 		= require('models')
  , Model       = require( 'classes' ).Model;

var appModule = require( 'classes' ).Module;

module.exports = appModule.extend({
	modulesLoaded: function() {
		//console.log("**** Model: "+ Models.length);
		this.emit('ready');
	}
});