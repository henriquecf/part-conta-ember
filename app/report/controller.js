import Ember from 'ember';
import InvoicesFilter from '../mixins/invoices-filter';

export default Ember.Controller.extend(InvoicesFilter, {
  filteredByTypeModel: Ember.computed('filteredModel', 'groupByField', 'fieldName', 'typeValue', function() {
    var type = this.get('fieldName') || this.get('groupByField');
    return this.get('filteredModel').filterBy(type, this.get('typeValue'));
  }),
  
  queryParams: ['typeValue'],
  typeValue: null,
  
  filteredByTypeValues: Ember.computed.map('filteredByTypeModel', function(invoice) {
    return Number(invoice.get('value'));
  }),
  filteredByTypeValuesSum: Ember.computed.sum('filteredByTypeValues'),
  
  filteredByExpensesOrRevenue: Ember.computed('filteredModel', 'isRevenue', function() {
    return this.get('filteredModel').filterBy('revenue', this.get('isRevenue') ? true : false);
  }),
  
  filteredValues: Ember.computed.map('filteredByExpensesOrRevenue', function(invoice) {
    return Number(invoice.get('value'));
  }),
  filteredValuesSum: Ember.computed.sum('filteredValues'),
  
  byTypePercentage: Ember.computed('filteredValuesSum', 'filteredByTypeValuesSum', function() {
    return (this.get('filteredByTypeValuesSum') / this.get('filteredValuesSum') * 100).toFixed(2);
  })
});
