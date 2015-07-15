import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('grouped-invoices', 'Unit | Component | grouped invoices', {
  unit: true
});

test('it renders', function(assert) {
  var component = this.subject();
  var list = [
      Ember.Object.create({value: 40.5, revenue: false, category: "test", description: "desc"}),
      Ember.Object.create({value: 156, revenue: true, category: "test2"}),
      Ember.Object.create({value: 3.5, revenue: false, category: "test", description: "desc2"})
    ];
    
  Ember.run(function() {
    component.set('list', list);
    component.set('groupByField', 'category');
  });

  assert.equal(JSON.stringify(component.get('groupedInvoices')),JSON.stringify([{name: 'test', sumValue: 44}]));
  assert.equal(component.get('totalValue'), 44);
    
  Ember.run(function() {
    component.set('isRevenue', true);
  });

  assert.equal(JSON.stringify(component.get('groupedInvoices')),JSON.stringify([{name: 'test2', sumValue: 156}]));
  assert.equal(component.get('totalValue'), 156);
    
  Ember.run(function() {
    component.set('isRevenue', false);
    component.set('groupByField', 'description');
  });

  assert.equal(JSON.stringify(component.get('groupedInvoices')),JSON.stringify([{name: 'desc', sumValue: 40.5}, {name: 'desc2', sumValue: 3.5}]));
  assert.equal(component.get('totalValue'), 44);
});
