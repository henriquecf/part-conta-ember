import Ember from "ember";  
import Session from "simple-auth/session";

export default {
  name: "current-user",
  before: "simple-auth",
  initialize: function(container) {
    Session.reopen({
      setCurrentUser: function() {
        var accessToken = this.get('secure.access_token');
        var self = this;

        if (!Ember.isEmpty(accessToken)) {
          return container.lookup('service:store').find('user', 'me').then(function(user) {
            self.set('content.currentUser', user);
          });
        }
      }.observes('secure.access_token')
    });
  }
};
