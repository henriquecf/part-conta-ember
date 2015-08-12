import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {
    this._super(transition);
    this.controllerFor('application').set('pageTitle', 'Contas');
  },
  
  model: function() {
    return this.store.findAll('invoice');
  },
  
  renderTemplate() {
    this.render();
    this.render('main-fab', {outlet: 'main-fab'});
  }
});
