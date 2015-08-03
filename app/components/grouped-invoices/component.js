import Ember from 'ember';

export default Ember.Component.extend({
  totalValue: 0,
  isRevenue: false,
  fieldName: null,
  
  _expensesOrRevenue: Ember.computed('list', 'isRevenue', function() {
    var self = this;
    return this.get('list').filter(function(invoice) {
      return invoice.get('revenue') === self.get('isRevenue');
    });
  }),
  
  groupedInvoices: Ember.computed('_expensesOrRevenue', 'groupByField', function() {
    var grouped = {};
    var totalValue = 0;
    var field = this.get('groupByField');
    var fieldName = this.get('fieldName') || field;
    this.get('_expensesOrRevenue').forEach(function(invoice) {
      var value = Number(invoice.get('value'));
      if(invoice.get(field) in grouped) {
        grouped[invoice.get(field)].value += value;
      }
      else {
        var colorsHash = {"Alimentação": "#ef6c00","Educação": "#304ffe", "Lazer": "#558b2f",
                          "Moradia": "#8d6e63", "Roupas e Acessórios": "#6200ea",
                          "Transporte": "#ff5252", "Diversos": "#d500f9", "Saúde e Beleza": "#E57373"};
        var color = colorsHash[invoice.get(fieldName)] || "grey";
        grouped[invoice.get(field)] = {label: invoice.get(fieldName), value: value, color: color};
      }
      totalValue += value;
    });
    this.set('totalValue', totalValue);
    return Object.keys(grouped).map(function(key) { return grouped[key]; });
  })
});
