import Ember from 'ember';

export default Ember.Component.extend({
  invoicesList: function() {
    var listSize = this.get('list-size');
    var list = this.get('list').toArray();
    if(listSize) {
      list = list.slice(0, listSize);
    }
    return list;
  }.property('list')
});
