import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {
    if(!transition.queryParams.invoiceField || !transition.queryParams.fieldValue) {
      this.transitionTo('reports');
    }
  },
  model: function(params) {
    var field = params.invoiceField, fieldValue = params.fieldValue;
    return this.store.findAll('invoice').then(function(invoices) {
      return invoices.filterBy(field, fieldValue);
    }, null);
  },
  
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('application').set('pageTitle', controller.get('fieldValue'));
  }
});
