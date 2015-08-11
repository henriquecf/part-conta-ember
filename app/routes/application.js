import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import moment from 'moment';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
      this.controllerFor('application').showToast('Desconectado com sucesso');
    },
    newRevenue: function() {
      this.transitionTo('new-invoice', {queryParams: {revenue: true}});
    },
    newExpense: function() {
      this.transitionTo('new-invoice', {queryParams: {revenue: false}});
    },
    willTransition: function(transition) {
      var month = transition.router.state.queryParams.month;
      var year = transition.router.state.queryParams.year;
      if(month) {
        transition.queryParams.month = month;
      }
      if(year) {
        transition.queryParams.year = year;
      }
    },
    goToRoute(route) {
      this.transitionTo(route);
    }
  }
});
