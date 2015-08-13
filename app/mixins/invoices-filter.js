import Ember from 'ember';
import moment from 'moment';

export default Ember.Mixin.create({
  application: Ember.inject.controller(),
  
  queryParams: ['year', 'month'],
  month: Ember.computed.alias('application.month'),
  year: Ember.computed.alias('application.year'),
  
  filterStr: Ember.computed('month', 'year', function() {
    return moment([this.get('year'), this.get('month') - 1]).format('MMMM');
  }),
  
  _filteredModelExpenses: Ember.computed.filterBy('model', 'revenue', false),
  _filteredModelRevenue: Ember.computed.filterBy('model', 'revenue', true),
  
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
      this.transitionToRoute(null, {queryParams: {year: changedDate[0], month: changedDate[1]}});
      this.send('filtersChanged');
    },
    lastMonth: function() {
      var month = this.get('month'), year = this.get('year');
      var changedDate = moment([year, month]).month(month - 2).format('YYYY:MM').split(':');
      this.transitionToRoute(null, {queryParams: {year: changedDate[0], month: changedDate[1]}});
      this.send('filtersChanged');
    }
  }
});
