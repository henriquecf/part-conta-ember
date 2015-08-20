import Ember from 'ember';

export default Ember.Mixin.create({
  categories: [],
  buttonDisabled: false,
  buttonName: 'Salvar',
  
  observeErrors: Ember.observer('errors', function() {
    this.set('buttonName', 'Corrija os erros');
    this.toggleProperty('buttonDisabled');
    var self = this;
    Ember.run.later(function() {
      self.set('buttonName', 'Salvar');
    }, 4000);
  })
});
