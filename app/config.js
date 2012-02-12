module.exports = function(app, express, templateEngine) {

  app.configure(function() {
    app.register('.hbs', templateEngine);
    app.set('view engine', 'hbs');
    app.set('view options', {
      layout: 'base',
      pretty: 'true'
    });
    app.set('views', ROOT + '/views');
    app.set('port', 3666);
    console.log('STATIC DIR ' + ROOT + '/static');
    app.use(express.static(ROOT + '/static'));
    app.set('address', 'localhost');
    
    //app.use('app.router');
  });

  app.configure('development', function() {
    app.disable('view cache');
    app.use(express.logger('dev'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  app.configure('production', function() {
    app.enable('view cache');
  });

  console.log( 'View cache enabled: ' + app.enabled('view cache'));
}
