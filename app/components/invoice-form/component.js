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
  },
  
  didInsertElement: function() {
    var invoice = this.get('invoice');
    if(invoice) {
      this.controller.setProperties({
        value: invoice.get('value'), category: invoice.get('category'), description: invoice.get('description'),
        revenue: invoice.get('revenue'), date: invoice.get('date'), group: invoice.get('group'), user: invoice.get('user')
      });
    }
  }
});
