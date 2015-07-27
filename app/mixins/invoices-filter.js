import Ember from 'ember';

export default Ember.Mixin.create({
  month: "07",
  year: "2015",
  
  filteredModel: Ember.computed('model', 'month', 'year', function() {
    var self = this;
    return this.get('model').filter(function(invoice) {
      if(self.get('month')) {
        return invoice.get('dateMonth') === self.get('month') && invoice.get('dateYear') === self.get('year');
      }
      else {
        return invoice.get('dateYear') === self.get('year');
      }
    });
  })
});
