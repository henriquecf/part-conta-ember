import Ember from 'ember';
import InvoicesFilter from '../mixins/invoices-filter';

export default Ember.Controller.extend(InvoicesFilter, {
  queryParams: ['isRevenue', 'invoiceField', 'isRevenue', 'fieldValue'],
  isRevenue: false
});
