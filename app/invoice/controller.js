import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showMore: function() {
      this.set('showDetails', true);
    },
    
    deleteInvoice: function() {
      this.get('model').destroyRecord();
    }
  }
});
