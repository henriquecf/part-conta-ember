/* jshint node: true */

var prodApiHost = "sharedinvoices.herokuapp.com";
var devApiHost = "localhost:3000";

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'part-conta-ember',
    environment: environment,
    baseURL: '/',
    defaultLocationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    
    contentSecurityPolicy: {
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'font-src': "'self' fonts.gstatic.com"
    },
    
    'simple-auth': {
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
    },
    
    cordova: {
      rebuildOnChange: false,
      emulate: false,
      platform: 'android'
    },
    
    moment: {
      includeLocales: ['pt-br']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
    ENV['simple-auth'].crossOriginWhitelist = ['http://' + devApiHost];
    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: 'http://' + devApiHost + '/oauth/token.json',
      serverTokenRevocationEndpoint: 'http://' + devApiHost +'/oauth/revoke'
    };
    ENV.contentSecurityPolicy['connect-src'] = "'self' " + devApiHost;
    ENV.apiHost = 'http://' + devApiHost;
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
    ENV['simple-auth'].crossOriginWhitelist = ['https://' + prodApiHost];
    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: 'https://' + prodApiHost + '/oauth/token.json',
      serverTokenRevocationEndpoint: 'https://' + prodApiHost +'/oauth/revoke'
    };
    ENV.contentSecurityPolicy['connect-src'] = "'self' " + prodApiHost;
    ENV.apiHost = 'https://' + prodApiHost;
  }

  return ENV;
};
