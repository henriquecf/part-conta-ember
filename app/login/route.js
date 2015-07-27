import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticate: function() {
      var data = this.controllerFor('login').getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', data).
      then(null, function() {
        this.controllerFor('login').set('loginFailed', true);
      });
    }
  }
});
