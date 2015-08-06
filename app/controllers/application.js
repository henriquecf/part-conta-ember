import Ember from 'ember';

export default Ember.Controller.extend({
  mediaQueries: Ember.inject.service('media-queries'),

  init: function() {
    this.get('mediaQueries').match('gt-sm', '(min-width: 600px)');
  },

  sidebarLocked: Ember.computed('mediaQueries.isGtSm', function() {
    return this.get('mediaQueries.isGtSm');
  }),
  
  toastNotifications: Ember.computed('toastService.toasts.[]', function() {
    return Ember.A(this.get('toastService.toasts'));
  }),
  
  toastService: Ember.inject.service('toasts'),
  
  showToast: function(content) {
    this.get('toastService').showToast({
      position: 'bottom left',
      content: content
    });
  },

  actions: {
    toggleSidebar: function() {
      this.toggleProperty('sidebarVisible');
    }
  }
});
