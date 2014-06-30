module.exports = function( Controller, AppMainService ) {
    return Controller.extend(
    /** @Class **/
    {
      service: AppMainService
    },
    /** @Prototype **/
    {
    	listAction: function(){
    		this.send({
    			message: "custom action de prueba :)"
    		});
    	}
    });
}