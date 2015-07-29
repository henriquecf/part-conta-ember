import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: ['model:invoice', 'model:group']
});

test('it returns friends with himself', function(assert) {
  var model = this.subject();
  // var store = this.store();
  var other_user = this.subject();
  Ember.run(function() {
    model.set('users', [other_user]);
  });
  
  assert.equal(JSON.stringify(model.get('allUsers')), JSON.stringify([model, other_user]));
});
