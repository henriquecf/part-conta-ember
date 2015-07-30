import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InvoiceFormMixin from '../mixins/invoice-form';

export default Ember.Route.extend(AuthenticatedRouteMixin, InvoiceFormMixin, {
  model: function(params) {
    this.store.find('invoice', params.id);
  }
});
