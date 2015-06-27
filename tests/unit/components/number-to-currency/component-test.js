import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('number-to-currency', 'Unit | Component | number to currency', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(4);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  Ember.run(function() {
    component.set('value', 25.1019);
  });
  assert.equal($.trim(this.$().text()), 'R$ 25.10');
  assert.ok(this.$().attr('class').match('expense'), "Should be a expense by default");

  Ember.run(function() {
    component.set('isRevenue', true);
  });
  assert.ok(this.$().attr('class').match('revenue'), "Should become a revenue when explicitly set");
});
