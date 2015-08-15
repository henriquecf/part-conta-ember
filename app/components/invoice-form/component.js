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
      console.log(invoice.get('user.name'), invoice.get('group.name'));
      invoice.save();
      this.transitionTo('dashboard');
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
    if(!invoice) {
      this.set('model', Ember.Object.create({revenue: this.get('revenue')}))
    }
  }
});
