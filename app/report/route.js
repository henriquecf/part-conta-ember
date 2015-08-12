import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import BackButtonMixin from '../mixins/back-button';

export default Ember.Route.extend(AuthenticatedRouteMixin, BackButtonMixin, {
  beforeModel: function(transition) {
    this._super(transition);
    if(!transition.queryParams.invoiceField || !transition.queryParams.fieldValue) {
      this.transitionTo('dashboard');
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
