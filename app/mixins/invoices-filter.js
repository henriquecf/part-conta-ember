import Ember from 'ember';
import moment from 'moment';

export default Ember.Mixin.create({
  queryParams: ['month', 'year'],
  month: null,
  year: null,
  
  filteredModel: Ember.computed('model.@each.dateMonth', 'model.@each.dateYear', 'month', 'year', function() {
    var month = this.get('month') || [moment().format('MM')];
    var year = this.get('year') || [moment().format('YYYY')];
    var filteredInvoices = this.get('model');
    if(month && month !== 'all') {
      filteredInvoices = filteredInvoices.filter(function(invoice) {
        return month.contains(invoice.get('dateMonth'));
      });
    }
    if(year && year !== 'all') {
      filteredInvoices = filteredInvoices.filter(function(invoice) {
        return year.contains(invoice.get('dateYear'));
      });
    }
    return filteredInvoices.sortBy('date', 'id').reverse();
  }),
  
  _filteredModelExpenses: Ember.computed.filterBy('filteredModel', 'revenue', false),
  _filteredModelRevenue: Ember.computed.filterBy('filteredModel', 'revenue', true),
  
  _filteredModelExpensesValues: Ember.computed.map('_filteredModelExpenses', function(invoice) {
    return Number(invoice.get('value'));
  }),
  _filteredModelRevenueValues: Ember.computed.map('_filteredModelRevenue', function(invoice) {
    return Number(invoice.get('value'));
  }),
  
  filteredModelExpensesValuesSum: Ember.computed.sum('_filteredModelExpensesValues'),
  filteredModelRevenueValuesSum: Ember.computed.sum('_filteredModelRevenueValues'),
  
  filteredModelValuesBalance: Ember.computed('filteredModelExpensesValuesSum', 'filteredModelRevenueValuesSum', function() {
    return Math.abs((this.get('filteredModelRevenueValuesSum') - this.get('filteredModelExpensesValuesSum')));
  }),
  isfilteredModelValuesBalanceRevenue: Ember.computed('filteredModelExpensesValuesSum', 'filteredModelRevenueValuesSum', function() {
    return (this.get('filteredModelRevenueValuesSum') > this.get('filteredModelExpensesValuesSum'));
  })
});
