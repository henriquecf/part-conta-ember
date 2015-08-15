import Ember from 'ember';

export default Ember.Component.extend({
  categories: ["Alimentação", "Educação", "Lazer", "Moradia", "Roupas e Acessórios", "Saúde e Beleza", 
               "Transporte", "Diversos"],
  
  actions: {
    save: function() {
      this.send(this.get('model') ? 'editInvoice' : 'addInvoice');
    },
    
    addInvoice: function() {
      var invoice = this.get('model');
      console.log('invoice', invoice);
    },
    
    editInvoice: function() {
      var invoice = this.get('model');
      console.log('invoice', invoice, invoice.get('value'));
    }
  },
  
  setCategory: Ember.observer('model.revenue', function() {
    if(this.get('model.revenue')) {
      this.set('category', 'Receita');
    }
    else {
      this.set('category', null);
    }
  }),
  
  didInsertElement: function() {
    var invoice = this.get('model');
    if(invoice) {
      this.set('revenue', invoice.get('revenue'));
    }
    else {
      this.set('model', Ember.Object.create({}));
    }
  }
});
