import Ember from 'ember';
import InvoicesRouteFilterMixin from '../../../mixins/invoices-route-filter';
import { module, test } from 'qunit';

module('Unit | Mixin | invoices route filter');

// Replace this with your real tests.
test('it works', function(assert) {
  var InvoicesRouteFilterObject = Ember.Object.extend(InvoicesRouteFilterMixin);
  var subject = InvoicesRouteFilterObject.create();
  assert.ok(subject);
});
