import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  color: DS.attr(),
  
  nameAbbrev: Ember.computed('name', function() {
    return this.get('name').slice(0,2);
  })
});
