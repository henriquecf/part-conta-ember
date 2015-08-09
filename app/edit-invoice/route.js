import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InvoiceFormMixin from '../mixins/invoice-form';
import BackButtonMixin from '../mixins/back-button';

export default Ember.Route.extend(AuthenticatedRouteMixin, InvoiceFormMixin, BackButtonMixin, {
  model: function(params) {
    this.store.find('invoice', params.id);
  }
});
