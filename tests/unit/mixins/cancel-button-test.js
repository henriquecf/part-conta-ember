import Ember from 'ember';
import CancelButtonMixin from '../../../mixins/cancel-button';
import { module, test } from 'qunit';

module('Unit | Mixin | cancel button');

// Replace this with your real tests.
test('it works', function(assert) {
  var CancelButtonObject = Ember.Object.extend(CancelButtonMixin);
  var subject = CancelButtonObject.create();
  assert.ok(subject);
});
