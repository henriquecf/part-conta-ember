import Ember from 'ember';

export default Ember.Component.extend({
  categories: ["Alimentação", "Educação", "Lazer", "Moradia", "Roupas e Acessórios", "Saúde e Beleza", 
               "Transporte", "Diversos"],
  
  actions: {
    save: function() {
      this.send(this.get('model') ? 'editInvoice' : 'addInvoice');
    },
    
    addInvoice: function() {
      var invoiceFields = this.getProperties('value', 'category', 'revenue', 'description', 'date', 'user', 'group');
      if(invoiceFields.category) {
        var invoice = this.store.createRecord('invoice', invoiceFields);
        invoice.save();
        this.transitionTo('dashboard');
      }
      else{
        this.controller.set('error', 'Escolha uma categoria');
      }
    },
    
    editInvoice: function() {
      var invoice = this.get('model');
      invoice.setProperties({value: this.get('value'), category: this.get('category'), date: this.get('date'),
        revenue: this.get('revenue'), description: this.get('description'), user: this.get('user'), group: this.get('group')});
      invoice.save();
      this.transitionTo('dashboard');
    }
  },
  
  setCategory: Ember.observer('revenue', function() {
    if(this.get('revenue')) {
      this.set('category', 'Receita');
    }
    else {
      this.set('category', null);
    }
  })
});
