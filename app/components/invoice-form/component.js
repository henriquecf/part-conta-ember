import Ember from 'ember';

export default Ember.Component.extend({
  revenue: false,
  actions: {
    addInvoice: function() {
      this.sendAction('action', {
        value: this.controller.get('value'), 
        category: this.controller.get('category'),
        revenue: this.controller.get('revenue')
      });
    }
  }
});
