import Ember from 'ember';

export default Ember.Component.extend({
  categories: ["Alimentação", "Educação", "Lazer", "Moradia", "Roupas e Acessórios", "Saúde e Beleza", 
               "Transporte", "Diversos"],
  
  actions: {
    editInvoice: function() {
      var invoice = this.get('model');
      console.log('invoice', invoice, invoice.get('value'));
    }
  }
});
