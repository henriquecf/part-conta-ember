import DS from 'ember-data';

export default DS.Model.extend({
  month: DS.attr('number'),
  year: DS.attr('number'),
  expensesTotal: DS.attr('number'),
  revenueTotal: DS.attr('number'),
  balance: DS.attr('number'),
  isBalanceRevenue: DS.attr('boolean'),
  invoices: DS.hasMany('invoice'),
  expensesGroupedByCategory: DS.attr(),
  expensesGroupedByGroup: DS.attr(),
  expensesGroupedByUser: DS.attr(),
  revenueGroupedByCategory: DS.attr(),
  revenueGroupedByGroup: DS.attr(),
  revenueGroupedByUser: DS.attr()
});
