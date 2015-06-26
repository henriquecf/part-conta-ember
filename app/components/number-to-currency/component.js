import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  classNameBindings: ['isRevenue:revenue:expense'],
  isRevenue: false,
  
  formattedValue: Ember.computed('value', function() {
    return Number(this.get('value')).toFixed(2);
  })
});
