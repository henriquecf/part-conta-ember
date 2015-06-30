import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addInvoice: function(invoice) {
      var invoice = this.store.createRecord('invoice', invoice);
      this.transitionTo('invoices');
    }
  }
});
