import Ember from 'ember';

export default Ember.Mixin.create({
  hasManyUsers: Ember.computed('session.currentUser.users.[]', function() {
    return this.get('session.currentUser.users.length') !== 0;
  }),
  
  hasManyGroups: Ember.computed('session.currentUser.groups.[]', function() {
    return this.get('session.currentUser.groups.length') !== 1;
  }),
});
