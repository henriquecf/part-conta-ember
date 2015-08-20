import Ember from 'ember';

export default Ember.Component.extend({
  categories: [],
  
  actions: {
    editInvoice: function() {
      this.sendAction('action', this.get('model'));
    }
  }
});
