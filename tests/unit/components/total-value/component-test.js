import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('total-value', 'Unit | Component | total value', {
  // Specify the other units that are required for this test
  needs: ['component:number-to-currency'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(9);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');
  
  var list = [
    Ember.Object.create({value: 20, revenue: false}),
    Ember.Object.create({value: 30, revenue: true}),
    Ember.Object.create({value: 100, revenue: false}),
    Ember.Object.create({value: 95, revenue: true})
  ];

  Ember.run(function() {
    component.set('list', list);
  });
  
  assert.equal(component.get('revenueTotal'), 125);
  assert.equal(component.get('expensesTotal'), 120);
  assert.equal(component.get('balance'), 5);
  assert.equal(component.get('isBalanceRevenue'), true);

  Ember.run(function() {
    list.pushObject(Ember.Object.create({value: '21', revenue: false}));
  });
  
  assert.equal(component.get('revenueTotal'), 125);
  assert.equal(component.get('expensesTotal'), 141);
  assert.equal(component.get('balance'), 16);
  assert.equal(component.get('isBalanceRevenue'), false);
});
