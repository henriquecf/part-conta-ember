import Ember from 'ember';

export default Ember.Controller.extend({
  mediaQueries: Ember.inject.service('media-queries'),
  pageTitle: 'PartConta',
  backButton: 'dashboard',
  
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
    toggleMenu(menu) {
      menu.toggleProperty('isOpen');
    }
  }
});
