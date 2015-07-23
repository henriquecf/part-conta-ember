import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    addInvoice: function(invoice) {
      this.store.createRecord('invoice', invoice);
      this.transitionTo('dashboard');
    }
  }
});
