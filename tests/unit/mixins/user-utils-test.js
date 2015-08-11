import Ember from 'ember';
import UserUtilsMixin from '../../../mixins/user-utils';
import { module, test } from 'qunit';

module('Unit | Mixin | user utils');

// Replace this with your real tests.
test('it works', function(assert) {
  var UserUtilsObject = Ember.Object.extend(UserUtilsMixin);
  var subject = UserUtilsObject.create();
  assert.ok(subject);
});
