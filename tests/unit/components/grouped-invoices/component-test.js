import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('grouped-invoices', 'Unit | Component | grouped invoices', {
  unit: true
});

test('it renders', function(assert) {
  var component = this.subject();
  var list = [
      Ember.Object.create({value: 40.5, revenue: false, category: "test"}),
      Ember.Object.create({value: 156, revenue: true, category: "test2"}),
      Ember.Object.create({value: 3.5, revenue: false, category: "test"})
    ];
    
  Ember.run(function() {
    component.set('list', list);
    component.set('groupByField', 'category');
  });

  assert.equal(JSON.stringify(component.get('groupedInvoices')),JSON.stringify([{name: 'test', sumValue: 44}]));
  assert.equal(component.get('totalValue'), 44);
    
  Ember.run(function() {
    list.pushObject(Ember.Object.create({value: 200, revenue: false, category: "test2"}));
  });

  assert.equal(JSON.stringify(component.get('groupedInvoices')),JSON.stringify([{name: 'test', sumValue: 44}, {name: 'test2', sumValue: 200}]));
  assert.equal(component.get('totalValue'), 244);
  //assert.equal(JSON.stringify(component.get('groupedRevenue')),JSON.stringify({'test2': {quantity: 1, sumValue: 156}, 'test': {quantity: 1, sumValue: 200}}));
  //assert.equal(component.get('revenueTotalValue'), 356);
});
