import Ember from 'ember';

export default Ember.Component.extend({
  values: Ember.computed.map('list', function(invoice, index) {
    return invoice.get('value');
  }),
  
  total: Ember.computed.sum('values')
});
