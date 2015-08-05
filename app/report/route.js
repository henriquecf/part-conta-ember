import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    if(params.type === 'group') {
      this.setProperties({groupByField: 'group', fieldName: 'group.name', type: 'grupo', });
    }
    else if(params.type === 'user') {
      this.setProperties({groupByField: 'user', fieldName: 'user.name', type: 'usuário'});
    }
    else{
      this.setProperties({groupByField: 'category', fieldName: null, type: 'categoria'});
    }
    if(params.revenue === 'revenue') {
      this.setProperties({isRevenue: true, revenueOrExpense: 'Ganhos'});
    }
    else {
      this.setProperties({isRevenue: false, revenueOrExpense: 'Despesas'});
    }
    return this.store.findAll('invoice');
  },
  
  groupByField: 'category',
  fieldName: null,
  isRevenue: false,
  revenueOrExpense: 'Despesas',
  type: 'categoria',
  
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.setProperties(this.getProperties('groupByField', 'fieldName', 'isRevenue', 'revenueOrExpense', 'type'));
  }
});
