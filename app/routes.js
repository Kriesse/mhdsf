module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('helloworld');
  });

  app.get('/test/sockettest', function(req, res) {
    res.render('test/sockettest', {
      address: 'http://' + app.settings.address,
      port: app.settings.port
    }); 
  });
  app.get('/test/opentok', function(req, res) {
    res.render('test/opentok', {
      address: 'http://' + app.settings.address,
      port: app.settings.port
    }); 
  });
}

