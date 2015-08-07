import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  email: DS.attr('string'),
  color: DS.attr('string'),
  groups: DS.hasMany('group', {async: true}),
  users: DS.hasMany('user', {async: true}),
  
  allUsers: Ember.computed('users', function() {
    var usersList = this.get('users').slice();
    usersList.splice(0, 0, this);
    return usersList;
  })
});
