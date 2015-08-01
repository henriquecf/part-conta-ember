/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'part-conta-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    
    sassOptions: {
      includePaths: ['bower_components/material-design-lite/src']
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    
    contentSecurityPolicy: {
      'connect-src': "'self' localhost:3000 si-staged.herokuapp.com sharedinvoices.herokuapp.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'font-src': "'self' fonts.gstatic.com"
    },
    
    'simple-auth': {
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
      crossOriginWhitelist: ['http://localhost:3000']
    },
    
    'simple-auth-oauth2': {
      serverTokenEndpoint: 'http://localhost:3000/oauth/token.json',
      serverTokenRevocationEndpoint: 'http://localhost:3000/oauth/revoke'
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
