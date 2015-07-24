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
  
  formattedDate: Ember.computed('date', function() {
    return this.get('date').split('-').reverse().join('/');
  }),
  
  categoryAbbrev: Ember.computed('category', function() {
    return this.get('category').slice(0,2);
  }),
  
  dateMonth: Ember.computed('date', function() {
    return Number(this.get('date').split("-")[1]);
  }),
  
  dateYear: Ember.computed('date', function() {
    return Number(this.get('date').split("-")[0]);
  })
});
