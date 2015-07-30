import Ember from 'ember';
import InvoiceFormMixin from '../../../mixins/invoice-form';
import { module, test } from 'qunit';

module('Unit | Mixin | invoice form');

// Replace this with your real tests.
test('it works', function(assert) {
  var InvoiceFormObject = Ember.Object.extend(InvoiceFormMixin);
  var subject = InvoiceFormObject.create();
  assert.ok(subject);
});
