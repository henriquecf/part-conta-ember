import Ember from 'ember';
import moment from 'moment';

export default Ember.Mixin.create({
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('application').set('pageTitle', controller.get('title'));
  }
});
