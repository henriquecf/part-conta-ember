import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showMore: function() {
      this.toggleProperty('showDetails');
    },
    
    deleteInvoice: function() {
      this.get('model').destroyRecord();
    }
  }
});
