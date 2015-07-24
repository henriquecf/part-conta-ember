import Ember from 'ember';

export default Ember.Controller.extend({
  filteredModel: Ember.computed.filter('model', function(invoice) {
    return invoice.get('dateMonth') === this.get('currentMonth') && invoice.get('dateYear') === this.get('currentYear');
  }),
  
  currentMonth: 7,
  currentYear: 2015
});
