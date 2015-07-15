import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('invoice', 'Unit | Model | invoice', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:group']
});

test('it exists', function(assert) {
  var model = this.subject();
  
  Ember.run(function() {
    model.set('date', '2015-07-15');
  });
  
  assert.equal(model.get('formatted_date'), '15/07/2015');
});
