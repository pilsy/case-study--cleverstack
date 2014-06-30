module.exports = function( app, AppMainController, forumController ) {
    // Define routes here
    app.all('/app_main/:action/:id?', AppMainController.attach());
    app.all('/app_main/?:action?', AppMainController.attach());

    app.all('/forum/:action/:id?', forumController.attach());
    app.all('/forum/?:action?', forumController.attach());
}