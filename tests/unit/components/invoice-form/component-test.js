import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('invoice-form', 'Unit | Component | invoice form', {
  // Specify the other units that are required for this test
  needs: ['component:mdl-textfield', 'component:mdl-checkbox', 'component:mdl-radio'],
  unit: true
});

test('it renders', function(assert) {
  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');
});
