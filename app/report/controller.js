import Ember from 'ember';
import InvoicesFilter from '../mixins/invoices-filter';

export default Ember.Controller.extend(InvoicesFilter, {
  filteredByTypeModel: Ember.computed('filteredModel', 'groupByField', 'fieldName', 'typeValue', function() {
    var type = this.get('fieldName') || this.get('groupByField');
    return this.get('filteredModel').filterBy(type, this.get('typeValue'));
  }),
  
  queryParams: ['typeValue'],
  typeValue: null
});
