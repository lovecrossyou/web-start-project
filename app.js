/**
 * Created by zhulizhe on 2017/8/14.
 */
var express = require('express');
var app = express();
app.use('/', express.static('public'));
var server = app.listen(2000, function() {
    var port = server.address().port;
    console.log('Open http://localhost:%s', port);
});