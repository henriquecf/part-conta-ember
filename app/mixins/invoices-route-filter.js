import Ember from 'ember';
import moment from 'moment';

export default Ember.Mixin.create({
  beforeModel: function(transition) {
    this._super(transition);
    this.set('month', this.controllerFor('application').get('month') || moment().format('MM'));
    this.set('year', this.controllerFor('application').get('year') || moment().format('YYYY'));
  },
  
  model: function(params) {
    var month = this.get('month');
    var year = this.get('year');
    return this.store.findAll('invoice').then(function(invoices) {
      return invoices.filter(function(invoice) {
        return invoice.get('dateMonth') === month && invoice.get('dateYear') === year;
      });
    });
  },
  
  setupController: function(controller, model) {
    this._super(controller, model);
    var appController = this.controllerFor('application');
    var filters = appController.getProperties('month', 'year');
    if(!filters.month) {
      appController.set('month', this.get('month'));
    }
    if(!filters.year) {
      appController.set('year', this.get('year'));
    }
  },
  
  actions: {
    filtersChanged: function() {
      this.refresh();
    }
  }
});
