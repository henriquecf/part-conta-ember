import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:reports', {
  needs: ['controller:application', 'service:media-queries', 'service:toasts']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});
