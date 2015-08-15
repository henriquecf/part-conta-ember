import Ember from 'ember';
import UserUtils from '../mixins/user-utils';

export default Ember.Controller.extend(UserUtils, {
  queryParams: ['revenue'],
  revenue: false,
  title: 'Nova conta'
});
