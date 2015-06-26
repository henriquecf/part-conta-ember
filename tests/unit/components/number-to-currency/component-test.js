import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('number-to-currency', 'Unit | Component | number to currency', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  Ember.run(function() {
    component.set('value', 25.100);
  });
  assert.equal(this.$().text(), 'R$ 25.00');
});
