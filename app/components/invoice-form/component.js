import Ember from 'ember';
import InvoiceFormMixin from '../../mixins/invoice-form';

export default Ember.Component.extend(InvoiceFormMixin, {
  actions: {
    editInvoice: function() {
      this.toggleProperty('buttonDisabled');
      this.set('buttonName', 'Salvando...');
      this.sendAction('action', this.get('model'));
    }
  }
});
