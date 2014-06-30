module.exports = function( Controller, eventService ) {
    return Controller.extend(
    /** @Class **/
    {
      service: eventService
    },
    /** @Prototype **/
    {
        // GET event/channels
    	listAction: function(req, res, next){
            eventService.findAll()
                .then( function(data) {
                    res.json(data);
                });          
    	}
    });
}