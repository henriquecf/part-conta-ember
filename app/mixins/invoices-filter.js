import Ember from 'ember';

export default Ember.Mixin.create({
  filteredModel: Ember.computed.filter('model', function(invoice) {
    return invoice.get('dateMonth') === this.get('currentMonth') && invoice.get('dateYear') === this.get('currentYear');
  }),
  
  currentMonth: '07',
  currentYear: '2015'
});
