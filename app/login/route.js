import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  beforeModel: function(transition) {
    this._super(transition);
    this.controllerFor('application').set('pageTitle', 'Entrar');
  },
  
  actions: {
    authenticate: function() {
      var controller = this.controller;
      var data = controller.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', data).
      then(function() {
        controller.setProperties({identification: null, password: null});
      }, function() {
        controller.set('password', null);
        if(window.navigator.onLine === false) {
        }
        else {
        }
      });
    }
  }
});
