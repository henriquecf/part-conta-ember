import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  beforeModel: function() {
    this.controllerFor('application').set('pageTitle', 'Entrar');
  },
  
  actions: {
    authenticate: function() {
      var controller = this.controller, self = this;
      var data = controller.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', data).
      then(function() {
        controller.setProperties({identification: null, password: null});
        self.controllerFor('application').showToast('Login efetuado com sucesso');
        self.transitionTo('dashboard');
      }, function() {
        controller.set('password', null);
        if(window.navigator.connection === 'none') {
          self.controllerFor('application').showToast('Você precisa se conectar à internet para entrar');
        }
        else {
          self.controllerFor('application').showToast('Usuário e/ou senha incorretos');
        }
      });
    }
  }
});
