import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('grouped-invoices', 'Integration | Component | grouped invoices', {
  unit: true
});

test('it renders', function(assert) {
  assert.expect(8);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  
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

  assert.equal(JSON.stringify(component.get('groupedExpenses')),JSON.stringify({'test': {quantity: 2, sumValue: 44}}));
  assert.equal(JSON.stringify(component.get('groupedRevenue')),JSON.stringify({'test2': {quantity: 1, sumValue: 156}}));
  assert.equal(component.get('expensesTotalValue'), 44);
  assert.equal(component.get('revenueTotalValue'), 156);
    
  Ember.run(function() {
    list.pushObject(Ember.Object.create({value: 200, revenue: true, category: "test"}));
  });

  assert.equal(JSON.stringify(component.get('groupedExpenses')),JSON.stringify({'test': {quantity: 2, sumValue: 44}}));
  assert.equal(JSON.stringify(component.get('groupedRevenue')),JSON.stringify({'test2': {quantity: 1, sumValue: 156}, 'test': {quantity: 1, sumValue: 200}}));
  assert.equal(component.get('expensesTotalValue'), 44);
  assert.equal(component.get('revenueTotalValue'), 356);
});
