import DS from 'ember-data';
import Ember from 'ember';
import momentFormat from 'ember-moment/computeds/format';

export default DS.Model.extend({
  category: DS.attr('string'),
  value: DS.attr('number'),
  group: DS.belongsTo('group', {async: true}),
  user: DS.belongsTo('user', {async: true}),
  date: DS.attr('string'),
  revenue: DS.attr('boolean'),
  description: DS.attr('string'),
  updatedAt: DS.attr('date'),
  
  formattedDate: momentFormat('date', 'DD/MM/YYYY'),
  
  categoryAbbrev: Ember.computed('category', function() {
    return this.get('category').slice(0,2);
  }),
  
  dateMonth: momentFormat('date', 'MM'),
  
  dateYear: momentFormat('date', 'YYYY')
});
