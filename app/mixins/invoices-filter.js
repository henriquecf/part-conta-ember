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
    return filteredInvoices;
  })
});
