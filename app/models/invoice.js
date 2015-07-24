import DS from 'ember-data';
import Ember from 'ember';
import computedMoment from 'ember-moment/computeds/moment';

export default DS.Model.extend({
  category: DS.attr('string'),
  value: DS.attr('number'),
  group: DS.belongsTo('group'),
  user: DS.belongsTo('user'),
  date: DS.attr('date'),
  revenue: DS.attr('boolean'),
  description: DS.attr('string'),
  updatedAt: DS.attr('date'),
  
  formattedDate: computedMoment('date', 'DD/MM/YYYY'),
  
  categoryAbbrev: Ember.computed('category', function() {
    return this.get('category').slice(0,2);
  }),
  
  dateMonth: computedMoment('date', 'MM'),
  
  dateYear: computedMoment('date', 'YYYY')
});
