import { moduleForModel, test } from 'ember-qunit';

moduleForModel('invoice', 'Unit | Model | invoice', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:group']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
