import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {
    this._super(transition);
    this.controllerFor('application').set('pageTitle', 'Nova conta');
  },
  
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('categories', this.store.findAll('category'));
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
