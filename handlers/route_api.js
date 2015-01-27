module.exports = function(app){

    var User = require('../models/user.js');

    var helpers = require('../lib/helpers.js');

    app.get('/api_launchStream', helpers.ensureAuthenticated, function(req, res) {
        if (res.locals.user.isStreaming === false) {
            res.locals.user.isStreaming = true;
        }
    });
};