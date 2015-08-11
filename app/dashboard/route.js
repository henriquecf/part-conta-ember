import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('invoice');
  },
  
  renderTemplate() {
    this.render();
    this.render('main-fab', {outlet: 'main-fab'});
  }
});
