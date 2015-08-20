import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {
    this._super(transition);
    this.controllerFor('application').set('pageTitle', 'Editar conta');
  },
  
  model: function(params) {
    this.store.find('invoice', params.id);
  },
  
  actions: {
    updateInvoice: function(invoice) {
      invoice.validate();
      if(invoice.get('isValid')) {
        var self = this;
        invoice.save().then(function() {
          self.transitionTo('dashboard');
        });
      }
      else {
        console.log('errors', invoice.get('errors'));
        this.controller.set('errors', invoice.get('errors'));
      }
    }
  }
});
