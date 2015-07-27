import Ember from 'ember';

export default Ember.Mixin.create({
  month: ["07"],
  year: ["2015"],
  
  filteredModel: Ember.computed('model.@each.dateMonth', 'model.@each.dateYear', 'month', 'year', function() {
    var self = this;
    var filteredInvoices = this.get('model');
    if(this.get('month')) {
      filteredInvoices = filteredInvoices.filter(function(invoice) {
        return self.get('month').contains(invoice.get('dateMonth'));
      });
    }
    if(this.get('year')) {
      filteredInvoices = filteredInvoices.filter(function(invoice) {
        return self.get('year').contains(invoice.get('dateYear'));
      });
    }
    return filteredInvoices;
  })
});
