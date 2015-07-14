import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('invoices-list', 'Unit | Component | invoices list', {
  // Specify the other units that are required for this test
  needs: ['component:number-to-currency'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(3);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  Ember.run(function() {
    component.set('list', [{},{},{},{},{},{}]);
  });
  
  assert.equal(this.$().find('div.section__text').length, 6);
  
  // Should limit the number of lists when set in listSize
  Ember.run(function() {
    component.set('list-size', 3);
  });
  
  assert.equal(this.$().find('div.section__text').length, 3);
});
