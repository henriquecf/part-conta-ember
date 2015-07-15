import Ember from 'ember';

export default Ember.Component.extend({
  _expenses: Ember.computed.filterBy('list', 'revenue', false),
  _revenue: Ember.computed.filterBy('list', 'revenue', true),
  
  _expensesValues: Ember.computed.map('_expenses', function(invoice) {
    return Number(invoice.get('value'));
  }),
  _revenueValues: Ember.computed.map('_revenue', function(invoice) {
    return Number(invoice.get('value'));
  }),
  
  expensesTotal: Ember.computed.sum('_expensesValues'),
  revenueTotal: Ember.computed.sum('_revenueValues'),
  
  balance: Ember.computed('expensesTotal', 'revenueTotal', function() {
    return Math.abs((this.get('revenueTotal') - this.get('expensesTotal')));
  }),
  isBalanceRevenue: Ember.computed('expensesTotal', 'revenueTotal', function() {
    return (this.get('revenueTotal') > this.get('expensesTotal'));
  })
});
