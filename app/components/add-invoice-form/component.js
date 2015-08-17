import Ember from 'ember';

export default Ember.Component.extend({
  categories: ["Alimentação", "Educação", "Lazer", "Moradia", "Roupas e Acessórios", "Saúde e Beleza", 
               "Transporte", "Diversos"],
  actions: {
    addInvoice: function() {
      var invoiceFields = this.getProperties('value', 'description', 'category', 'date', 'group', 'user', 'revenue');
      var invoice = this.get('store').createRecord('invoice', invoiceFields);
      invoice.validate();
      if(invoice.get('isValid')) {
        invoice.save();
        this.transitionTo('dashboard');
      }
      else {
        this.set('errors', invoice.get('errors'));
        invoice.deleteRecord();
      }
    }
  },
  
  setCategory: Ember.observer('revenue', function() {
    if(this.get('revenue')) {
      this.set('category', 'Receita');
    }
    else {
      this.set('category', null);
    }
  }),
  
  didInsertElement: function() {
    if(this.get('revenue')) {
      this.set('category', 'Receita');
    }
    else {
      this.set('category', null);
    }
  }
});
