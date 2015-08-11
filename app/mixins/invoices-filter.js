import Ember from 'ember';
import moment from 'moment';

export default Ember.Mixin.create({
  needs: 'application',
  
  month: Ember.computed.alias('controllers.application.month'),
  year: Ember.computed.alias('controllers.application.year'),
  
  init: function() {
    this._super.apply(this, arguments);
    if(!this.get('month')) {
      this.set('month', moment().format('MM'));
    }
    if(!this.get('year')) {
      this.set('year', moment().format('YYYY'));
    }
  },
  
  filterStr: Ember.computed('month', 'year', function() {
    return moment([this.get('year'), this.get('month') - 1]).format('MMMM');
  }),
  
  filteredModel: Ember.computed('model.@each.dateMonth', 'model.@each.dateYear', 'month', 'year', function() {
    var month = this.get('month').toString().split(',');
    var year = this.get('year').toString().split(',');
    var filteredInvoices = this.get('model');
    if(month && month.toString() !== 'all') {
      filteredInvoices = filteredInvoices.filter(function(invoice) {
        return month.contains(invoice.get('dateMonth'));
      });
    }
    if(year && year.toString() !== 'all') {
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
  }),
  
  actions: {
    nextMonth: function() {
      var month = this.get('month'), year = this.get('year');
      var changedDate = moment([year, month]).month(month + 1).format('YYYY:MM').split(':');
      this.setProperties({year: changedDate[0], month: changedDate[1]});
    },
    lastMonth: function() {
      var month = this.get('month'), year = this.get('year');
      var changedDate = moment([year, month]).month(month - 2).format('YYYY:MM').split(':');
      this.setProperties({year: changedDate[0], month: changedDate[1]});
    }
  }
});
