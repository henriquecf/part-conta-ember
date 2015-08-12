import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  beforeModel: function() {
    if(this.get('session.isAuthenticated')){
      this.transitionTo('dashboard');
    }
    else {
      this.transitionTo('login');
    }
  }
});
