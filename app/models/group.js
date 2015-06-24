import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  invoices: DS.hasMany('invoices')
});
