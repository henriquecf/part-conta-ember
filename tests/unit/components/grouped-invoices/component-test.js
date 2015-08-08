import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('grouped-invoices', 'Unit | Component | grouped invoices', {
  unit: true
});

test('it renders', function(assert) {
  var component = this.subject();
  var object = Ember.Object.create({value: 156, revenue: true, category: "test2"});
  var list = [
      Ember.Object.create({value: 40.5, revenue: false, category: "test", description: "desc"}),
      object,
      Ember.Object.create({value: 3.5, revenue: false, category: "test", description: "desc2"})
    ];
    
  Ember.run(function() {
    component.set('list', list);
    component.set('groupByField', 'category');
  });

  assert.equal(JSON.stringify(component.get('groupedInvoices')),JSON.stringify([{label: 'category:test:false', value: 44, color: "grey"}]));
  assert.equal(component.get('totalValue'), 44);
    
  Ember.run(function() {
    component.set('isRevenue', true);
  });

  assert.equal(JSON.stringify(component.get('groupedInvoices')),JSON.stringify([{label: 'category:test2:true', value: 156, color: "grey"}]));
  assert.equal(component.get('totalValue'), 156);
    
  Ember.run(function() {
    component.set('isRevenue', false);
    component.set('groupByField', 'description');
  });

  assert.equal(JSON.stringify(component.get('groupedInvoices')),JSON.stringify([{label: 'description:desc:false', value: 40.5, color: "grey"}, 
                                                                                {label: 'description:desc2:false', value: 3.5, color: "grey"}]));
  assert.equal(component.get('totalValue'), 44);
    
  var group = Ember.Object.create({name: 'group'});
  Ember.run(function() {
    object.set('group', group);
    component.set('isRevenue', true);
    component.set('showGraph', false);
    component.set('fieldName', 'group.name');
  });

  assert.equal(JSON.stringify(component.get('groupedInvoices')),JSON.stringify([{label: 'group', value: 156, color: "grey"}]));
  assert.equal(component.get('totalValue'), 156);
});
