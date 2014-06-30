module.exports = function( Service, ForumModel ) {
    return Service.extend({
        model: ForumModel
    });
}