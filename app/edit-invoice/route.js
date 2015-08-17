import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import CancelButtonMixin from '../mixins/cancel-button';

export default Ember.Route.extend(AuthenticatedRouteMixin, CancelButtonMixin, {
  beforeModel: function(transition) {
    this._super(transition);
    this.controllerFor('application').set('pageTitle', 'Editar conta');
  },
  
  model: function(params) {
    this.store.find('invoice', params.id);
  }
});
