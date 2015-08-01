import Ember from 'ember';

export default Ember.Mixin.create({
  revenue: false,
  categories: ["Alimentação", "Educação", "Lazer", "Moradia", "Roupas e Acessórios", "Saúde e Beleza", 
               "Transporte", "Diversos", "Receita"],
  
  actions: {
    addInvoice: function() {
      var invoiceFields = this.controller.getProperties('value', 'category', 'revenue', 
                                                        'description', 'date', 'user', 'group');
      var invoice = this.store.createRecord('invoice', invoiceFields);
      invoice.save();
      this.transitionTo('dashboard');
    }
  },
  
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('categories', this.get('categories'));
    controller.set('revenue', this.get('revenue'));
    if(model) {
      controller.setProperties({value: model.get('value'), category: model.get('category'),
                                revenue: model.get('revenue'), user: model.get('user'),
                                description: model.get('description'), date: model.get('date'),
                                group: model.get('group')});
    }
    else {
      controller.setProperties({value: null, category: null, revenue: null, date: null, 
                                description: null, user: null, group: null});
    }
  }
});
