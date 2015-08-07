import Ember from 'ember';

export default Ember.Controller.extend({
  mediaQueries: Ember.inject.service('media-queries'),
  pageTitle: 'PartConta',

  init: function() {
    this.get('mediaQueries').match('gt-sm', '(min-width: 600px)');
  },
  
  toolbarClasses: Ember.computed('mediaQueries.isGtSm', function() {
    if(this.get('mediaQueries.isGtSm')) {
      return '';
    }
    else {
      return 'md-tall';
    }
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
  }
});
