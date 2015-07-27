import Ember from 'ember';

export default Ember.Component.extend({
  revenue: false,
  categories: ["Alimentação", "Educação", "Lazer", "Moradia", "Roupas e Acessórios", "Saúde e Beleza", 
               "Transporte", "Diversos", "Receita"],
  actions: {
    addInvoice: function() {
      var invoice = this.controller.getProperties('value', 'category', 'revenue', 'description', 'date');
      this.sendAction('action', invoice);
    }
  }
});
