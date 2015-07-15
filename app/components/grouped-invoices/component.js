import Ember from 'ember';

export default Ember.Component.extend({
  totalValue: 0,
  isRevenue: false,
  
  _expensesOrRevenue: Ember.computed.filter('list', function(invoice) { 
    return invoice.get('revenue') === this.get('isRevenue'); 
  }),
  
  groupedInvoices: Ember.computed('_expensesOrRevenue', function() {
    var grouped = {};
    var totalValue = 0;
    var field = this.get('groupByField');
    this.get('_expensesOrRevenue').forEach(function(invoice) {
      var value = Number(invoice.get('value'));
      if(invoice.get(field) in grouped) {
        grouped[invoice.get(field)].sumValue += value;
      }
      else {
        grouped[invoice.get(field)] = {name: invoice.get(field), sumValue: value};
      }
      totalValue += value;
    });
    this.set('totalValue', totalValue);
    return Object.keys(grouped).map(function(key) { return grouped[key]; });
  })
});
