import Ember from 'ember';

export default Ember.Controller.extend({
  mediaQueries: Ember.inject.service('media-queries'),

  init: function() {
    this.get('mediaQueries').match('gt-sm', '(min-width: 600px)');
  },

  sidebarLocked: Ember.computed('mediaQueries.isGtSm', function() {
    return this.get('mediaQueries.isGtSm');
  }),

  actions: {
    toggleSidebar: function() {
      this.toggleProperty('sidebarVisible');
    }
  }
});
