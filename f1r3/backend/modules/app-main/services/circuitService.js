module.exports = function( Service, CircuitModel ) {
    return Service.extend({
        model: CircuitModel
    });
}