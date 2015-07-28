import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticate: function() {
      var controller = this.controller, self = this;
      var data = controller.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', data).
      then(function() {
        controller.setProperties({identification: null, password: null});
        self.transitionTo('dashboard');
      }, function() {
        controller.set('loginFailed', true);
        controller.set('password', null);
        Ember.run.later(function() {
          controller.set('loginFailed', false);
        }, 5000);
      });
    }
  }
});
