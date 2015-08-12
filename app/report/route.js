import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import BackButtonMixin from '../mixins/back-button';
import InvoicesRouteFilterMixin from '../mixins/invoices-route-filter';

export default Ember.Route.extend(AuthenticatedRouteMixin, BackButtonMixin, InvoicesRouteFilterMixin, {
  beforeModel: function(transition) {
    this._super(transition);
    if(!transition.queryParams.invoiceField || !transition.queryParams.fieldValue) {
      this.transitionTo('reports');
    }
  },
  
  model: function(params) {
    var field = params.invoiceField, fieldValue = params.fieldValue;
    var filteredInvoices = this._super(params);
    return filteredInvoices.then(function(invoices) {
      return invoices.filterBy(field, fieldValue);
    });
  },
  
  setupController: function(controller, model) {
    this._super(controller, model);
    var revenueStr = controller.get('isRevenue') ? 'Ganhos' : 'Despesas';
    var pageTitle = revenueStr + ': ' + controller.get('fieldValue');
    this.controllerFor('application').setProperties({pageTitle: pageTitle, backButton: 'reports'});
  }
});
