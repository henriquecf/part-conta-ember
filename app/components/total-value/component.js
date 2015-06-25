import Ember from 'ember';

export default Ember.Component.extend({
  total: function() {
    var invoicesList = this.get('list').toArray();
    console.log(invoicesList[0]);
    console.log(invoicesList[0].value);
    return invoicesList.reduce(function(aggregator, invoice) {
      return aggregator + invoice.get('value');
    }, 0);
  }.property('list.@each.value')
});
