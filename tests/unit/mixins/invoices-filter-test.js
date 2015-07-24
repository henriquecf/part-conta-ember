import Ember from 'ember';
import InvoicesFilterMixin from '../../../mixins/invoices-filter';
import { module, test } from 'qunit';

module('Unit | Mixin | invoices filter');

// Replace this with your real tests.
test('it works', function(assert) {
  var InvoicesFilterObject = Ember.Object.extend(InvoicesFilterMixin);
  var subject = InvoicesFilterObject.create();
  assert.ok(subject);
});
