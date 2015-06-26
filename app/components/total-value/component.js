import Ember from 'ember';

export default Ember.Component.extend({
  expenses: Ember.computed.filterBy('list', 'revenue', false),
  revenue: Ember.computed.filterBy('list', 'revenue', true),
  
  expensesValues: Ember.computed.map('expenses', function(invoice) {
    return Number(invoice.get('value'));
  }),
  revenueValues: Ember.computed.map('revenue', function(invoice) {
    return Number(invoice.get('value'));
  }),
  
  expensesTotal: Ember.computed.sum('expensesValues'),
  revenueTotal: Ember.computed.sum('revenueValues'),
  
  balance: Ember.computed('expensesTotal', 'revenueTotal', function() {
    return (this.get('revenueTotal') - this.get('expensesTotal'));
  }),
  isBalanceRevenue: Ember.computed('expensesTotal', 'revenueTotal', function() {
    return (this.get('revenueTotal') > this.get('expensesTotal'));
  })
});
