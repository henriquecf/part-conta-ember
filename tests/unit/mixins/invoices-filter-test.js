import Ember from 'ember';
import InvoicesFilterMixin from '../../../mixins/invoices-filter';
import { module, test } from 'qunit';

module('Unit | Mixin | invoices filter');

// Replace this with your real tests.
test('it works', function(assert) {
  var InvoicesFilterObject = Ember.Object.extend(InvoicesFilterMixin);
  var subject = InvoicesFilterObject.create();
  
  var julyInvoice = Ember.Object.create({dateMonth: "07", dateYear: "2015"});
  var juneInvoice = Ember.Object.create({dateMonth: "06", dateYear: "2015"});
  var juneInvoice2014 = Ember.Object.create({dateMonth: "06", dateYear: "2014"});
  
  Ember.run(function() {
    subject.set('model', [juneInvoice, julyInvoice, juneInvoice2014]);
    subject.set('month', "07");
    subject.set('year', "2015");
  });
  assert.equal(JSON.stringify(subject.get('filteredModel')), JSON.stringify([julyInvoice]));

  Ember.run(function() {
    subject.set('month', "06");
  });
  assert.equal(JSON.stringify(subject.get('filteredModel')), JSON.stringify([juneInvoice]));

  Ember.run(function() {
    subject.set('year', "2014");
  });
  assert.equal(JSON.stringify(subject.get('filteredModel')), JSON.stringify([juneInvoice2014]));

  Ember.run(function() {
    subject.set('month', null);
    subject.set('year', "2015");
  });
  assert.equal(JSON.stringify(subject.get('filteredModel')), JSON.stringify([juneInvoice, julyInvoice]));
});
