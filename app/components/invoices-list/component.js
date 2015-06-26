import Ember from 'ember';

export default Ember.Component.extend({
  invoicesList: Ember.computed('list.[]', function() {
    var listSize = this.get('list-size');
    var list = this.get('list');
    if(listSize) {
      list = list.slice(0, listSize);
    }
    return list;
  })
});
