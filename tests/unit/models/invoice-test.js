import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('invoice', 'Unit | Model | invoice', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:group', 'model:category']
});

test('it exists', function(assert) {
  var model = this.subject();
  
  Ember.run(function() {
    model.set('date', '2015-07-15');
  });
  
  assert.equal(model.get('formattedDate'), '15/07/2015');
  assert.equal(model.get('dateMonth'), 7);
  assert.equal(model.get('dateYear'), 2015);
});
