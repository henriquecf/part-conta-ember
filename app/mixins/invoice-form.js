import Ember from 'ember';
import moment from 'moment';

export default Ember.Mixin.create({
  revenue: false,
  categories: ["Alimentação", "Educação", "Lazer", "Moradia", "Roupas e Acessórios", "Saúde e Beleza", 
               "Transporte", "Diversos"],
  
  actions: {
    addInvoice: function() {
      var invoiceFields = this.controller.getProperties('value', 'category', 'revenue', 
                                                        'description', 'date', 'user', 'group');
      if(invoiceFields.category) {
        var invoice = this.store.createRecord('invoice', invoiceFields);
        invoice.save();
        this.controllerFor('application').showToast(this.controller.get('expenseOrRevenue') + ' criado com sucesso');
        this.transitionTo('dashboard');
      }
      else{
        this.controller.set('error', 'Escolha uma categoria');
      }
    },
    
    editInvoice: function() {
      var ctrl = this.controller;
      var invoice = ctrl.get('model');
      invoice.setProperties({value: ctrl.get('value'), category: ctrl.get('category'), date: ctrl.get('date'),
        revenue: ctrl.get('revenue'), description: ctrl.get('description'), user: ctrl.get('user'), group: ctrl.get('group')});
      invoice.save();
      this.transitionTo('dashboard');
    }
  },
  
  beforeModel: function(transition) {
    if(transition.queryParams.revenue) {
      this.set('revenue', true);
    }
    else {
      this.set('revenue', false);
    }
  },
    
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('categories', this.get('categories'));
    controller.set('revenue', this.get('revenue'));
    var addOrEdit = 'addInvoice';
    if(model) {
      controller.setProperties({value: model.get('value'), category: model.get('category'),
                                revenue: model.get('revenue'), user: model.get('user'),
                                description: model.get('description'), date: model.get('date'),
                                group: model.get('group')});
      addOrEdit = "editInvoice";
    }
    else {
      controller.setProperties({value: null, category: null, date: moment().format('DD/MM/YYYY'), 
                                description: null, user: null, group: null});
    }
    if(controller.get('revenue')) {
      controller.set('expenseOrRevenue', 'Ganho');
      controller.set('category', 'Receita');
      this.controllerFor('application').set('pageTitle', 'Novo Ganho');
    }
    else {
      controller.set('expenseOrRevenue', 'Gasto');
      this.controllerFor('application').set('pageTitle', 'Novo Gasto');
    }
    controller.set('addOrEdit', addOrEdit);
  }
});
