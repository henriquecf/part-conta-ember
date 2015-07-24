import Ember from 'ember';

export default Ember.Mixin.create({
  filteredModel: Ember.computed('model', 'filters', function() {
    var self = this;
    return this.get('model').filter(function(invoice) {
      return invoice.get('dateMonth') === self.get('filters.month') && invoice.get('dateYear') === self.get('filters.year');
    });
  }),
  
  filters: {month: '07', year: '2015'}
});
