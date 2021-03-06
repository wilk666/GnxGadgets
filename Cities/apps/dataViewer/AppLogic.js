/**
 * @class
 */
Ext.define('Gnx.AppLogic', {
	
    requires: [
        'Gnx.view.View'
	],
	
    constructor: function () {
	    
        //console.warn('has utils?', ShindigUtils);

	    Ext.getBody().on("contextmenu", Ext.emptyFn, null, { preventDefault: true });

	    var gridMod = Ext.create('Gnx.view.View');

	    var view = Ext.create('Ext.container.Viewport', {
	        layout: 'fit',
	        items: [
				gridMod.view
	        ]
	    });

	},

    // dev method - show some text
	getLoremIpsum: function(){
		return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	},

	postCallbackSuccess: function (response) {
	    console.warn('postCallbackSuccess', response);
	},

	postCallbackFailure: function (response) {
	    console.warn('postCallbackFailure', response);
	}
	
});