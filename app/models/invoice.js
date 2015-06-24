import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  value: DS.attr('number'),
  group: DS.belongsTo('group'),
  date: DS.attr("string")
});
