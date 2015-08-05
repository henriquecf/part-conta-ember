import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import moment from 'moment';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
      this.transitionTo('/');
    },
    newRevenue: function() {
      this.transitionTo('new-invoice', {queryParams: {revenue: true}});
    },
    newExpense: function() {
      this.transitionTo('new-invoice', {queryParams: {revenue: false}});
    },
    willTransition: function() {
      this.controller.set('sidebarVisible', false);
    }
  },
  
  beforeModel() {
    moment.locale('pt');
  }
});
