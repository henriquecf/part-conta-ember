import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import CancelButtonMixin from '../mixins/cancel-button';

export default Ember.Route.extend(AuthenticatedRouteMixin, CancelButtonMixin, {
  beforeModel: function(transition) {
    this._super(transition);
    this.controllerFor('application').set('pageTitle', 'Nova conta');
  },
  
  actions: {
    createInvoice: function(invoiceFields) {
      var invoice = this.get('store').createRecord('invoice', invoiceFields);
      invoice.validate();
      var self = this;
      if(invoice.get('isValid')) {
        invoice.save().then(function() {
          self.transitionTo('dashboard');
        });
      }
      else {
        console.log('error', invoice.get('errors'));
        invoice.deleteRecord();
        this.controller.set('errors', invoice.get('errors'));
      }
    }
  }
});
