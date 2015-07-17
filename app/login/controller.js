import Ember from 'ember';

export default Ember.Controller.extend({
  didLoginFail: false,

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
          self = this;
      this.get('session').authenticate('simple-auth-authenticator:devise', credentials).
      then(null, function() {
        self.setProperties({
          didLoginFail: true,
          password: ""
        });
      });
    }
  }
});
