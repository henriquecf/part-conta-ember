import Ember from 'ember';

export default Ember.Component.extend({
  categories: ["Alimentação", "Educação", "Lazer", "Moradia", "Roupas e Acessórios", "Saúde e Beleza", 
               "Transporte", "Diversos"],
  actions: {
    addInvoice: function() {
      var invoiceFields = this.getProperties('value', 'description', 'category', 'date', 'group', 'user');
      console.log('invoice', invoiceFields);
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
