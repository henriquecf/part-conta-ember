import Ember from 'ember';

export default Ember.Component.extend({
  expensesTotalValue: 0,
  revenueTotalValue: 0,
  
  _expenses: Ember.computed.filterBy('list', 'revenue', false),
  _revenue: Ember.computed.filterBy('list', 'revenue', true),
  
  groupedExpenses: Ember.computed('_expenses', 'groupByField', function() {
    var grouped = {};
    var expensesTotalValue = 0;
    var field = this.get('groupByField');
    this.get('_expenses').forEach(function(invoice) {
      if(invoice.get(field) in grouped) {
        grouped[invoice.get(field)].quantity += 1;
        grouped[invoice.get(field)].sumValue += invoice.value;
      }
      else {
        grouped[invoice.get(field)] = {quantity: 1, sumValue: invoice.value};
      }
      expensesTotalValue += invoice.value;
    });
    this.set('expensesTotalValue', expensesTotalValue);
    return grouped;
  }),
  groupedRevenue: Ember.computed('_revenue', 'groupByField', function() {
    var grouped = {};
    var revenueTotalValue = 0;
    var field = this.get('groupByField');
    this.get('_revenue').forEach(function(invoice) {
      if(invoice.get(field) in grouped) {
        grouped[invoice.get(field)].quantity += 1;
        grouped[invoice.get(field)].sumValue += invoice.value;
      }
      else {
        grouped[invoice.get(field)] = {quantity: 1, sumValue: invoice.value};
      }
      revenueTotalValue += invoice.value;
    });
    this.set('revenueTotalValue', revenueTotalValue);
    return grouped;
  })
});
