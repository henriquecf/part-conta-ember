import Ember from 'ember';

export default Ember.Component.extend({
  _expenses: Ember.computed.filterBy('list', 'revenue', false),
  _revenue: Ember.computed.filterBy('list', 'revenue', true),
  
  _expensesValues: Ember.computed.mapBy('_expenses', 'value'),
  _revenueValues: Ember.computed.mapBy('_revenue', 'value'),
  
  expensesTotal: Ember.computed.sum('_expensesValues'),
  revenueTotal: Ember.computed.sum('_revenueValues'),
  
  balance: Ember.computed('expensesTotal', 'revenueTotal', function() {
    return Math.abs((this.get('revenueTotal') - this.get('expensesTotal')));
  }),
  isBalanceRevenue: Ember.computed('expensesTotal', 'revenueTotal', function() {
    return (this.get('revenueTotal') > this.get('expensesTotal'));
  })
});
