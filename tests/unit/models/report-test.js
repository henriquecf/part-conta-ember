import { moduleForModel, test } from 'ember-qunit';

moduleForModel('report', 'Unit | Model | report', {
  // Specify the other units that are required for this test.
  needs: ['model:invoice']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
