import Ember from 'ember';
import UserUtils from '../mixins/user-utils';

export default Ember.Controller.extend(UserUtils, {
  queryParams: ['revenue']
});
