import Ember from 'ember';
import InvoicesFilterMixin from '../../../mixins/invoices-filter';
import { module, test } from 'qunit';

module('Unit | Mixin | invoices filter');

// Replace this with your real tests.
test('it works', function(assert) {
  var InvoicesFilterObject = Ember.Object.extend(InvoicesFilterMixin);
  var subject = InvoicesFilterObject.create();
  
  var july_invoice = Ember.Object.create({dateMonth: "07", dateYear: "2015"});
  var june_invoice = Ember.Object.create({dateMonth: "06", dateYear: "2015"});
  Ember.run(function() {
    subject.set('model', [june_invoice, july_invoice]);
    subject.set('filters', {month: "07", year: "2015"});
  });
  
  assert.equal(JSON.stringify(subject.get('filteredModel')), JSON.stringify([july_invoice]));
});
