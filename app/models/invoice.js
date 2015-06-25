import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  value: DS.attr('number'),
  group: DS.belongsTo('group'),
  user: DS.belongsTo('user'),
  date: DS.attr("string")
});
