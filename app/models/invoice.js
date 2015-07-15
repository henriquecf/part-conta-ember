import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  category: DS.attr('string'),
  value: DS.attr('number'),
  group: DS.belongsTo('group'),
  user: DS.belongsTo('user'),
  date: DS.attr('string'),
  revenue: DS.attr('boolean'),
  description: DS.attr('string'),
  updatedAt: DS.attr('date'),
  
  formatted_date: Ember.computed('date', function() {
    return this.get('date').split('-').reverse().join('/');
  }),
  
  category_abbrev: Ember.computed('category', function() {
    return this.get('category').slice(0,2);
  })
});
