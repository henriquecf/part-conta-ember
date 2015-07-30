import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  revenue: false,
  categories: ["Alimentação", "Educação", "Lazer", "Moradia", "Roupas e Acessórios", "Saúde e Beleza", 
               "Transporte", "Diversos", "Receita"],
  
  actions: {
    addInvoice: function() {
      var invoiceFields = this.controller.getProperties('value', 'category', 'revenue', 'description', 'date');
      var invoice = this.store.createRecord('invoice', invoiceFields);
      invoice.save();
      this.transitionTo('dashboard');
    }
  },
  
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('categories', this.get('categories'));
  }
});
