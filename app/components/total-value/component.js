import Ember from 'ember';

export default Ember.Component.extend({
  expenses: Ember.computed.filterBy('list', 'revenue', false),
  revenue: Ember.computed.filterBy('list', 'revenue', true),
  
  expenses_values: Ember.computed.map('expenses', function(invoice) {
    return Number(invoice.get('value'));
  }),
  revenue_values: Ember.computed.map('revenue', function(invoice) {
    return Number(invoice.get('value'));
  }),
  
  expenses_total: Ember.computed.sum('expenses_values'),
  revenue_total: Ember.computed.sum('revenue_values')
});
