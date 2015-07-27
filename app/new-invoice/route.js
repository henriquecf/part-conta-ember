import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    addInvoice: function(invoiceFields) {
      var invoice = this.store.createRecord('invoice', invoiceFields);
      invoice.save();
      this.transitionTo('dashboard');
    }
  }
});
