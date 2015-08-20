import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    },
    newRevenue: function() {
      this.transitionTo('new-invoice', {queryParams: {revenue: true}});
    },
    newExpense: function() {
      this.transitionTo('new-invoice', {queryParams: {revenue: false}});
    },
    goToRoute(route) {
      this.transitionTo(route);
    }
  }
});
