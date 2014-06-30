module.exports = function( Service, EventModel ) {
    return Service.extend({
        model: EventModel
    });
}