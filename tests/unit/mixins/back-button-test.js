import Ember from 'ember';
import BackButtonMixin from '../../../mixins/back-button';
import { module, test } from 'qunit';

module('Unit | Mixin | back button');

// Replace this with your real tests.
test('it works', function(assert) {
  var BackButtonObject = Ember.Object.extend(BackButtonMixin);
  var subject = BackButtonObject.create();
  assert.ok(subject);
});
