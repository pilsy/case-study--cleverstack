module.exports = function( Controller, forumService ) {
    return Controller.extend(
    /** @Class **/
    {
      service: forumService
    },
    /** @Prototype **/
    {
        // GET forum/channels
    	channelsAction: function(req, res, next){
            forumService.findAll({ isActive: true })
                .then( function(data) {
                    res.json(data);
                });          

     		//res.json( channels.length );
    			//message: "custom action [forums] de prueba :)"
    	}
    });
}