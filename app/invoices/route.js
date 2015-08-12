import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InvoicesRouteFilterMixin from '../mixins/invoices-route-filter';

export default Ember.Route.extend(AuthenticatedRouteMixin, InvoicesRouteFilterMixin, {
  beforeModel: function(transition) {
    this._super(transition);
    this.controllerFor('application').set('pageTitle', 'Contas');
  },
  
  renderTemplate() {
    this.render();
    this.render('main-fab', {outlet: 'main-fab'});
  }
});
