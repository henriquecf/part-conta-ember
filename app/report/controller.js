import Ember from 'ember';
import InvoicesFilter from '../mixins/invoices-filter';

export default Ember.Controller.extend(InvoicesFilter, {
  filteredByTypeModel: Ember.computed('filteredModel', 'groupByField', 'fieldName', 'value', function() {
    var type = this.get('fieldName') || this.get('groupByField');
    return this.get('filteredModel').filterBy(type, this.get('value'));
  }),
  
  queryParams: ['value'],
  value: null
});
