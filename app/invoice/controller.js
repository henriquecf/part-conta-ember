import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showMore: function() {
      this.toggleProperty('showDetails');
    },
    
    deleteInvoice: function() {
      this.controllerFor('application').showToast('Conta apagada com sucesso');
      this.get('model').destroyRecord();
    }
  }
});
