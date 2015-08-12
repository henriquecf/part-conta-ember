import Ember from 'ember';
import InvoicesFilterMixin from '../../../mixins/invoices-filter';
import { module, skip } from 'qunit';

module('Unit | Mixin | invoices filter');

skip('it filters', function(assert) {
  var InvoicesFilterObject = Ember.Object.extend(InvoicesFilterMixin);
  var subject = InvoicesFilterObject.create();
  
  var julyInvoice = Ember.Object.create({dateMonth: "07", dateYear: "2015", id: 3, date: "2015-07-15"});
  var juneInvoice = Ember.Object.create({dateMonth: "06", dateYear: "2015", id: 2, date: "2015-06-15"});
  var juneInvoice2014 = Ember.Object.create({dateMonth: "06", dateYear: "2014", id: 1, date: "2014-07-15"});
  
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
    subject.set('month', 'all');
    subject.set('year', "2015");
  });
  assert.equal(JSON.stringify(subject.get('filteredModel')), JSON.stringify([julyInvoice, juneInvoice]));

  Ember.run(function() {
    subject.set('year', ["2014", "2015"]);
  });
  assert.equal(JSON.stringify(subject.get('filteredModel')), JSON.stringify([julyInvoice, juneInvoice, juneInvoice2014]));
});

skip('it re filters when object is changed, added or removed', function(assert) {
  var InvoicesFilterObject = Ember.Object.extend(InvoicesFilterMixin);
  var subject = InvoicesFilterObject.create();
  
  var invoice1 = Ember.Object.create({dateMonth: "07", dateYear: "2015", value: 10, id: 3, date: "2015-07-15"});
  var invoice2 = Ember.Object.create({dateMonth: "07", dateYear: "2015", value: 20, id: 2, date: "2015-07-14"});
  var invoice3 = Ember.Object.create({dateMonth: "07", dateYear: "2015", value: 30, id: 1, date: "2015-07-13"});
  var invoicesList = [invoice1, invoice2];
  
  Ember.run(function() {
    subject.set('model', invoicesList);
    subject.set('month', "07");
    subject.set('year', "2015");
  });
  assert.equal(JSON.stringify(subject.get('filteredModel')), JSON.stringify([invoice1, invoice2]));

  Ember.run(function() {
    invoice2.set('value', 40);
  });
  assert.equal(JSON.stringify(subject.get('filteredModel')), JSON.stringify([invoice1, invoice2]), "should recalculate when object changes");

  Ember.run(function() {
    invoicesList.pushObject(invoice3);
  });
  assert.equal(JSON.stringify(subject.get('filteredModel')), JSON.stringify([invoice1, invoice2, invoice3]), "should recalculate when object is added");

  Ember.run(function() {
    invoicesList.removeObject(invoice2);
  });
  assert.equal(JSON.stringify(subject.get('filteredModel')), JSON.stringify([invoice1, invoice3]), "should recalculate when object is removed");
});
