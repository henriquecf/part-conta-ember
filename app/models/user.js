import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  email: DS.attr('string'),
  groups: DS.hasMany('group')
});
