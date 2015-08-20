import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['mdl-cell', 'mdl-cell--4-col'],
  
  invoicesList: Ember.computed('list.[]', 'list-size', function() {
    var listSize = this.get('list-size');
    var list = this.get('list');
    if(listSize) {
      list = list.slice(0, listSize);
    }
    return list;
  })
});
